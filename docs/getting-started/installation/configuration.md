---
id: configuration
title: VUI Configuration – Customize Your Installation with Helm Values
description: Customize your VUI installation using Helm values. Explore key configuration options and learn how to tailor the deployment to your environment using the Velero Helm chart.
keywords: [VUI, Velero, configuration, Helm values, Kubernetes, VUI setup, Velero Helm chart, custom installation]
sidebar_label: 'Configuration'
sidebar_position: 4
---

# Configuration

The installation can be customized and configured using Helm values.  
The complete list of available configuration keys and their descriptions is available in the official Helm repository at the following URL:  

[Velero Helm Chart Configuration](https://github.com/seriohub/velero-helm/blob/main/chart/README.md)

Below are some notes on specific configuration parameters.

## ORIGINS

```code
Helm key: apiService.config.origins*
```

```code
Helm key: coreService.config.origins*
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
