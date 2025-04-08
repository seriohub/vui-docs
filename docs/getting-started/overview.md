---
sidebar_label: 'Overview'
sidebar_position: 1
---

# Overview

VUI provides a web interface for interacting with Velero, simplifying the following operations:

- Switching between different clusters (requires Velero-Core)
- Backups management
- Restores management
- Schedules management
- Pod Volume Backup management
- Pod Volume Restore management
- Real-time Backups/Restores monitoring
- Real time Server Status Requests data
- Download Requests management
- Real time Delete Backup Requests data
- Storage class map
- Restic features (check locks, unlock, unlock --remove-all)
- Multi cluster monitoring (require the core)
- Notifications

## VUI Components

VUI consists of multiple modules, each serving a specific function:

- **Velero-API** – An agent installed on each cluster.
- **Velero-UI** – The web interface. It can connect either directly to the agents or to Velero-Core for centralized management.
- **Velero-Watchdog** – A microservice that monitors Velero’s status in Kubernetes environments and triggers alerts when issues arise:
  - Backup status monitoring
  - Schedule change monitoring
  - Notification alerts for immediate action
- **Velero-Core** – The central component for multi-cluster management. Through Velero-Core, you can switch between clusters and monitor Velero’s status across all connected clusters via a centralized dashboard. `Not yet released`.

## Environment

The project has been developed, tested, and deployed across multiple clusters with the following configurations:

- **Kubernetes** ≥ v1.28.x
- **Velero Server** ≥ v1.11.1
