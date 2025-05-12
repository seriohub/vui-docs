---
sidebar_label: 'Overview'
sidebar_position: 1
---

# Overview

VUI provides a user-friendly web interface for interacting with Velero, simplifying the following operations:

- Switching between different clusters (requires **`vui-core`**)
- Backup management
- Restore management
- Schedule management
- Pod volume backup and restore management
- Real-time monitoring of backup/restore operations
- Live server status request tracking
- Download request management
- Backup deletion request tracking
- Storage class mapping
- Restic operations (check locks, unlock, unlock --remove-all)
- Multi-cluster monitoring (requires **`vui-core`**)
- Notification system

## VUI Components

VUI is composed of several modules, each serving a specific purpose:

- **`vui-api`** – An agent deployed in each cluster.
- **`vui-ui`** – The web-based interface, capable of connecting directly to agents or via VUI-Core for centralized control.
- **`vui-watchdog`** – A microservice that monitors Velero’s state within Kubernetes and triggers alerts when anomalies occur:
  - Backup status monitoring
  - Schedule change detection
  - Notification alerts for proactive intervention
- **`vui-core`** – The central hub for multi-cluster environments. It enables cluster switching and centralized monitoring across all connected clusters.

## Environment

VUI has been developed, tested, and deployed in multi-cluster environments with the following configurations:

- **Kubernetes** ≥ v1.28.x  
- **Velero Server** ≥ v1.11.1

## Installation

We strongly recommend using **Helm** to install VUI, as it simplifies deployment and minimizes manual configuration.  
You can follow the [Helm installation guide](/docs/getting-started/installation/helm) for step-by-step instructions.

For faster setup, we also provide [predefined scenario templates](/docs/getting-started/installation/scenarios/overview) with minimal override files tailored to common use cases.