---
id: core-cluster-installation
title: Core Cluster Installation – Set Up Centralized VUI-Core
description: Learn how to install and configure VUI-Core for centralized management of multiple Kubernetes clusters. Enable multi-cluster visibility and control through a single Velero UI instance.
keywords: [VUI, VUI-Core, Velero, Kubernetes, centralized backup, multi-cluster, Velero UI, core cluster installation]
sidebar_label: 'Core'
sidebar_position: 3
---

# Core Cluster Installation

Starting from **VUI version 0.3.0**, the new `vui-core` component is available.  
It enables centralized management of multiple remote clusters from a single UI instance.  
👉 [Read the announcement](/blog/vui-0.3.0) and learn more [about the project](/docs/licenses/about-the-project).

This scenario sets up a **centralized VUI environment** using **VUI-Core**, designed for multi-cluster visibility, coordination, and control.

## Namespace Creation

Before proceeding, create the namespace for the VUI components:

``` shell
kubectl create namespace vui
```

## Switching to the Namespace

After creating the `vui` namespace, you can set it as the default context to avoid specifying `-n vui` in every command.

To do so, run:

``` shell
kubectl config set-context --current --namespace=vui
```

> 📌 This sets `velero-ui` as the default namespace for your current kubectl context.
> You can switch back to another namespace later if needed.

## Creating Core Credentials

Sponsors will have access to the `vui-core` package hosted under the `seriohub` organization on **hub.serio.cloud** (a private Docker registry).

To pull the image, you must first create a Kubernetes secret with valid credentials.  
There are two supported methods:

---

### 🔐 Method 1: `docker-registry` type secret

1. Generate a valid username and access token  
2. Create the registry secret:

```shell
kubectl create secret docker-registry vui-core-login-secret \
  --docker-server=https://hub.serio.cloud \
  --docker-username=<your-username> \
  --docker-password=<your-token> \
  --docker-email=<your-email>
```

> 💡 If your token contains special characters like `$`, remember to **escape it using `\`** or quote it properly to avoid shell parsing or Helm/Kustomize interpolation issues.

---

### 🔐 Method 2: `dockerconfigjson` secret

Alternatively, you can manually create a Docker config file:

Create a file named `.dockerconfigjson` with the following content:

```text
{
  "auths": {
    "hub.serio.cloud": {
      "username": "<your-username>",
      "password": "<your-token>"
    }
  }
}
```

Then create the secret:

```shell
kubectl create secret generic harbor-creds \
  --from-file=.dockerconfigjson=.dockerconfigjson \
  --type=kubernetes.io/dockerconfigjson
```

---

> 📌 If you use a secret name **other than** `vui-core-login-secret`, be sure to update the corresponding value in your Helm configuration (`coreService.deployment.imagePullSecrets`).

## Managing NATS Users

In this initial release, **user authentication for NATS** is handled via static user credentials.  
These must be created manually and stored in a Kubernetes secret.

1. Create a temporary file called `users.conf` with the following content:

```text
users = [
  { user = "nats-Core-User", password = "nats-Core-Pwd" },
  { user = "nats-Agent-1-User", password = "nats-Agent-1-pwd" },
  { user = "nats-Agent-2-User", password = "nats-Agent-2-pwd" },
  { user = "nats-Agent-3-User", password = "nats-Agent-3-pwd" },
]
```

2. Create the Kubernetes secret from this file:

``` shell
kubectl create secret generic vui-nats-user-auth \
  --from-file=users.conf=./tmp/users.conf \
  -n vui \
  --dry-run=client -o yaml | kubectl apply -f -
```

> 🔄 The NATS service includes a sidecar that watches this secret and automatically reloads its configuration.  
> You **do not need to restart any pods** when updating cluster credentials.

## Requirements

- Ingress or NodePort access to expose the UI and API
- A static IP for `natsService` (recommended for stable multi-cluster communication)

## Configuration

Use the predefined override file:  
[`core.yaml`](https://github.com/seriohub/velero-helm/blob/main/examples/overrides/core-cluster.yaml)

Minimal required configuration:

``` text
global:
  veleroNamespace: <your-velero-namespace>
  clusterName: <core-cluster-name>
  core: true

apiService:
  secret:
    defaultAdminUsername: <admin>
    defaultAdminPassword: <password>
    natsUsername: <nats-Agent-1-User>
    natsPassword: <nats-Agent-1-Pwd>

coreService:
  secret:
    clientKey: <client-key>
    defaultAdminUsername: <admin>
    defaultAdminPassword: <password>
    natsUsername: <nats-Core-User>
    natsPassword: <nats-Core-Pwd>

exposure:
  mode: ingress
  ingress:
    spec:
      tls:
        - hosts:
            - vui-core.yourdomain.com

natsService:
  loadBalancerIP: <ip>
```

:::tip Credentials
Login to the UI with the credentials defined in:

- **Username**: `coreService.secret.defaultAdminUsername`
- **Password**: `coreService.secret.defaultAdminPassword`
:::

## Installation

```text
helm repo add seriohub https://seriohub.github.io/velero-helm
helm repo update

helm install vui seriohub/vui \
  -n vui \
  -f core.yaml
```

## Access

Once deployed, the UI will be accessible at:

``` shell
https://vui-core.yourdomain.com
```

Use the Core dashboard to manage and monitor multiple remote clusters using Agent installations.

## Additional Useful Override Files

The [`velero-helm`](https://github.com/seriohub/velero-helm/tree/main/examples/overrides) repository includes other override files for alternative use cases:

- [`core-ldap.yaml`](https://github.com/seriohub/velero-helm/blob/main/examples/overrides/core-ldap.yaml) — Enables LDAP authentication

## Notes

- By default, NATS is configured to use the `nats` protocol (non-TLS).
- NATS supports TLS, but enabling it depends on the network and ingress configuration.

## LoadBalancer IP Configuration

If your environment does not allow reserving a static LoadBalancer IP ahead of time, you can retrieve it after deployment and update the chart:

1. Get the assigned IP:

``` shell
kubectl get svc -n vui -o jsonpath="{.items[?(@.spec.type=='LoadBalancer')].status.loadBalancer.ingress[0].ip}"
```

2. Update the deployment with the resolved IP:

``` shell
helm upgrade vui ./chart/ -f core.yaml --set natsService.loadBalancerIP=<resolved-ip>

kubectl rollout restart deployment -l component=api -n vui
kubectl rollout restart deployment -l component=core -n vui
```

## Evaluating `vui-core`

We understand that some organizations may need more information about `vui-core` capabilities before sponsoring.  
If your team is considering supporting VUI and would like to explore `vui-core`, feel free to [get in touch](mailto:info@seriohub.com).