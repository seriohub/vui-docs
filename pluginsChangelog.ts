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
id: helm-changelog
title: HELM Chart Changelog – Track Changes and Updates to VUI HELM Chart
description: Stay informed about all notable changes to the VUI Helm Chart. This changelog includes version updates, improvements, bug fixes, and compatibility changes.
keywords: [VUI, Helm Chart changelog, version history, updates, Helm changes, Velero, Kubernetes, bug fixes, release notes]
sidebar_label: 'Helm'
sidebar_position: 1
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
id: api-changelog
title: API Changelog – Track Changes and Updates to VUI API
description: Stay informed about all notable changes to the VUI API. This changelog includes version updates, improvements, bug fixes, and compatibility changes.
keywords: [VUI, API changelog, version history, updates, API changes, Velero, Kubernetes, bug fixes, release notes]
sidebar_label: 'API'
sidebar_position: 2
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
id: ui-changelog
title: UI Changelog – Track Changes and Updates to VUI UI
description: Stay informed about all notable changes to the VUI UI. This changelog includes version updates, improvements, bug fixes, and compatibility changes.
keywords: [VUI, UI changelog, version history, updates, UI changes, Velero, Kubernetes, bug fixes, release notes]
sidebar_label: 'UI'
sidebar_position: 3
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
id: watchdog-changelog
title: Watchdog Changelog – Track Changes and Updates to VUI Watchdog
description: Stay informed about all notable changes to the VUI Watchdog. This changelog includes version updates, improvements, bug fixes, and compatibility changes.
keywords: [VUI, Watchdog changelog, version history, updates, Watchdog changes, Velero, Kubernetes, bug fixes, release notes]
sidebar_label: 'Watchdog'
sidebar_position: 4
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
id: version-information
title: Version Information – Helm Releases and Component Compatibility
description: View all released Helm versions of VUI along with application and component compatibility details. Stay up to date with the latest stable releases and version mappings.
keywords: [VUI, Helm chart, version information, release history, Kubernetes, component compatibility, Velero versions, Helm releases]
sidebar_label: 'Version'
sidebar_position: 5
---

Below is the table of released Helm versions, application versions, and component compatibility versions.
${content}`,
        };
      },
    },
  ],
];
  