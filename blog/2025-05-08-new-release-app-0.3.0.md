---
title: Vui 0.3.0
description: A major chart release introducing structural improvements, support for core components, and breaking changes.
slug: vui-0.3.0
authors:
  - DSerio
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---

🚀 **A Major Milestone for Deployment**

We’re excited to announce the release of Vui 0.3.0 alongside Helm Chart 1.0.0, a significant step forward for deployment flexibility, clarity, and component modularity. This release introduces structural changes, new installation options, and support for advanced components.

<!-- truncate -->

🚨 **Breaking Changes**

With this version, the Helm chart structure has been completely refactored. Deprecated fields have been removed, new required values introduced, and the entire layout optimized for clarity and maintainability.

⚠️ This version is not backward-compatible with previous releases (Helm chart 0.1.27 and previous versions). Please refer to the updated templates for [scenario-based](/docs/getting-started/installation/scenarios/installation-scenarios) installations.

🆕 **Core Support**

This release introduces support for the new [core](/docs/getting-started/installation/scenarios/core-cluster-installation) component—a powerful foundation designed to extend the platform’s capabilities. While still in early stages, it represents a fundamental building block for advanced functionality.

Organizations with access to this component can now deploy it directly via Helm. This marks an important step in our effort to offer modular extensibility to those contributing most actively to the project’s growth.

🛠 **Improvements & Installation Scenarios**

We’ve added dedicated templates for different usage contexts:

- Single cluster (standard)
- Single cluster No authentication
- Single cluster with LDAP authentication
- Core
- Core with LDAP authentication
- Agent-only

These scenarios simplify the deployment process and offer a clearer starting point for varied infrastructures. The application can be deployed in many different ways using the values.yaml file; the templates provided are tailored to the most common and standard use cases.

🔄 **Component Updates**

- 📦 appVersion updated to 0.3.0
- 🚀 API updated to 0.2.5
- 🎨 UI updated to 0.2.5
- 🛡️ Watchdog updated to 0.1.8

This release focuses on robustness, clarity, and forward compatibility. We encourage you to explore the new installation options and follow the evolving roadmap. As always, feedback and participation help shape what comes next. 🚀