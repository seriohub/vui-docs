export const pluginsChangelog = [
  [
    "docusaurus-plugin-remote-content",
    {
      name: "helm-changelog",
      sourceBaseUrl: "https://raw.githubusercontent.com/seriohub/velero-helm/main/",
      outDir: "releases/changelog",
      documents: ["CHANGELOG.md"],
      modifyContent(filename, content) {
        return {
          filename: "helm.md",
          content: `---
sidebar_label: 'Helm'
sidebar_position: 1
description: HELM changelog
---
${content}`,
        };
      },
    },
  ],
  [
    "docusaurus-plugin-remote-content",
    {
      name: "api-changelog",
      sourceBaseUrl: "https://raw.githubusercontent.com/seriohub/velero-api/main/",
      outDir: "releases/changelog",
      documents: ["CHANGELOG.md"],
      modifyContent(filename, content) {
        return {
          filename: "api.md",
          content: `---
sidebar_label: 'API'
sidebar_position: 2
description: API changelog
---
${content}`,
        };
      },
    },
  ],
  [
    "docusaurus-plugin-remote-content",
    {
      name: "ui-changelog",
      sourceBaseUrl: "https://raw.githubusercontent.com/seriohub/velero-ui/main/",
      outDir: "releases/changelog",
      documents: ["CHANGELOG.md"],
      modifyContent(filename, content) {
        return {
          filename: "ui.md",
          content: `---
sidebar_label: 'UI'
sidebar_position: 3
description: UI changelog
---
${content}`,
        };
      },
    },
  ],
  [
    "docusaurus-plugin-remote-content",
    {
      name: "watchdog-changelog",
      sourceBaseUrl: "https://raw.githubusercontent.com/seriohub/velero-watchdog/main/",
      outDir: "releases/changelog",
      documents: ["CHANGELOG.md"],
      modifyContent(filename, content) {
        return {
          filename: "watchdog.md",
          content: `---
sidebar_label: 'Watchdog'
sidebar_position: 4
description: Watchdog changelog
---
${content}`,
        };
      },
    },
  ],
  [
    "docusaurus-plugin-remote-content",
    {
      name: "helm-components",
      sourceBaseUrl: "https://raw.githubusercontent.com/seriohub/velero-helm/main/",
      outDir: "releases/",
      documents: ["components.txt"],
      modifyContent(filename, content) {
        return {
          filename: "releases.md",
          content: `---
sidebar_label: 'Version'
sidebar_position: 15
description: 'Helm released versions'
---
Below is the table of released Helm versions, application versions, and component versions.
${content}`,
        };
      },
    },
  ],
];
  