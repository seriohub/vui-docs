---
id: single-cluster-installation
title: Single Cluster Installation – Deploy VUI in a Standalone Kubernetes Environment
description: Learn how to install all VUI components in a single Kubernetes cluster. Ideal for local setups, testing, and simple standalone deployments with built-in authentication.
keywords: [VUI, Velero, single cluster, standalone installation, Kubernetes, local environment, VUI setup]
sidebar_label: 'Single Cluster'
sidebar_position: 2
---

# Single Cluster Installation

This scenario installs all VUI components within a **single Kubernetes cluster**, suitable for standalone installations, local environments, testing, or simple deployments.  
Authentication is handled using built-in credentials.

## Requirements

- A working Velero installation in a namespace (e.g. `velero`)
- A domain or IP accessible for exposing the UI and API (via Ingress or NodePort)

## Configuration

Use the predefined override file:  
[`single-cluster.yaml`](https://github.com/seriohub/velero-helm/blob/main/examples/overrides/single-cluster.yaml)

Minimal required configuration:

```yaml
global:
  veleroNamespace: <your-velero-namespace>
  clusterName: <your-cluster-name>

apiService:
  secret:
    defaultAdminUsername: <your-username>
    defaultAdminPassword: <your-password>

exposure:
  mode: ingress # one of: nodePort, ingress, clusterIP

  # clusterIP:
  #  protocol: http
  #  wsProtocol: ws
  #  localAddress: "127.0.0.1"    
  #  apiPort:

  # nodePort:
    # ip: 10.10.0.100
    # apiPort: 30001
    # uiPort: 30002

  ingress:
    spec:
      tls:
        - hosts:
            - vui.yourdomain.com
            # secretName: vui-tls
```

> 📝 Replace the placeholders (`<your-...>`) with actual values for your environment.

## Installation

``` shell
helm repo add seriohub https://seriohub.github.io/velero-helm
helm repo update

helm install vui seriohub/vui \
-n vui \
--create-namespace \
-f single-cluster.yaml
```

## Access

Once deployed, the UI will be available at:

```text
https://vui.yourdomain.com
```

:::tip Credentials
Credentials:

- **Username**: `apiService.config.defaultAdminUsername`
- **Password**: `apiService.config.defaultAdminPassword`
:::

## Additional Useful Override Files

In addition to the basic configuration for the single-cluster scenario, the [`velero-helm`](https://github.com/seriohub/velero-helm) repository provides other override files for specific needs:

- [`single-cluster-no-auth.yaml`](https://github.com/seriohub/velero-helm/blob/main/examples/overrides/single-cluster-no-auth.yaml) — Disables authentication, useful for testing or isolated environments
- [`single-cluster-ldap.yaml`](https://github.com/seriohub/velero-helm/blob/main/examples/overrides/single-cluster-ldap.yaml) — Enables LDAP authentication for integration with enterprise identity providers
