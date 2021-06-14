# Summaries

## state initial

```javascript 
const state = {
  summaries: [],
  currentSelection: null,
  range: {
    min: 0,
    max: 24
  },
  step: 25,
  total: 0,
  language: "en"
};
```

## Interaction avec le module `filters`
| nom de l'action     | type       | description                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET_ALL             | _dispatch_ | recupère tous les filtres de recherches séléctionnés. Utilisé au moment de recherché des résultats, avant l'appel vers l'api                                                                                                                                                                                                                                                       |
| RESET_ALL           | _dispatch_ | lorsque l'utilisateur Reset les résultat de sa recherche, `summaries` efface les résultats de son état et fait appel à cette action pour prévenir le module `filters` de reset tous ses modules enfants                                                                                                                                                                            |
| RESET_FILTERS_PARAM | _commit_   | est utilisé dans l'action `GET_SUMMARIES` dans le module `Summaries`, si option.reset est à true |


## mutations

