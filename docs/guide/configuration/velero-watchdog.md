---
id: watchdog
title: Watchdog Configuration – VUI Notification System with Apprise
description: Configure the VUI Watchdog service using Apprise to send notifications to email, Slack, Telegram, Discord, and more. Learn how to integrate alerts into your backup workflows.
keywords: [VUI, Velero, Watchdog, Apprise, notifications, alert system, Slack, Telegram, Discord, Kubernetes monitoring, VUI alerts]
sidebar_label: 'Watchdog'
sidebar_position: 2
---

# WATCHDOG

## Apprise Integration

The **Watchdog** service uses [Apprise](https://github.com/caronc/apprise) as its notification engine.

Apprise is a lightweight, powerful Python library and CLI tool that supports sending notifications to **dozens of services** — including email, Slack, Telegram, Discord, Microsoft Teams, Webhooks, and more — through a unified URL-based configuration system.

This makes it easy to integrate alerts into any existing workflow or messaging platform without requiring additional code.

---

### Integration in Watchdog

Starting from version `0.1.19`, Apprise has been integrated into the Watchdog service as the default notification mechanism.

- Configuration is handled **directly from the VUI interface**
- Changes made in the UI can be **saved and applied by restarting Watchdog** from within the app
- You can define multiple notification services using Apprise’s standard URL format

To configure your delivery channels correctly, refer to the [official Apprise documentation](https://github.com/caronc/apprise).

---

### Email-specific Note

If you're using **email notifications**, you can improve formatting by appending the following parameter to your Apprise URL: **&format=markdown**
