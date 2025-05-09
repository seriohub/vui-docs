---
sidebar_label: 'Helm'
sidebar_position: 3
---

# Helm Installation

This page provides the general steps to install VUI using Helm, the recommended and supported method for deployment.  
Helm simplifies installation, upgrade, and management of VUI components across different environments.

While this guide covers the core installation process, we highly recommend reviewing the  
[Installation Scenarios](/docs/getting-started/installation/scenarios/overview) page first.  
It offers a set of predefined configurations (override files) tailored to common use cases such as:

- Single-cluster deployment
- Centralized multi-cluster setup
- Agent-only installation

Using one of these scenarios helps you start with the right structure and minimizes configuration errors.

The official Helm chart is available here:  
👉 [https://github.com/seriohub/vui-helm](https://github.com/seriohub/vui-helm)

:::important
VUI consists of a UI that communicates directly with the API service.  
Therefore, the API must be reachable from the client’s browser. The Helm chart supports both **Ingress** and **NodePort** exposure modes to make this possible.

> If neither is configured, the application will be unreachable.
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

### 3. Choose an override file

Start from one of the [predefined override files](https://github.com/seriohub/vui-helm/tree/main/examples/overrides).  
Each file is tailored for a specific [installation scenario](/docs/getting-started/installation/scenarios/overview#list-of-available-override-files).

> For a basic setup, you can use a file like `single-cluster.yaml` as a starting point.

:::tip
For advanced customization, refer to the full [values.yaml](https://github.com/seriohub/vui-helm/blob/main/chart/values.yaml) and the chart [README](https://github.com/seriohub/vui-helm/tree/main/chart).
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

:::tip
Make sure to edit your override file before running the install command.
:::

``` shell
helm install vui seriohub/vui \
  -n vui \
  -f values-override.yaml
```

:::tip Credentials
Default login:

- **Username**: `admin`
- **Password**: `admin`
:::

### 6. Upgrade (after config changes)

``` shell
helm upgrade vui seriohub/vui \
  -n vui \
  -f values-override.yaml
```

### 7. Uninstall

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
For detailed parameter descriptions, see the full [values.yaml](https://github.com/seriohub/vui-helm/blob/main/chart/values.yaml) and the [README](https://github.com/seriohub/vui-helm/tree/main/chart).
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
