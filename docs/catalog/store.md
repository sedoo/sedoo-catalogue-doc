
## Aeris-search-criteria-store 

Permet de gérer la sélection des critères de recherches. À chaque fois qu’un utilisateur sélectionne ou désélectionne un critère, la mutation `setSelectedCriteria` est appelée. Quand l’utilisateur réinitialise les critères sélectionnés, la mutation `clearSelectedCriteria` est appelée.

## Aeris-notification-store
::: danger
DEPRECATED
:::

à définir. 

## Aeris-temporal-search-criteria 
à définir.

## Aeris-catalog-cart-store 
à définir.

## Aeris-catalog-store 
Gère l’authentification et les droits d’édition de l’utilisateur.

## Aeris-catalog-searchcriteria-components-store et aeris-catalogue-landing-page-store 

C’est deux stores permettent de gérer la récupération et la mise en cache des composants utilisés pour afficher les blocs de métadonnées ou de critères de recherches.
Les composants VueJS demandent l’importation des composants dont ils ont besoin après leur création ou lorsque les métadonnées d’une nouvelle fiche sont chargées (avec un watcher). Une fois les scripts des composants récupérés sur le CDN, ils sont rajoutés dans une balise « script » et leur référence est gardée dans le store.
De plus le store aeris-catalogue-landing-page-store possède plusieurs flags permettant de savoir si l’utilisateur est en train de créer ou éditer une fiche.
Le composant de titre est à part car son affichage se fait directement dans le composant md-tabs-container. De plus, c’est aussi dans ce store que sont stockées les modifications réalisées par un utilisateur dans une fiche. Lorsque l’utilisateur sauvegarde, c’est à partir de ce store qu’une requête en post (création d’une nouvelle fiche) ou patch (modification d’une fiche existante) est envoyée.

## Aeris-catalog-summaries-store 
::: danger
Deprecated

__remplacé par le module [`summaries`](#summaries)__
:::

## Aeris-keyword-search-criteria 
à définir. 

## Aeris-spatial-criteria-store 
à définir.

## Aeris-snackbar-store : 
à définir.

## summaries


...