---
sidebar_label: 'Introduction'
sidebar_position: 1
---

# Introduction

:::important
This is the first version of the documentation for the VUI project. It may be incomplete or lack certain details. We appreciate your understanding and welcome any feedback to improve its quality.
:::

:::warning
Attention Users: This project is in active development, and certain tools or features might still be under construction. We kindly urge you to exercise caution while utilizing the tools within this environment. While every effort is being made to ensure the stability and reliability of the project, there could be unexpected behaviors or limited functionalities in some areas. We highly recommend thoroughly testing the project in non-production or sandbox environments before implementing it in critical or production systems. Your feedback is invaluable to us; if you encounter any issues or have suggestions for improvement, please feel free to report them. Your input helps us enhance the project's performance and user experience. Thank you for your understanding and cooperation.
:::

## Getting Started

The Vui project was created to simplify various Velero backup operations through a user-friendly interface. Vui consists of four modules

- Velero-API (agent module) [GitHub](https://github.com/seriohub/velero-api)
- Velero-UI (web user interface) [GitHub](https://github.com/seriohub/velero-ui)
- Velero-Watchdog (notifications service) [GitHub](https://github.com/seriohub/velero-watchdog)
- Velero-Core (core to centralize multi-cluster use) `Not released`

While YAML files are available for individual projects to facilitate installation via kubectl, it is highly recommended to use [Helm](https://github.com/seriohub/velero-helm) for [installation](getting-started/helm-installation). Helm automates many steps, streamlining the process.

## Features

- Intuitive usability
- Real-time dashboard and monitoring
- Backups management
- Restores management
- Schedules management
- Storage class map
- Restic features (check locks, unlock, unlock --remove-all)
- Multi cluster monitoring (require the core)

Please read [overview](./10-getting-started/01-overview.md) for more details.
