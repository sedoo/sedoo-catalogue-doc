# Installation

Pour lancer l'installation exécutez la commande suivante :
Un bug empêche la récupération de la bonne version du plugin rollup-plugin-vue par l'intermédiaire du npm install habituel (ce script a vocation à être supprimé dès lors que le bug sera corrigé) .

`npm run install:roll`
 
## Principes

Le créations des modules EcmaScript (ESM) se fait en utilisant le bundler Rollup. Il permet une conversion des Single File Component (SFC) en modules EcmaScript (ESM) avec une grande simplicité sans modifier ses habitudes de codage hormis les quelques points précisés dans la section limitation. Pour aller plus loin dans RollUp : [Doc officielle](https://rollupjs.org/guide/en/) Vous n'avez pas à importer dans un SFC des modules ou librairies comme **axios** ou bien **vuetify**. Ils sont importés globalement dans le catalogue et seront récupérés par le bloc lors de leur instanciation dans le contexte du composant d'arrivé.
