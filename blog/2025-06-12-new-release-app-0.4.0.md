---
title: VUI 0.4.0
description: Major improvements to the dashboard, new features for backup visibility, and UI/UX enhancements across the board.
slug: vui-0.4.0
authors:
  - DSerio
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
date: 2025-06-11
---

We’re excited to announce the release of **VUI 0.4.0**, bundled with **Helm Chart v1.0.5** — a major update that enhances visibility, usability, and multi-cluster readiness.

<!-- truncate -->

This release builds upon the recent introduction of `vui-core`, delivering upgrades across both the **API** and **UI** for a more seamless and powerful experience.

## 🚀 What’s New

### 🧠 Smarter Dashboards

- **Improved Recent Backups Table**: Redesigned layout and better performance for reviewing the latest backup activities.
- **Unscheduled Namespaces**: New panel lets you quickly schedule backups for newly discovered namespaces.

### 📊 Backup Statistics

- **Backup Overview Panel**: A new section provides immediate insights into backup activity across your schedules.

### 🎨 Enhanced UX & Design

- **Refreshed Visuals**: Updated icons, colors, and loaders deliver a more polished and consistent UI.
- **Tables Overhaul**: Tables have been completely restructured. You can now:
  - Filter globally or by individual column
  - Highlight search matches
  - Sort and group columns
  - Pin columns and select which ones to display  
  Each table remembers its layout, so users can personalize views per resource type.

### 🔍 Improved Interactions

- **Log Search**: Easily search inside log outputs.
- **Manifest Search**: Quickly locate specific entries within backup manifests.

### ⚙️ Core Support & Multi-Cluster

- **Core-Aware Components**: Key features like `BackupDetails` now include awareness of `vui-core` environments, improving centralized operations and agent integration.

## 🐞 Fixes & Maintenance

- Resolved issues with undefined values in API stats
- Suppressed noisy UI warnings
- Removed legacy and unused logic
- Improved in-memory caching and token flow reliability

## ⚡ Performance & Polish

- Debounce delay lowered for snappier UI response
- Cleaner code, improved auth logic, and dependency updates

---

As always, detailed changelogs are available in the official [API changelog](https://github.com/seriohub/vui-api/blob/main/CHANGELOG.md) and [UI changelog](https://github.com/seriohub/vui-ui/blob/main/CHANGELOG.md).

If you're already using VUI or exploring centralized backup management with `vui-core`, this release is highly recommended.

👉 To get started or upgrade, see the [Installation Scenarios Guide](/docs/getting-started/installation/scenarios/installation-scenarios).

---

Thanks for supporting and contributing to the VUI project!  
Feel free to open an issue or reach out with suggestions or feedback.
