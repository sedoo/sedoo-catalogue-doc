(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{155:function(e,s,a){"use strict";a.r(s);var t=a(0),n=Object(t.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"deploiement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploiement","aria-hidden":"true"}},[e._v("#")]),e._v(" Déploiement")]),a("p",[e._v("Pour le déploiement, l'url d'upload des modules sur le cdn du sedoo est la suivante :\n"),a("code",[e._v("https://services.aeris-data.fr/cdn/blockrepo/v1_0/upload/")])]),a("p",[e._v("Si vous devez changer l'url d'upload, modifiez la valeur de la variable URL dans le fichier deploy.config.js La liste des modules déployés est visible à cette adresse: "),a("code",[e._v("https://services.aeris-data.fr/cdn/blockrepo/v1_0/list")])]),a("h2",{attrs:{id:"les-scripts-npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#les-scripts-npm","aria-hidden":"true"}},[e._v("#")]),e._v(" Les scripts npm")]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),a("p",[e._v("Il y a deux types de modules dans ce projet :")]),a("ul",[a("li",[e._v("les modules utilisés par le catalogue nécessitant un "),a("code",[e._v("npm run build:module ...")]),e._v(" ou "),a("code",[e._v("run build:modules...")]),e._v(" plus un "),a("code",[e._v("npm run deploy")]),e._v(" pour être déployés,")]),a("li",[e._v('le webcomposant landing page nécessitant un "npm run build" pour être déployé.\nSi le projet aeris-catalogue-components a été mis à jour, supprimez /node_modules et refaites un '),a("code",[e._v("npm run install:roll")])])]),a("p",[e._v("L'ensemble des scripts ont était testé sous Linux ( utilisation de la commande rm etc. ), adaptez votre environnement de développement en conséquence. Dans le fichier package.json, plusieurs scripts on été créé pour faciliter la création et le déploiement des modules ESM.")])]),a("p",[e._v("Les scripts sont les suivants.")]),a("h3",{attrs:{id:"conversion-de-l-ensemble-des-sfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conversion-de-l-ensemble-des-sfc","aria-hidden":"true"}},[e._v("#")]),e._v(" Conversion de l'ensemble des SFC :")]),a("p",[a("code",[e._v("modules utilisés par le catalogue")])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run build:module\n")])])]),a("p",[e._v("Permet la création des modules listés dans le fichier rollupBuildAllComponents.config.js. Cela signifie que vous devez rajouter le path vers tout SFC que vous souhaitez convertir en module ESM dans ce fichier par exemple :")]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v("  ComponentVue  "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"./src/lib/modules/aeris-metadata-blocks/aeris-hello-world/aeris-hello-world.vue"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("h3",{attrs:{id:"conversion-d-un-unique-sfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conversion-d-un-unique-sfc","aria-hidden":"true"}},[e._v("#")]),e._v(" Conversion d'un unique SFC :")]),a("p",[a("code",[e._v("modules utilisé par le catalogue")])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run build:module\n")])])]),a("p",[e._v("La même chose que précédemment à la différence qu'il ne convertie qu'un bloc de la manière suivante :")]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run build:module -- --input Path/to/file.ext --file "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"path/and/name/for/the/output/file"')]),e._v("\n")])])]),a("p",[e._v("Par exemple :")]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run build:module -- --input "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"src/lib/modules/aeris-metadata-blocks/aeris-metadata-citations/aeris-metadata-citations.vue"')]),e._v(" \n--file "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"module/aeris-metadata-citation.vue.esm.js"')]),e._v("\n")])])]),a("h3",{attrs:{id:"conversion-et-déploiement-de-l-ensemble-des-modules-utilisés-par-la-catalogue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conversion-et-déploiement-de-l-ensemble-des-modules-utilisés-par-la-catalogue","aria-hidden":"true"}},[e._v("#")]),e._v(" Conversion et déploiement de l'ensemble des modules utilisés par la catalogue")]),a("p",[e._v("Pour ce faire utilisez le script suivant :")]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run deploy:modules\n")])])]),a("h3",{attrs:{id:"conversion-et-déploiement-du-web-composant-landing-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conversion-et-déploiement-du-web-composant-landing-page","aria-hidden":"true"}},[e._v("#")]),e._v(" Conversion et déploiement du Web composant landing-page")]),a("p",[e._v("Pour ce faire :")]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run build\n")])])])])}],!1,null,null,null);s.default=n.exports}}]);