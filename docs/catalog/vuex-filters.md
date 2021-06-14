# Filters

## Introduction

Ce module est en charge de la gestion des critères de recherches (aka filtres), qu'ils proviennent des composants `aeris-searchcriteria-*` (via une interraction de l'utilisateur), des paramètres de l'url ou encore du localStorage.

## Fonctionnement 

L'état du module `filters` ne conserve que deux informations :
### State initial 
```javascript 
const state = {
  filters: new URLSearchParams(),
  moduleSet: new Set()
};
```
`moduleSet` est un objet [Set](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Set), il contient le nom de tout les sous modules qui sont enregistrés dynamiquement par les composants `aeris-searchcriteria-*`. 
Lorsque l'un de ces composants enregistre son module, il enregistre le nom de son module dans cette objet en effectuant un commit `SET_MODULE_LIST`. Cela permet au module `filters` d'interragir avec ses sous modules qu'il ne connait pas au chargement de l'application (pour plus de détails quant à l'enregristrement dynamique d'un module dans le store, se referrer à la [documentation](../searchcriteria/vuex-modules&helpers) des searchcriteria, chapitre Store Vuex / helpers ).

La seconde données du state : `filters` est un objet `URLSearchParams`. Il s'agit des critères de recherches selectionnés par l'utilisateur sous forme de url query : 
`'?param1=criteria1&param2=criteria'`. Elle permet à l'utilisateur de transmettre un lien ouvrant l'application avec la recherche et la fiche sellectionnée en cours. 

## Interaction avec les composants _searchcriteria_ 

Nécéssite 3 méthodes implémentés au sein d'un module enfant :
|nom de methode | type | description |
|----------------|-----|------------|
| `GET_CRITERIA`| _getter_| permet la recupération des critères selectionnées par le parent |
| `RESET_CRITERIA`|_action_| permet la reinitialisation de l'état du module|
| `SET_STATE_FROM_PARENT_MODULE`|_mutation_| permet de transmettre une sélection de critère par son parent|


## Interaction avec le module _summaries_

La communication entre ces deux modules est effectué à l'initiative du module `summaries` uniquement. 
cf: [doc:vuex-modules/summaries](./vuex-summaries#interaction-avec-le-module-filters) 