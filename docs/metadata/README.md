---
# sidebarDepth: 4
---

# Presentation

Le dépôt de code se trouve à l’adresse suivante : [https://git.icare.univ-lille1.fr/aeris/aeris-metadata-components](https://git.icare.univ-lille1.fr/aeris/aeris-metadata-components)

Ce projet permet de créer des modules EcmaScript (ESM) à partir de Single File Component (SFC) VueJS et de les déployer sur un Content Delivery Network (CDN) du SEDOO.
    
Les SFC doivent être de la forme :

```html  
<i18n>
    // json object
</i18n>

<template>
    <!-- html  -->
</template>

<script>
    // javascript code
</script>

<style scoped>
    <!-- css styling --> 
</style>
```
::: tip
La partie i18n est facultative s’il n'y a aucun besoin de traduction dans le composant.
:::
