---
sidebar_label: 'Multi cluster'
sidebar_position: 20
---

# Multi-cluster

For those who manage several Kubernetes clusters and wish to centralise the web interface (VUI-UI), the **VUI-Core**  component acts as a gateway.
This component routes user requests exclusively to the active connection.

:::warning
The VUI-Core component is not yet released
:::

![software-architecture-mc](./../../assets/screenshots/21_sa_VUI_Core.gif)

:::info
The **Presentation layer** and the **Gateway layer** must be deployed once, possibly in the same cluster. The **Logical layer** runs as an agent and can be deployed several times in a different clusters.
:::

:::tip
The VUI-Core could be used also if you handle a single cluster
:::
