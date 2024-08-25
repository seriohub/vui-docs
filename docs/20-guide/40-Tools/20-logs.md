---
sidebar_label: 'Debug'
sidebar_position: 10
---

# Tools

## Debug

The debug tool allow to control different level of logs.

![software-architecture-sc](./../../assets/screenshots/35_debug_shell_sz.png)

The levels are:

1. **Shell & K8s**: show commands send to the Velero core (from the VUI-API to shell command)
2. **Request**: show the requests send from the VUI-UI (user requests) to VUI-API
3. **Response**: show the responses received to a **Request** from the VUI-API to VUI-UI
4. **Notification**: show the messages send to the notification channels enabled (from VUI-API to VUI-Watchdog)
