---
sidebar_label: 'Helm values'
sidebar_position: 5
description: 'Helm values'
---

# Configuration

The installation can be customized and configured using Helm values.  
The complete list of available configuration keys and their descriptions is available in the official Helm repository at the following URL:  

[Velero Helm Chart Configuration](https://github.com/seriohub/velero-helm/tree/bfe372a1e02072434edab89e9f1f79b630d739b7/chart)

Below are some notes on specific configuration parameters.

## ORIGINS

```code
Helm key: apiConfig.origins*
```

You can define up to **100 allowed origins** that should be permitted to make cross-origin requests.  
An origin is the combination of:

- **Protocol** (e.g., `http`, `https`)
- **Domain** (e.g., `myapp.com`, `localhost`)
- **Port** (e.g., `80`, `443`, `8001`)

## SECURITY TOKEN KEY

```code
Helm key: apiConfig.securityTokenKey
```

The security token key is generated automatically. However, if you want to specify and persist it across updates, you can generate it manually using the following command:

To generate a fixed secure random secret key use the command:

```bash
openssl rand -hex 32
```

:::info
If no secret key is provided, the system regenerates new missed keys itself each time it is restarted.
:::

## API RATE LIMITER

The backend supports custom API rate limiters. The default rate limiter is defined by the key **API_RATE_LIMITER_L1**.

You can define up to 100 custom rate limiters, from the key **API_RATE_LIMITER_CUSTOM_L1** to **API_RATE_LIMITER_CUSTOM_L99**.
Rules can be applied to:

- A tag (e.g., Security, Info, Backup, Schedule, etc.)
- A specific endpoint (e.g., backup/update-expiration, utils/version, etc.)

:::warning
Replace the characters \ - { } in endpoint urls with the _
:::

The description field of each endpoint describes the key to configure the customized rate limiter and the actual setup.

Example : if we want to create a rule for the specific endpoint "/backup/get-storage-classes" (tag: Backup) it will be:
Backup:backup_get_storage_classes:60:600
