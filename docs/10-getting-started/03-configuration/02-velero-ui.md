---
sidebar_label: 'UI'
sidebar_position: 2
description: 'UI Configuration'
---

# UI

Below are the configurable environment parameters for the UI.

- **FIELD** is the name of the environment variable to be configured within the *velero-ui-config* ConfigMap.
- **Helm KEY** is the related key defined in the Helm chart.

## Configuration

<div class="table-container">

| FIELD                                 | HELM KEY                                      |TYPE   | DEFAULT                   | DESCRIPTION                                                                             |
|---------------------------------------|-----------------------------------------------|-------|---------------------------|-----------------------------------------------------------------------------------------|
| NEXT_PUBLIC_LOGIN_CLUSTERS_SWITCH     | uiConfig.experimental                         | Bool   | `false`                   | EXPERIMENTAL: Displays or hides the cluster selection menu on the login page.          |
| NEXT_PUBLIC_REFRESH_DATATABLE_AFTER   | uiConfig.nextPublicRefreshDatatableAfter      | Number | `1500`                    | Milliseconds delay for datatable update after each operation.                          |
| NEXT_PUBLIC_REFRESH_RECENT            | uiConfig.nextPublicRefreshRecent              | Number | `5000`                    | Polling **task in progress** updates in milliseconds.                                  |
| NEXT_PUBLIC_VELERO_API_NAME           | global.clusterName                            | String |                           | Name for cluster                                                                       |
| NEXT_PUBLIC_VELERO_API_URL            | uiConfig.nextPublicVeleroApiUrl               | String | `http://127.0.0.1:8001`   | Url to http [velero-api](https://github.com/seriohub/velero-api) project               |
| NEXT_PUBLIC_VELERO_API_WS             | uiConfig.nextPublicVeleroApiWs                | String | `ws://127.0.0.1:8001`     | Url to ws [velero-api](https://github.com/seriohub/velero-api) project                 |
| NEXT_PUBLIC_VELERO_API_NAME_1         |                                               | String |                           | EXPERIMENTAL: Name for cluster 1                                                       |
| NEXT_PUBLIC_VELERO_API_URL_1          |                                               | String |                           | EXPERIMENTAL: Url to http [velero-api](https://github.com/seriohub/velero-api) project |
| NEXT_PUBLIC_VELERO_API_WS_1           |                                               | String |                           | EXPERIMENTAL: Url to ws [velero-api](https://github.com/seriohub/velero-api) project   |
| NEXT_PUBLIC_VELERO_API_NAME_2         | uiConfig.exNextPublicVeleroApiName2           | String |                           | EXPERIMENTAL: Name for cluster 2                                                       |
| NEXT_PUBLIC_VELERO_API_URL_2          | uiConfig.exNextPublicVeleroApiUrl2            | String |                           | EXPERIMENTAL: Url to http [velero-api](https://github.com/seriohub/velero-api) project |
| NEXT_PUBLIC_VELERO_API_WS_2           | uiConfig.exNextPublicVeleroApiWs2             | String |                           | EXPERIMENTAL: Url to ws [velero-api](https://github.com/seriohub/velero-api) project   |

</div>