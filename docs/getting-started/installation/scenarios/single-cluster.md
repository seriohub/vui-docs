---
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
[`single-cluster.yaml`](https://github.com/seriohub/vui-helm/blob/main/examples/overrides/single-cluster.yaml)

Minimal required configuration:

```
global:
  veleroNamespace: <your-velero-namespace>
  clusterName: <your-cluster-name>

apiService:
  secret:
    defaultAdminUsername: <your-username>
    defaultAdminPassword: <your-password>

exposure:
  mode: ingress
  ingress:
    spec:
      tls:
        - hosts:
            - vui.yourdomain.com
```

> 📝 Replace the placeholders (`<your-...>`) with actual values for your environment.

## Installation

``` shell
helm repo add seriohub https://seriohub.github.io/velero-helm
helm repo update

kubectl create ns vui

helm install vui seriohub/vui \
  -n vui \
  -f single-cluster.yaml
```

## Access

Once deployed, the UI will be available at:

```
https://vui.yourdomain.com
```

:::tip Credentials
Credentials:

- **Username**: `apiService.config.defaultAdminUsername`
- **Password**: `apiService.config.defaultAdminPassword`
:::

## Additional Useful Override Files

In addition to the basic configuration for the single-cluster scenario, the [`vui-helm`](https://github.com/seriohub/vui-helm) repository provides other override files for specific needs:

- [`single-cluster-no-auth.yaml`](https://github.com/seriohub/vui-helm/blob/main/examples/overrides/single-cluster-no-auth.yaml) — Disables authentication, useful for testing or isolated environments
- [`single-cluster-ldap.yaml`](https://github.com/seriohub/vui-helm/blob/main/examples/overrides/single-cluster-ldap.yaml) — Enables LDAP authentication for integration with enterprise identity providers
