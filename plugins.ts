import { pluginsChangelog } from "./pluginsChangelog";

export const plugins = [
    'docusaurus-plugin-matomo',
    [
        '@docusaurus/plugin-content-docs',
        {
            id: 'community',
            path: 'community',
            routeBasePath: 'community', // The base URL path for this folder
            sidebarPath: require.resolve('./sidebars.js'), // Path to the sidebar configuration
        },
    ],
    [
        '@docusaurus/plugin-content-docs',
        {
            id: 'sponsors',
            path: 'sponsors',
            routeBasePath: 'sponsors', // The base URL path for this folder
            // sidebarPath: require.resolve('./sidebars.js'), // Path to the sidebar configuration
            sidebarPath: false
        },
    ],
    [
        '@docusaurus/plugin-content-docs',
        {
            id: 'contacts',
            path: 'contacts',
            routeBasePath: 'contacts', // The base URL path for this folder
            // sidebarPath: require.resolve('./sidebars.js'), // Path to the sidebar configuration
            sidebarPath: false
        },
    ],
    [
        '@docusaurus/plugin-content-docs',
        {
            id: 'releases',
            path: 'releases',
            routeBasePath: 'releases', // The base URL path for this folder
            sidebarPath: require.resolve('./sidebars.js'), // Path to the sidebar configuration
        },
    ],
    ...pluginsChangelog
];
