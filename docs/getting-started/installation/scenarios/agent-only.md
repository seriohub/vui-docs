---
id: agent-only-installation
title: Agent-Only Installation – Deploy VUI Components in a Secondary Cluster
description: Learn how to install only the VUI agent components (`vui-api` and `vui-watchdog`) in a secondary Kubernetes cluster and connect them to a centralized VUI-Core instance.
keywords: [VUI, Velero, agent-only installation, VUI API, vui-watchdog, secondary cluster, VUI architecture]
sidebar_label: 'Agent Only'
sidebar_position: 4
---

# Agent-Only Installation

This scenario installs only the **agent components** (`vui-api` and `vui-watchdog`) in a **secondary cluster** that connects to a centralized VUI-Core instance.

## Requirements

- A deployed and reachable VUI-Core instance
- NATS endpoint and credentials from the Core cluster
- A working Velero installation in the local cluster

## Configuration

Use the predefined override file:  
[`agent.yaml`](https://github.com/seriohub/velero-helm/blob/main/examples/overrides/agent.yaml)

Minimal required configuration:

```
global:
  veleroNamespace: <your-velero-namespace>
  clusterName: <agent-cluster-name>
  agentMode: true

apiService:
  secret:
    defaultAdminUsername: <admin>
    defaultAdminPassword: <password>
    natsUsername: <nats-Agent-2-User>
    natsPassword: <nats-Agent-2-Pwd>

  nats:
    enabled: true
    protocol: nats
    endpointUrl: <core-nats-ip-or-domain>
```

> 💡 The `endpointUrl` should match the IP or DNS of the NATS service running in the Core cluster.  
> Use the same `natsUsername` and `natsPassword` configured in the Core setup.

## Installation

``` shell
helm repo add seriohub https://seriohub.github.io/velero-helm
helm repo update

kubectl create ns vui

helm install vui-agent seriohub/vui \
  -n vui \
  -f agent-only.yaml
```

## Access

Once installed, this Agent cluster will automatically connect to the VUI-Core instance.  
You will be able to manage and monitor backups and restores across all clusters from the centralized UI.
