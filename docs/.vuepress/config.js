
module.exports = {
    title: 'CATALOGUE AERIS',
    description: 'by Sedoo',
    base: '/sedoo-catalogue-doc/',
    dest: 'public',
    // markdown: {
    //     lineNumbers: true,
    //     toc: { includeLevel: [1] }
    // },
    themeConfig: {
        smoothScroll: true,
        // displayAllHeaders: true,
        nav: [
            {
                text: 'Home',
                link: '/',
            },
            {
                text: 'Catalogue',
                link: "/catalog/"
            },
            {
                text: 'Blocs de métadonnées',
                link: '/metadata/',
            },
            {
                text: 'Blocs de critère de recherche',
                link: '/searchcriteria/',
            },
            // INTERNATIONAL TRANSLATE TO COME ?
            // {
            //     text: 'Languages',
            //     ariaLabel: 'Language Menu',
            //     items: [
            //         { text: 'Fr', link: '/language/french/' },
            //         { text: 'En', link: '/language/english/' }
            //     ]
            // },
            {
                text: 'Git',
                link: 'https://git.icare.univ-lille1.fr/aeris/'
            }
        ],
        // sidebar: [
        //     {
        //         title: "Application Catalogue",
        //         path: '/catalog/',
        //         // sidebar: 'auto',
        //         sidebarDepth: 3,

        //         collapsable: false,
        //         children: [
        //             '/catalog/howItWorks',
        //             ['/catalog/aerisCatalog', 'catalogue Aeris'],
        //             ['/catalog/store', 'list des modules vuex'],
        //             '/catalog/improvement'
        //         ]
        //     },
        //     {
        //         title: 'modules vuex en détail',
        //         path: '/vuexModules/',
        //         // sidebar: 'auto',
        //         children: [
        //             '/vuexModules/summaries',
        //             '/vuexModules/filters',
        //         ]

        //     }
        // {
        //     title: 'Blocs de Métadonnées',
        //     path: '/metadata/',
        //     collapsable: false,
        //     children: [

        //         '/metadata/install',
        //         '/metadata/deploy',
        //         '/metadata/limitation'
        //     ]
        // }

        // ],
        sidebar: {
            '/catalog/': [
                {
                    title: "Pour débuter",
                    collapsable: false,
                    children: ['src-code', '', 'project-structure']
                },
                {
                    title: "Application Catalogue",
                    collapsable: false,
                    sidebar: 'auto',
                    sidebarDepth: 3,
                    children: [
                        'howItWorks',
                        ['aerisCatalog', 'Catalogue Aeris'],
                        ['store', 'Liste des modules Vuex'],
                        'improvement',
                    ]
                },
                {
                    title: 'Store Vuex',
                    sidebar: 'auto',
                    collapsable: false,
                    children: ['vuex-introduction', 'vuex-filters', 'vuex-summaries']

                }
            ],
            '/metadata/':
                [
                    {
                        title: 'Blocs de Métadonnées',
                        collapsable: false,
                        children: [
                            '',
                            'install',
                            'deploy',
                            'limitation'
                        ]
                    },

                ],
            '/searchcriteria/': [
                '',
                ['keyword', 'Barre de recherche par mot-clés'],
                ['treeview', 'CheckboxCriteria  '],
                ['vuex-modules&helpers', 'Vuex : modules_helpers']
            ],
            // fallback
            '/': [
                '',        /* / */
            ]
        }
    }
}
