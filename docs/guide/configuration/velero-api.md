---
id: api
title: VUI API Configuration – Enable and Explore Swagger Documentation
description: Configure the VUI API component and enable Swagger UI for exploring available endpoints. Learn how to expose API documentation and adjust Helm values accordingly.
keywords: [VUI, Velero, API, Swagger UI, API documentation, Helm values, Kubernetes, VUI configuration, REST API]
sidebar_label: 'API'
sidebar_position: 1
---

# API

## Swagger UI

:::tip Swagger Explorer

If you want to explore all the available endpoints exposed by the API component, you can access the Swagger UI documentation at:

```text
<API_IP_ADDRESS>/api/docs
```

:::

To enable this, make sure the following Helm value is set to `true`:

- `apiService.config.apiEnableDocumentation`

> If this key is not enabled, the `/docs` endpoint will not be available.
