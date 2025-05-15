---
id: multi-cluster
title: Multi-Cluster Deployment – Centralized Management with VUI-Core
description: Learn how to manage multiple Kubernetes clusters using VUI-Core. This setup enables centralized access and control through a single VUI instance, eliminating the need for multiple UIs.
keywords: [VUI, Velero, multi-cluster, VUI-Core, centralized management, Kubernetes, cluster federation, Velero UI]
sidebar_label: 'Multi cluster'
sidebar_position: 3
---

# Multi-Cluster

For users managing multiple Kubernetes clusters, the **`vui-core`** component serves as a central gateway that enables unified access and control.  
Instead of deploying a separate web interface `vui-ui` in each cluster, `vui-core` allows you to connect all clusters to a single instance of the UI.

:::info
In a typical multi-cluster setup:

- In the **primary cluster** (where `vui-core` is deployed), the following components are installed:
  - `vui-core`
  - `nats`
  - `vui-api`
  - `vui-ui`
  - `vui-watchdog`

- In each **connected secondary cluster**, only the agent components are installed:
  - `vui-api`
  - `vui-watchdog`

:::

![VUI Software Architecture – Multi Cluster](./../../assets/screenshots/21_sa_VUI_Core.gif)

:::tip
Even if you're currently managing a single cluster, deploying `vui-core` can be useful to prepare for future multi-cluster expansion or centralized access needs.
:::
