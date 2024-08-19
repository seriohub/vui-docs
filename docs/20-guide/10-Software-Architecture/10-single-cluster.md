---
sidebar_label: 'Single cluster'
sidebar_position: 10
---

# Software Architecture

## Single cluster

The VUI project is designed to be Cloud-native ready. The starting idea was to develop a project composed of several microservices to be deployed in Kubernetes cluster.


![software-architecture](./../../assets/screenshots/20_sa_VUI.png)

The software design of VUI project is divided into: 
  - **Presentation layer (VUI-UI)**: the layer manages the web interface shown to users. 
  - **Logical layer (VUI-API and VUI-Watchdog)**: handles all customer requests made through the graphical interface, communicates with the Velero engine and sends notifications when events occur.


This configuration is designed to manage a single Kubernetes cluster.
