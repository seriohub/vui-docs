---
id: architecture
title: VUI Architecture – Modular, Cloud-Native Design for Kubernetes
description: Discover the modular architecture of VUI, built with microservices for scalable, flexible, and cloud-native deployments on Kubernetes. Learn how VUI supports both single and multi-cluster setups.
keywords: [VUI, Velero, architecture, Kubernetes, microservices, cloud-native, modular design, multi-cluster, VUI-Core]
sidebar_label: 'Architecture'
sidebar_position: 1
---

# Architecture

The VUI project is built with a cloud-native architecture in mind. From the very beginning, the goal has been to design a modular system composed of multiple microservices, easily deployable on Kubernetes clusters. This approach ensures simplified maintenance, scalability, and flexibility for future enhancements.

During installation, you can choose the type of deployment that best suits your environment:

- **Single-Cluster Installation**:  
  Ideal for managing a single cluster or when you prefer isolated deployments, even in multi-cluster environments.

- **Multi-Cluster Installation**:  
  Recommended for users managing multiple clusters. This setup enables centralized control through a unified dashboard powered by VUI-Core.
