---
sidebar_label: 'API'
sidebar_position: 1
description: 'API Configuration'
---

# API

Below are the configurable environment parameters for the API.

- **FIELD** is the name of the environment variable to be configured within the *velero-api-config* ConfigMap.
- **Helm KEY** is the related key defined in the Helm chart.

## Configuration

<div class="table-container">

| FIELD                               | HELM KEY                                    | TYPE   | DEFAULT                               | DESCRIPTION                                                                                                          |
|-------------------------------------|---------------------------------------------|--------|---------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| API_ENABLE_DOCUMENTATION            | apiConfig.apiEnableDocumentation            | Bool   | `True`                                | Enabled/Disabled the fastapi documentation user interfaces                                                           |
| API_ENDPOINT_PORT                   | apiConfig.apiEndpointPort                   | Int    | `8001`                                | Socket bind port                                                                                                     |
| API_ENDPOINT_URL                    | apiConfig.apiEndpointUrl                    | String | `0.0.0.0`                             | Socket bind host                                                                                                     |
| API_RATE_LIMITER_CUSTOM_L1 (4)      | apiConfig.apiRateLimiterCustom1             | String | `Security:xxx:60:20`                  | Rate limiter for specific tag/endpoint: Security (tag) xxx (all endpoints under the tag) 60 seconds  max requests 20 |
| API_RATE_LIMITER_CUSTOM_L2 (4)      |                                             | String | `Info:info:60:500`                    | Rate limiter for specific tag/endpoint: Info (tag) xxx (all endpoints under the tag) 60 seconds  max requests 500    |
| API_RATE_LIMITER_L1                 | apiConfig.apiRateLimiterL1                  | String | `60:120`                              | Rate limiter: 60 seconds  max requests 10                                                                            |
| API_TOKEN_EXPIRATION_MIN            | apiConfig.apiTokenExpirationMin             | Int    | `30`                                  | Token validity after the creation (minutes)                                                                          |
| API_TOKEN_REFRESH_EXPIRATION_DAYS   | apiConfig.apiTokenRefreshExpirationDays     | Int    | `7`                                   | Token validity after the creation (days)                                                                             |
| AWS_ACCESS_KEY_ID                   | apiConfig.awsAccessKeyId                    | String |                                       | AWS_ACCESS_KEY_ID                                                                                                    |
| AWS_SECRET_ACCESS_KEY               | apiConfig.awsSecretAccessKey                | String |                                       | AWS_SECRET_ACCESS_KEY                                                                                                |
| CONTAINER_MODE                      |                                             | Bool   | `False`                                | Enabled in is deployed in a container outside k8s cluster                                                           |
| DEBUG_LEVEL                         | apiConfig.debugLevel                        | String | `info`                                | Print level  (Critical, error, warning, info, debug)                                                                 |
| DEFAULT_ADMIN_USERNAME              | apiConfig.defaultAdminPassword              | String | `admin`                               | Default username for admin user (will be created if does not already exist)                                          |
| DEFAULT_ADMIN_PASSWORD              | apiConfig.defaultAdminUsername              | String | `admin`                               | Default password for admin user (will be created if does not already exist)                                          |
| DOWNLOAD_TMP_FOLDER                 | apiConfig.downloadTmpFolder                 | String | `/tmp/velero-api`                     | Destination folder when executing *velero backup download*                                                           |
| K8S_IN_CLUSTER_MODE                 | apiConfig.k8SInClusterMode                  | Bool   | `False`                               | Enabled if is deployed in a cluster                                                                                  |
| K8S_VELERO_NAMESPACE                | global.veleroNamespace                      | String | `velero`                              | K8s Velero namespace                                                                                                 |
| K8S_VELERO_UI_NAMESPACE             |                                             | String | `velero-ui`                           | K8s Velero namespace                                                                                                 |
| NATS_ENABLE                         |                                             |        | `false`                               |                                                                                                                      |
| NATS_ENDPOINT_URL                   |                                             |        | `127.0.0.1`                           |                                                                                                                      |
| NATS_PORT_CLIENT                    |                                             |        | `4222`                                |                                                                                                                      |
| NATS_USERNAME                       |                                             |        | `user`                                |                                                                                                                      |
| NATS_PASSWORD                       |                                             |        | `password`                            |                                                                                                                      |
| NATS_ALIVE_SEC                      |                                             |        | `60`                                  |                                                                                                                      |
| NATS_REQUEST_TIMEOUT_SEC            |                                             |        | `2`                                   |                                                                                                                      |
| NATS_RETRY_REG_SEC                  |                                             |        | `30`                                  |                                                                                                                      |
| NATS_RETRY_CONN_SEC                 |                                             |        | `20`                                  |                                                                                                                      |
| NATS_PORT_MONITORING                |                                             |        | `30`                                  |                                                                                                                      |
| NATS_CRON_UPDATE_K8S_HEALTH         |                                             |        | `300`                                 |                                                                                                                      |
| NATS_CRON_UPDATE_STATS_GET          |                                             |        | `300`                                 |                                                                                                                      |
| NATS_CRON_UPDATE_BACKUP             |                                             |        | `300`                                 |                                                                                                                      |
| NATS_CRON_UPDATE_RESTORE            |                                             |        | `300`                                 |                                                                                                                      |
| NATS_CRON_UPDATE_BACKUP_LOCATION    |                                             |        | `300`                                 |                                                                                                                      |
| NATS_CRON_UPDATE_STORAGE_LOCATION   |                                             |        | `300`                                 |                                                                                                                      |
| NATS_CRON_UPDATE_REPOSITORIES       |                                             |        | `300`                                 |                                                                                                                      |
| NATS_CRON_UPDATE_SC_MAPPING         |                                             |        | `300`                                 |                                                                                                                      |
| ORIGINS_1 (1)                       | apiConfig.origins1                          | String | `http://localhost:3000`               | Allowed origin                                                                                                       |
| ORIGINS_2 (1)                       |                                             | String | `http://127.0.0.1:3000`               | Allowed origin                                                                                                       |
| ORIGINS_3 (1)                       |                                             | String | `*`                                   | Allowed origin                                                                                                       |
| SECURITY_DISABLE_USERS_PWD_RATE     | apiConfig.securityDisableUsersPwdRate       | Bool   | `False`                               | If True user can have a weak password, otherwise is required a strong password                                       |
| SECURITY_PATH_DATABASE              | apiConfig.securityPathDatabase              | String | `./test`                              | Path where create the SQL-Lite database used for storing the users credentials                                       |
| SECURITY_REFRESH_TOKEN_KEY (3)      |                                             | String |                                       | Optional: Secret key used for JWT creation (refresh token mechanism)                                                 |
| SECURITY_TOKEN_KEY (3)              |                                             | String |                                       | Optional: Secret key used for JWT creation                                                                           |
| VELERO_CLI_DEST_PATH                | apiConfig.veleroCliDestPath                 | String | `/usr/local/bin`                      | Path where to extract the velero executable file                                                                     |
| VELERO_CLI_PATH                     | apiConfig.veleroCliPath                     | String | `/app/velero-client`                  | Path where the compressed velero client archives are located                                                         |
| VELERO_CLI_PATH_CUSTOM              | apiConfig.veleroCliPathCustom               | String | `/app/velero-client-binary`           | Path where the user can store manually the binary file                                                               |
| VELERO_CLI_VERSION (2)              | apiConfig.veleroCliVersion                  | String | `latest available in velero-api-image`| Name of the velero client release to be used                                                                         |
| RESTIC_PASSWORD                     | apiConfig.resticPassword                    | String | `static-passw0rd`                     |                                                                                                                      |

</div>

1. You can define up to 100 allowed origins that should be permitted to make cross-origin requests. An origin is the combination of protocol (http, https), domain (myapp.com, localhost) and port (80, 443, 8001)

2. The Velero client is downloaded when the pod is started according to the environment variable **VELERO_CLI_VERSION**. Set **VELERO_CLI_VERSION** as the following syntax example: `v1.12.2`

    :::info
    In the event of a connection problem, the version 1.12.1 contained within the Velero API image will be utilized.
    :::

3. To generate a fixed secure random secret key use the command:

    ```bash
    openssl rand -hex 32
    ```

    :::info
    If no secret key is provided, the system regenerates new missed keys itself each time it is restarted.
    :::

4. You can define up to 100 custom rate limiters (from the key **API_RATE_LIMITER_CUSTOM_L1** to **API_RATE_LIMITER_CUSTOM_L99**). Rules can be designed for a tag (eg Security, Info, Backup, Schedule, etc) or for a specific endpoint (eg backup/update-expitaration, utils/version, etc).

    :::warning
    Replace the characters \ - { } in endpoint urls with the _
    :::

    The description field of each endpoint describes the key to configure the customized rate limiter and the actual setup.

    Example : if we want to create a rule for the specific endpoint "/backup/get-storage-classes" (tag: Backup) it will be:
    Backup:backup_get_storage_classes:60:600
    The default rate limiter is defined by the key **API_RATE_LIMITER_L1**

## Swagger UI

:::tip
To find out all the endpoints exposed by the API project, you can use the Swagger UI documentation

```code
< API IP address >/api/docs
```

:::

If you disable the api documentation (**API_ENABLE_DOCUMENTATION** key), you are not able to reach the endpoint /docs.
