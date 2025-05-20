---
id: helm-installation
title: Helm Installation – Deploy VUI Using the Recommended Method
description: Learn how to install VUI using Helm, the preferred method for managing deployments. This guide covers core steps and links to scenario-specific configurations for single or multi-cluster environments.
keywords: [VUI, Velero, Helm installation, Kubernetes, Helm chart, VUI deployment, override files, installation guide]
sidebar_label: 'Helm'
sidebar_position: 1
---

# Helm Installation

This page provides the general steps to install VUI using Helm, the recommended and supported method for deployment.  
Helm simplifies installation, upgrade, and management of VUI components across different environments.

:::tip
While this guide covers the core installation process, we highly recommend reviewing the  
👉 [Installation Scenarios](/docs/getting-started/installation/scenarios/installation-scenarios) before install.
It offers a set of predefined configurations (override files) tailored to common use cases such as:

- Single-cluster deployment
- Centralized multi-cluster setup
- Agent-only installation

Using one of these scenarios helps you start with the right structure and minimizes configuration errors.
:::

:::important

VUI uses a **client-server architecture**: the **UI** communicates directly with the **API service** via HTTP/HTTPS.  
For this reason, both the UI and API must be **accessible from the user's browser**.

The Helm chart supports the following exposure modes:

- **Ingress**
- **NodePort**
- **ClusterIP** (requires manual port-forwarding for local testing)

> 🔓 Both the UI and API endpoints must be exposed — the UI depends on direct access to the API, and the API can also operate independently for automation, debugging, or integration.

:::



## Installing VUI via Helm Repository

Follow these steps:

### 1. Add the repository

``` shell
helm repo add seriohub https://seriohub.github.io/velero-helm/
helm repo update
```

### 2. Verify the chart is available

``` shell
helm search repo seriohub
```

Expected output:

``` shell
NAME              CHART VERSION   APP VERSION   DESCRIPTION
seriohub/vui      0.1.6           0.1.6         Velero User Interface: a friendly UI and dashboard...
```

### 3. Choose an override file (OPTIONAL)

Start from one of the [predefined override files](https://github.com/seriohub/velero-helm/tree/main/examples/overrides).  
Each file is tailored for a specific [installation scenario](/docs/getting-started/installation/scenarios/installation-scenarios#list-of-available-override-files).

> For a basic setup, you can use a file like `single-cluster.yaml` as a starting point.

:::tip
For advanced customization, refer to the full [values.yaml](https://github.com/seriohub/velero-helm/blob/main/chart/values.yaml) and the chart [README](https://github.com/seriohub/velero-helm/tree/main/chart).
:::

### 4. Create the namespace

``` shell
kubectl create namespace vui
```

(Optional) To make it your default namespace:

``` shell
kubectl config set-context --current --namespace=vui
```

### 5. Install the chart

If you're installing with the default values:

```shell
helm install vui seriohub/vui -n vui
```

If you're using a custom override file:

```shell
helm install vui seriohub/vui \
  -n vui \
  -f values-override.yaml
```

### 6. Access

:::tip Credentials
Default login:

- **Username**: `admin`
- **Password**: `admin`
:::

If you used **NodePort** or **Ingress**, the application will be accessible at the endpoint configured in `exposure.nodePort` or `exposure.ingress`.

Otherwise, if you used the **default installation**, the services are exposed as **ClusterIP** only.  
In local test environments, you'll need to manually forward the ports to access the UI and API from your browser:

```shell
kubectl port-forward svc/vui-api-clusterip-svc 30001:80
```

```shell
kubectl port-forward svc/vui-ui-clusterip-svc 30002:80
```

ClusterIP services are configured via the following Helm values:

- `exposure.clusterIP.protocol`
- `exposure.clusterIP.wsProtocol`
- `exposure.clusterIP.localAddress`
- `exposure.clusterIP.apiPort`

:::caution Known issue with port-forwarding

In some environments, `kubectl port-forward` may fail with a broken pipe error.
This is a known issue that may affect connectivity or cause the UI to hang.  
Sometimes a simple **page refresh** is enough to recover, but we recommend using **NodePort** or **Ingress** exposure for better reliability.

This limitation is expected to be resolved in a future release.
:::

### 7. Upgrade (after config changes)

``` shell
helm upgrade vui seriohub/vui \
  -n vui \
  -f values-override.yaml
```

### 8. Uninstall

``` shell
helm uninstall vui -n vui
helm repo remove seriohub
kubectl delete namespace vui
```

---

## Installing VUI from Cloned Repository

You can also install the chart from source if you prefer local control or want to modify the chart.

### 1. Clone the repository

``` shell
git clone https://github.com/seriohub/velero-helm.git
cd velero-helm
```

### 2. Choose and edit a configuration file

Start from one of the override files in [`examples/overrides/`](https://github.com/seriohub/velero-helm/tree/main/examples/overrides) as a simplified base.

:::tip
For detailed parameter descriptions, see the full [values.yaml](https://github.com/seriohub/velero-helm/blob/main/chart/values.yaml) and the [README](https://github.com/seriohub/velero-helm/tree/main/chart).
:::

### 3. Create the namespace

``` shell
kubectl create namespace vui
```

### 4. Install the chart locally

``` shell
helm install vui ./chart \
  -n vui \
  -f values-override.yaml
```

### 5. Upgrade

``` shell
helm upgrade vui ./chart \
  -n vui \
  -f values-override.yaml
```

### 6. Uninstall

``` shell
helm uninstall vui -n vui
kubectl delete namespace vui
```
