---
sidebar_label: 'Watchdog'
sidebar_position: 3
description: 'WATCHDOG Configuration'
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

If you're using **email notifications**, you can improve formatting by appending the following parameter to your Apprise URL: