---
title: Vui 0.3.3
description: A feature-packed release introducing cache configuration, protocol control, Apprise integration, and template improvements.
slug: vui-0.3.3
authors:
  - DSerio
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
date: 2025-05-20
---

Vui 0.3.3, released with Helm Chart v1.0.4, introduces powerful new configuration options and improvements aimed at enhancing flexibility, performance, and deployment clarity. This release focuses on API caching, protocol customization, alerting integration, and broader support for diverse environments.

<!-- truncate -->

## 🔧 What's New

### ⏱️ Configurable API Response Caching

You can now configure the in-memory **Time To Live (TTL)** for cached `GET` API responses using the new:

```yaml
uiService:
  config:
    cacheTTL: 180
```

The cacheTTL value defines how long the frontend should retain API responses before revalidating them.
This caching mechanism works in tandem with a watch-based event system: when changes occur in Kubernetes resources, the frontend automatically refreshes the relevant data in real time—ensuring up-to-date views without sacrificing performance.

---

### 🌐 Protocol Configuration for ClusterIP Mode

For deployments where `exposure.mode` is set to **clusterIP**, you can now explicitly configure:

```yaml
exposure:
  mode: clusterIP
  
  clusterIP:
    protocol: http
    wsProtocol: ws
    localAddress:
    apiPort:
```

---

### 🔔 Apprise Notification Integration

The Helm chart now supports notification integration using **Apprise**, a powerful notification library.

You can enable it with:

```yaml
watchdogService:
  config:
    apprise: ""
```

This feature enables alerts and messages to be sent through multiple channels, including email, messaging apps, and more.

---

### 🐳 Docker Deployment Support

**Vui** can now be deployed seamlessly in Docker environments without requiring Kubernetes or cluster mode configuration.  
This makes it easier to run the application in local development setups, CI pipelines, or lightweight production scenarios.

---

### 🧩 Improved Template Flexibility

We've refined the chart templates to better support various installation scenarios and custom setups. These improvements enhance compatibility across cloud environments and deployment pipelines.

---

## 🔄 Component Updates

- 📦 **appVersion**: upgraded to 0.3.3
- 🚀 **API**: updated to version 0.2.7
- 🎨 **UI**: updated to version 0.2.7

These updates bring performance improvements, bug fixes, and UI refinements aligned with the core application updates.

---

## 📦 How to Upgrade

To upgrade to the latest version:

```bash
helm repo update
helm upgrade my-release seriohub/vui --version 1.0.4
```

Make sure to review any breaking changes or new configuration options in your `values.yaml`.

---

Thanks for continuing to improve and contribute to the project!  
For questions or feedback, feel free to open an issue or reach out to the team.
