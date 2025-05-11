---
sidebar_label: 'Installation Scenarios'
sidebar_position: 1
---

# Installation Scenarios

VUI can be deployed in different ways depending on your environment and operational needs.  
This section outlines the most common **installation scenarios**, each supported by **ready-to-use Helm override files** to simplify configuration.

Installing VUI via Helm typically requires a `values.yaml` file with many configuration keys.  
While this provides flexibility, it can feel overwhelming at first — especially for new users.

To simplify setup, the [`velero-helm`](https://github.com/seriohub/velero-helm) repository includes a collection of **minimal override files** tailored to common deployment patterns.

These can be used as a starting point and adapted to fit your specific requirements.

## Common Scenarios

### 🟢 Standalone (Single Cluster)
A self-contained installation where all components are deployed into a single Kubernetes cluster.  
Recommended for local testing, simple environments, or cases where centralized management is not required.

→ [View setup instructions](./single-cluster.md)

---

### 🟠 Centralized (Core)
Deploys `vui-core` along with other components to enable centralized management of multiple remote clusters.  
Enables multi-cluster visibility, coordination, and automation from a single control plane.

→ [View setup instructions](./core-cluster.md)

---

### 🔵 Agent-Only (Secondary Clusters)
Installs only the agent components (`vui-api`, `vui-watchdog`) in clusters that connect to a central `vui-core` instance.

→ [View setup instructions](./agent-only.md)

---

## List of Available Override Files

The following override files are available in the [`examples/overrides`](https://github.com/seriohub/velero-helm/tree/main/examples/overrides) directory:

- `single-cluster.yaml`
- `single-cluster-no-auth.yaml`
- `single-cluster-ldap.yaml`
- `core.yaml`
- `core-ldap.yaml`
- `agent.yaml`

Each file includes only the **essential configuration keys** needed for a working deployment in its respective scenario.

Using these overrides is **highly recommended**, especially when getting started.  
They simplify configuration, reduce the risk of misconfiguration, and speed up the installation process — while remaining fully customizable.

---

## Choosing the Right Scenario

| Scenario        | Best For                                                 |
|-----------------|----------------------------------------------------------|
| Single Cluster  | Isolated or simpler environments                         |
| Core Cluster    | Centralized multi-cluster management                     |
| Agent Only      | Secondary clusters that connect to a central VUI-Core    |

> 🛠️ You can extend any override file by layering your own `values.yaml` to enable advanced features like security, LDAP, TLS, or custom ingress settings.
