---
sidebar_label: 'Watchdog'
sidebar_position: 3
description: 'WATCHDOG Configuration'
---

# WATCHDOG

Below are the configurable environment parameters for the UI.

- **FIELD** is the name of the environment variable to be configured within the *velero-watchdog-config* ConfigMap.
- **Helm KEY** is the related key defined in the Helm chart.

## Configuration

<div class="table-container">

| FIELD                          | HELM KEY                                     | TYPE   | DEFAULT  | DESCRIPTION                                                                                                                                              |
|--------------------------------|----------------------------------------------|--------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| BACKUP_ENABLE                  | watchdogConfig.backupEnable                  | Bool   | `True`   | Enable watcher for backups without schedule or last backup for each schedule                                                                             |
| DEBUG                          | watchdogConfig.debug                         | Bool   | `False`  | View debugging information.                                                                                                                              |
| EMAIL_ACCOUNT      *           | watchdogConfig.emailAccount                  | String |          | user name account                                                                                                                                        |
| EMAIL_ENABLE       *           | watchdogConfig.emailEnable                   | Bool   | `False`  | Enable email notification                                                                                                                                |
| EMAIL_SMTP_SERVER  *           | watchdogConfig.emailSmtpServer               | String |          | SMTP server                                                                                                                                              |
| EMAIL_SMTP_PORT    *           | watchdogConfig.emailSmtpPort                 | int    | `587`    | SMTP port                                                                                                                                                |
| EMAIL_PASSWORD     *           | watchdogConfig.emailPassword                 | String |          | password account                                                                                                                                         |
| EMAIL_RECIPIENTS   *           | watchdogConfig.emailRecipients               | Bool   |          | Email recipients                                                                                                                                         |
| EXPIRES_DAYS_WARNING           | watchdogConfig.expiresDaysWarning            | int    | `10`     | Number of days to backup expiration below which to display a warning about the backup                                                                    |
| IGNORE_NM_1                    |                                              | String |          | regex to ignore a namespace or a group of namespaces                                                                                                     |
| IGNORE_NM_2                    |                                              | String |          | regex to ignore a namespace or a group of namespaces                                                                                                     |
| IGNORE_NM_3                    |                                              | String |          | regex to ignore a namespace or a group of namespaces                                                                                                     |
| K8S_INCLUSTER_MODE **          | watchdogConfig.k8SInclusterMode              | Bool   | `False`  | Enable in cluster mode                                                                                                                                   |
| K8S_VELERO_NAMESPACE           | watchdogConfig.k8sVeleroNamespace            | String | `velero` | Name of the namespace where vmware-tanzu/velero is deployed                                                                                              |
| LOG_SAVE                       |                                              | Bool   | `False`  | Save log to files                                                                                                                                        |
| NOTIFICATION_SKIP_COMPLETED    | watchdogConfig.notificationSkipCompleted     | Bool   | `True`   | Skip notification new completed backup                                                                                                                   |
| NOTIFICATION_SKIP_DELETING     | watchdogConfig.notificationSkipDeleting      | Bool   | `True`   | Skip notification backup deleting                                                                                                                        |
| NOTIFICATION_SKIP_INPROGRESS   | watchdogConfig.notificationSkipInProgress    | Bool   | `True`   | Skip notification new in progress backup                                                                                                                 |
| NOTIFICATION_SKIP_REMOVED      | watchdogConfig.notificationSkipRemoved       | Bool   | `True`   | Skip notification backup removed                                                                                                                         |
| PROCESS_CLUSTER_NAME * **      | watchdogConfig.processClusterName            | String |          | Force the cluster name and it appears in the message                                                                                                     |
| PROCESS_LOAD_KUBE_CONFIG *     |                                              | Bool   | `True`   | Set False if it runs on k8s.                                                                                                                             |
| PROCESS_KUBE_CONFIG            |                                              | String |          | Path to the kube config file. This is mandatory when the script runs outside the Kubernetes cluster, either in a docker container or as a native script. |
| REPORT_BACKUP_ITEM_PREFIX      | watchdogConfig.reportBackupItemPrefix        | String |          | Add a prefix to backup items in reports                                                                                                                  |
| REPORT_SCHEDULE_ITEM_PREFIX    | watchdogConfig.reportScheduleItemPrefix      | String |          | Add a prefix to schedule items in reports                                                                                                                |
| PROCESS_CYCLE_SEC              | watchdogConfig.processCycleSec               | Int    | `120`    | Cycle time (seconds)                                                                                                                                     |
| SLACK_CHANNEL      *           | watchdogConfig.slackChannel                  | Bool   |          | Channel id where sens the notification                                                                                                                   |
| SLACK_ENABLE       *           | watchdogConfig.slackEnable                   | Bool   |          | Enable Slack notification                                                                                                                                |
| SLACK_TOKEN        *           | watchdogConfig.slackToken                    | Bool   |          | Token for access to Slack via Http API                                                                                                                   |
| SCHEDULE_ENABLE                | watchdogConfig.scheduleEnable                | Bool   | `True`   | Enable watcher for schedule                                                                                                                              |
| TELEGRAM_API_TOKEN *           | watchdogConfig.telegramToken                 | String |          | Token for access to Telegram bot via Http API                                                                                                            |
| TELEGRAM_CHAT_ID   *           | watchdogConfig.telegramChatId                | String |          | Telegram chat id where send the notifications                                                                                                            |
| TELEGRAM_ENABLE    *           | watchdogConfig.telegramEnable                | Bool   | `False`  | Enable telegram notification                                                                                                                             |

</div>

\* Mandatory parameters

\** Mandatory if it is deployed on cluster
