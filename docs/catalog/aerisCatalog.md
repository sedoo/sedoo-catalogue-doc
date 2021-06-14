## Description

C’est le composant principal. Il est appelé par le composant aeris-catalogue (ce qui devrait changer dans le futur). Il appelle et contrôle partiellement les différentes parties de l’application :

- Le composant qui affiche les critères de recherche : `aeris-catalog-criteria`, qui est utilisé avec des slots VueJs, 
-  Le composant du cadis de téléchargement : `aeris-catalog-cart`,
- Le composant qui affiche le résultat de la recherche : `aeris-catalog-summaries`,
- le composant qui affiche la fiche sélectionnée à partir des summaries : `aeris-catalog-metadata-panel`,
- le composant qui affiche les différents boutons d’éditions en haut du panel : `aeris-landing-page-edition`.

Au moment de la création du composant, un script se lance pour l’identification de l’utilisateur.

## Affichage des critères de recherches

Le code qui permet d’afficher les critères de recherches se trouve dans le composant `aeris-catalogue`, à travers le slot « `buttons-criteria` » qui est envoyé à `aeris-catalog`.

La méthode `fetchTemplateAndLoadSearchCriteriaComponents` permet d’appeler dynamiquement les différents blocs de critères. D’abord un premier service est contacté pour obtenir le template des blocs avec comme paramètre le projet pour lequel l’application a été instanciée [https://services.sedoo.fr/metadatatemplate/swagger-ui.html#/Search32criteria32service324532Version322](https://services.sedoo.fr/metadatatemplate/swagger-ui.html#/Search32criteria32service324532Version322).

Une fois ce template en mémoire, une autre requête est envoyée pour interroger le CDN où se trouve les différents blocs, ceux attendus sont téléchargés et ajoutés dans une balise script. Avec leur référence, chaque composant est appelé. La partie du code qui appelle le CDN se trouve dans le store [aeris-catalog-searchcriteria-components-store](/catalog/store#Aeris-notification-store).

## Affichage d’une fiche de métadonnées

### md-tabs-container

L’affichage d’une fiche se fait dans le composant `md-tabs-container`, qui est appelé par `aeris-catalog-metadata-panel`. 

Au chargement du composant metadata-panel, les métadonnées sont récupérés avec l’uuid de la fiche, et transmises à travers la props « metadata » vers `md-tabs-container`.
Comme pour les critères de recherches, le code des différents composants pour afficher les blocs de métadonnées sont chargés dynamiquement à partir du CDN du SEDOO.

Au moment où `md-tabs-container` est monté, une requête est envoyée vers le service de template (voir [swagger](/)). 
Ce service prends en paramètre un nom de template qui est normalement renseigné dans les métadonnées de la fiche. Si ce n’est pas le cas, un template par défaut est chargé.

Un template est composé d’une liste d’onglets, et chaque onglet est composé d’une liste de blocs de métadonnées à afficher. Pour chaque bloc il est possible de rajouter des props supplémentaires qui seront utilisées dans le code du composant dudit bloc.

```javascript 
{
   "name": "aeris-metadata-downloads",
   "editable": true,
   "props": {
     "downloadComponentName": "aeris-metadata-year-select-download"
   }
}
```

### md-tab-generic

L’affichage de chaque onglet se fait dans le composant md-tab-generic. Le composant md-tabs-container transmet les props suivantes :

|props|description|
|----|------------|
| componentsToDisplay| la liste des blocs à afficher|
| metadata | les métadonnées de la fiche|
| isEditingSheet | un flag permettant d’indiquer si l’utilisateur est en train de créer ou d’éditer une fiche|
| blockNameToFocus | si renseignée, permet de faire un focus sur un bloc particulier une fois le composant monté|
|metadataService| l’adresse du service de métadonnées|

Une fois le composant créé, le store `aeris-catalogue-landing-page-store` est utilisé avec l’action « `importThoseComponents` » qui permet d’aller charger le code du composant de chaque bloc sur le CDN du SEDOO. 
Pour la navigation, chaque onglet appelle une instance du composant `aeris-landing-page-programmatic-scrolling`. Ce composant permet aux utilisateurs de focus rapidement un bloc de métadonnées.

Dans le template html, les props suivantes doivent être transmises à chaque composant :
|props|description|
|-----|-----------|
| metadata-service| l’adresse du service pour gérer les métadonnées|
| metadata| les métadonnées de la fiche|
| is-edition-allowed| si l’utilisateur est en mode édition ou non, pour changer l’affichage de chaque bloc|

Les évènements suivants sont écoutés :
|nom de l'événement | description |
|------------------ | ----------- |
|sendEditedData| pour envoyer les modifications vers le store qui s’occupe de sauver les données enregistrées|
|getVisibility| pour savoir si le composant est visible et gérer la fonctionnalité de programmatic-scrolling|

### Aeris-landing-page-edition
Ce composant permet d’afficher les différents boutons d’édition. Pour communiquer avec les autres composants un event-bus est utilisé : `$editionEventBus`. Les composants qui écoutent ce bus d’évènements sont les suivants : `md-tabs-container` (edit, duplicate, delete, save) et `aeris-catalog-metadata-panel` (duplicate).

L’affichage des différents boutons est déterminé par l’écoute des états du store `aeris-catalogue-landing-page-store`.