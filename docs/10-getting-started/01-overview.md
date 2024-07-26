---
sidebar_label: 'Overview'
sidebar_position: 1
---

# Overview

Vui provides a web interface to interact with Velero, simplifying the following operations:

- Switching between different clusters (requires core)
- Backup management
- Restore management
- Schedule management
- Retrieving backup location information
- Retrieving snapshot location information
- Storage class mapping
- Restic features (check locks, unlock, unlock --remove-all)

Below is a brief description of the modules that make up the VUI project:

- **Velero-API** is the agent to be installed on each cluster. Velero-API is designed to communicate with Kubernetes and the Velero client within the Kubernetes environment.
- **Velero-UI** is the web interface. The UI interface can be used by connecting directly to the agents or to the core for centralized management.
- **Velero-Watchdog** is the microservice responsible for monitoring the status of Velero in Kubernetes environments and alerting when something is not working:
  - Backups status monitoring
  - Schedules change monitoring
  - Notification alert for immediate action. Available plugins:
    - Email
    - Telegram
    - Slack
- **Velero-Core** is the core component that enables centralized multi-cluster management. Through the core, you can switch between clusters and view the Velero status of all clusters where the agent is deployed via the core dashboard. `Not released`

Following are some screenshots of Vui.

## Environment

The project is developed, tested and put into production on several clusters with the following configurations:

- Kubernetes v1.28.x
- Velero Server 1.11.1/Client v1.11.1
- Velero Server 1.12.1/Client v1.12.1
- Velero Server 1.13.2/Client v1.13.2

## Screenshots

### Core dashboard

![core-dashboard](./../assets/screenshots/18_core_dashboard.png)

### Agent dashboard

![agent-dashboard](./../assets/screenshots/01_agent_dashboard.png)

The agent dashboard provides a quick overview of the health status of your backups.

### Backups Managment

![backups](./../assets/screenshots/03_backups.png)

### Create backups

![new backups](./../assets/screenshots/04_create_backup.png)

### Create restore

![new restore](./../assets/screenshots/05_create_restore.png)

### Schedules Managment

![schedules](./../assets/screenshots/06_schedule.png)

### Create schedule

![create schedule](./../assets/screenshots/07_create_schedule.png)

### Backup location

![backup location](./../assets/screenshots/08_backup_location.png)

### Storage location

![storage location](./../assets/screenshots/09_storage_location.png)

### Repo

![storage location](./../assets/screenshots/10_repo.png)

### Storage Class Map

![storage class map](./../assets/screenshots/11_sc_map.png)

### Backup describe

![backup describe](./../assets/screenshots/12_backup_describe.png)

### Backup logs

![backup describe](./../assets/screenshots/13_backup_logs.png)

### Configuration

![configuration](./../assets/screenshots/14_configuration.png)

### Watchdog

![watchdog configuration](./../assets/screenshots/15_watchdog.png)

### Cron schedule heatmap

![cron schedule heatmap](./../assets/screenshots/16_cron_schedule_heatmap.png)
