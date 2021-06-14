---
sidebarDepth: 2
---

# Déploiement  

Pour le déploiement, l'url d'upload des modules sur le cdn du sedoo est la suivante :
`https://services.aeris-data.fr/cdn/blockrepo/v1_0/upload/`

Si vous devez changer l'url d'upload, modifiez la valeur de la variable URL dans le fichier deploy.config.js La liste des modules déployés est visible à cette adresse: `https://services.aeris-data.fr/cdn/blockrepo/v1_0/list`

## Les scripts npm

::: warning
Il y a deux types de modules dans ce projet :
- les modules utilisés par le catalogue nécessitant un `npm run build:module ...` ou `run build:modules...` plus un `npm run deploy` pour être déployés,
- le webcomposant landing page nécessitant un "npm run build" pour être déployé.
Si le projet aeris-catalogue-components a été mis à jour, supprimez /node_modules et refaites un `npm run install:roll`

L'ensemble des scripts ont était testé sous Linux ( utilisation de la commande rm etc. ), adaptez votre environnement de développement en conséquence. Dans le fichier package.json, plusieurs scripts on été créé pour faciliter la création et le déploiement des modules ESM.
:::

 Les scripts sont les suivants.

### Conversion de l'ensemble des SFC : 
`modules utilisés par le catalogue`
```bash 
npm run build:module
```

Permet la création des modules listés dans le fichier rollupBuildAllComponents.config.js. Cela signifie que vous devez rajouter le path vers tout SFC que vous souhaitez convertir en module ESM dans ce fichier par exemple :

```javascript
const  ComponentVue  =  [
"./src/lib/modules/aeris-metadata-blocks/aeris-hello-world/aeris-hello-world.vue"
];
```


### Conversion d'un unique SFC :
`modules utilisé par le catalogue`

```bash 
npm run build:module
```

La même chose que précédemment à la différence qu'il ne convertie qu'un bloc de la manière suivante :
```bash 
npm run build:module -- --input Path/to/file.ext --file "path/and/name/for/the/output/file"
```

Par exemple :
```bash 
npm run build:module -- --input "src/lib/modules/aeris-metadata-blocks/aeris-metadata-citations/aeris-metadata-citations.vue" 
--file "module/aeris-metadata-citation.vue.esm.js"
```

### Conversion et déploiement de l'ensemble des modules utilisés par la catalogue

Pour ce faire utilisez le script suivant :
```bash 
npm run deploy:modules
```

### Conversion et déploiement du Web composant landing-page

Pour ce faire :
```bash 
npm run build
```