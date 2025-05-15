---
id: repositories
title: Repository Management – View and Maintain Kopia and Restic Repositories
description: Manage Kopia and Restic repositories in VUI. View details like volume namespace, repository type, storage location, and lock status. Monitor storage usage and perform maintenance tasks such as unlocking Restic repositories.
keywords: [VUI, Velero, repository management, Restic, Kopia, backup repositories, lock status, storage usage, Kubernetes backups]
sidebar_label: 'Repositories'
sidebar_position: 8
---

# Repo

![storage location](./../../assets/screenshots/10_repo.png)

The Repo screen allows you to view the data of Kopia or Restic repositories in a tabular format. The table quickly displays essential details such as volume namespace, backup storage location, repository type, locks (only for Restic), and identifier. Additionally, you can calculate the size of the repository. For Restic repositories, the available functions include check locks, unlock, and unlock --remove all.

This interface provides a comprehensive overview of repository configurations, enabling efficient management and troubleshooting. The ability to calculate repository size helps in monitoring storage usage and planning capacity. The specific functions for Restic repositories facilitate maintenance and security by allowing you to check and manage lock statuses.
