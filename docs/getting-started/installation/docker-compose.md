---
id: docker-compose-installation
title: Docker Compose Installation – Run VUI Locally outside Kubernetes
description: Set up VUI locally using Docker Compose.
keywords: [VUI, Velero, Docker Compose, local installation, VUI API, VUI UI, Kubernetes alternative, VUI testing]
sidebar_label: 'Docker Compose'
sidebar_position: 3
---

# Docker Compose Installation

> ⚠️ **Disclaimer**  
> VUI is designed to run in Kubernetes environments.  
> This Docker Compose setup is provided **only for local testing or evaluation purposes**.

This deployment allows you to launch the **API** and **UI** components on your local machine without needing a Kubernetes cluster.  
The **Watchdog** service is not included, as it relies on Kubernetes internals and is **not compatible** with environments outside of a Kubernetes cluster.

---

## Requirements

- Docker installed and running
- Docker Compose (v2+ recommended)
- A valid `kubeconfig` file from a Velero-enabled cluster

---

## Quick Start

1. Create a file named `docker-compose.yml` with the following content:

```yaml
version: "3.9"

services:
  vui-api:
    image: dserio83/velero-api:0.2.6
    working_dir: /app
    networks:
      - vui
    volumes:
      - /absolute/path/to/your/kubeconfig.yaml:/root/.kube/config
    environment:
      API_ENDPOINT_URL: "0.0.0.0"
      API_ENDPOINT_PORT: "8001"
      API_ENABLE_DOCUMENTATION: "1"
      API_RATE_LIMITER_L1: "60:200"
      API_RATE_LIMITER_CUSTOM_1: "Security:xxx:60:20"

      AUTH_ENABLED: "true"
      DEFAULT_ADMIN_USERNAME: "admin"
      DEFAULT_ADMIN_PASSWORD: "admin"
      API_TOKEN_EXPIRATION_MIN: "180"
      API_TOKEN_REFRESH_EXPIRATION_DAYS: "7"

      K8S_IN_CLUSTER_MODE: "false"
      K8S_VELERO_NAMESPACE: "velero"
      KUBE_CONFIG_FILE: "/root/.kube/config"

      DEBUG_LEVEL: "debug"
      CONTAINER_MODE: "false"

      ORIGINS_1: "http://localhost:3000"
      ORIGINS_2: "http://127.0.0.1:3000"

      CLUSTER_ID: "local-develop-cluster"
      DOWNLOAD_INSPECT_FOLDER: "/tmp/velero-inspect-backups"
      RESTIC_PASSWORD: "static-passw0rd"
    ports:
      - "8001:8001"

  vui-ui:
    image: dserio83/velero-ui:0.2.6
    working_dir: /app
    networks:
      - vui
    depends_on:
      - vui-api
    environment:
      NEXT_PUBLIC_REFRESH_DATATABLE_AFTER: "1500"
      NEXT_PUBLIC_REFRESH_RECENT: "5000"
      NEXT_PUBLIC_VELERO_API_NAME: "your-cluster-name"
      NEXT_PUBLIC_VELERO_API_URL: "http://127.0.0.1:8001"
      NEXT_PUBLIC_VELERO_API_WS: "ws://127.0.0.1:8001"
      NEXT_PUBLIC_AUTH_ENABLED: "true"
      NEXT_PUBLIC_INSPECT_BACKUP_ENABLED: "true"
    ports:
      - "3000:3000"

networks:
  vui:
```

> 📝 Replace `/absolute/path/to/your/kubeconfig.yaml` with the full path to your local kubeconfig file.  
> The Velero API will use this to connect to your cluster.

---

2. Start the services:

```shell
docker compose up
```

3. Open the UI in your browser:

```shell
http://localhost:3000
```

---

## Default Credentials

- **Username**: `admin`  
- **Password**: `admin`

---

## Notes

- The `vui-api` service runs on port `8001` and communicates with your Velero instance using your local kubeconfig
- The `vui-ui` runs on port `3000` and connects to the API via network (`127.0.0.1:8001`)
- No persistent storage is used; data is lost when containers are removed
- The Watchdog component is **not compatible** with Docker Compose and is omitted

---

> 🔒 For secure environments or public exposure, use the [Helm-based Kubernetes installation](/docs/getting-started/installation/helm-installation).
