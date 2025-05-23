---
id: docker-compose-installation
title: Docker Compose Installation – Run VUI Locally outside Kubernetes
description: Set up VUI locally using Docker Compose.
keywords: [VUI, Velero, Docker Compose, local installation, VUI API, VUI UI, Kubernetes alternative, VUI testing]
sidebar_label: 'Docker Compose'
sidebar_position: 3
---

# Docker Compose Installation

This deployment allows you to launch the **VUI** components on your local machine without needing a Kubernetes cluster.  

---

## Requirements

- Docker installed and running
- Docker Compose (v2+ recommended)
- A valid `kubeconfig` file from a Velero-enabled cluster

---

## Quick Start

1. Create a file named `docker-compose.yml` with the following content:

```yaml
services:
  api:
    image: dserio83/velero-api:0.2.7
    working_dir: /app
    networks:
      - vui
    volumes:
      - /absolute/path/to/your/kubeconfig.yaml:/root/.kube/config
    environment:
      API_ENDPOINT_URL: "0.0.0.0"
      API_ENDPOINT_PORT: "8001"
      API_RATE_LIMITER_L1: "60:200"
      API_RATE_LIMITER_CUSTOM_1: "Security:xxx:60:20"
      AUTH_ENABLED: "true"
      DEFAULT_ADMIN_USERNAME: "admin"
      DEFAULT_ADMIN_PASSWORD: "admin"
      API_TOKEN_EXPIRATION_MIN: "180"
      API_TOKEN_REFRESH_EXPIRATION_DAYS: "7"
      K8S_IN_CLUSTER_MODE: "False"
      K8S_VELERO_NAMESPACE: "velero"
      KUBE_CONFIG_FILE: "/root/.kube/config"
      ORIGINS_1: "http://127.0.0.1:8003"
      ORIGINS_2: "http://localhost:8003"
      CLUSTER_ID: "local-develop-cluster"
      DOWNLOAD_INSPECT_FOLDER: "/tmp/velero-inspect-backups"
      RESTIC_PASSWORD: "static-passw0rd"
      WATCHDOG_URL: "vui-watchdog"
      WATCHDOG_PORT: "8002"
    ports:
      - "8001:8001"

  vui-watchdog:
    image: dserio83/velero-watchdog:0.1.8
    restart: always
    working_dir: /app
    networks:
      - vui
    volumes:
      - /absolute/path/to/your/kubeconfig.yaml:/root/.kube/config
    environment:
      API_ENDPOINT_URL: "0.0.0.0"
      API_ENDPOINT_PORT: "8002"
      K8S_IN_CLUSTER_MODE: "false"
      K8S_VELERO_NAMESPACE: "velero"
      PROCESS_LOAD_KUBE_CONFIG: "true"
      PROCESS_KUBE_CONFIG: "/root/.kube/config"
      CLUSTER_ID: "cluster-backend-name"
      PROCESS_CYCLE_SEC: "1800"
      APPRISE: ""
    ports:
      - "8002:8002"
      
  ui:
    image: dserio83/velero-ui:0.2.7
    working_dir: /app
    networks:
      - vui
    depends_on:
      - api
    environment:
      NEXT_PUBLIC_REFRESH_DATATABLE_AFTER: "1500"
      NEXT_PUBLIC_REFRESH_RECENT: "5000"
      NEXT_PUBLIC_VELERO_API_NAME: "cluster-backend-name"
      NEXT_PUBLIC_VELERO_API_URL: "http://127.0.0.1:8001/api"
      NEXT_PUBLIC_VELERO_API_WS: "ws://127.0.0.1:8001"
      NEXT_PUBLIC_AUTH_ENABLED: "true"
      NEXT_PUBLIC_INSPECT_BACKUP_ENABLED: "true"
    ports:
      - "8003:3000"
      
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
http://localhost:8003
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
