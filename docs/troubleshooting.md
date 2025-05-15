---
id: troubleshooting
title: Troubleshooting VUI – Common Issues and Solutions
description: Find solutions to common problems when using the VUI for Velero. Learn how to resolve login issues, connectivity problems, and API errors.
keywords: [VUI, Velero, troubleshooting, VUI login issues, Velero API, VUI errors, support]
sidebar_label: 'Troubleshooting'
sidebar_position: 50
---

# Troubleshooting

## Unable to login

### 1. Ensure the API is reachable

As mentioned in the installation guide, the VUI interface relies on communication with the API service.  
The API must be accessible from the client’s browser.

- Try opening the following URL in your browser:  
  `https://<your-endpoint>/api/online`

If this page loads, the API is accessible.

### 2. Run a Diagnostic Check

From the login page, click the **Diagnostic** link in the bottom-left corner:  
![diagnostic-link](./assets/screenshots/32_diagnostic_link.png)

This opens a pop-up with a list of internal checks and their current status:  
![diagnostic](./assets/screenshots/33_diagnostic.png)

### 3. Check for missing `SECURITY_TOKEN_KEY`

In some cases, the `SECURITY_TOKEN_KEY` environment variable is not generated automatically.  
This can cause authentication to fail and loop the user back to the login screen.

To fix this, manually set the `SECURITY_TOKEN_KEY` in your API configuration.

- 🔧 [See configuration note](./getting-started/installation/configuration)
- 📄 [View example in `values-override.yaml`](https://github.com/seriohub/velero-helm/blob/688dba38e3573707c75898a0ba32a9c07e923117/values-override.yaml#L14)

## Still stuck? Open an issue

If the above steps don’t resolve your issue, feel free to [open a GitHub issue](https://github.com/seriohub/vui-ui/issues/new) with details about your setup.  
Include logs, screenshots, and any configuration snippets that may help us reproduce the problem.

We appreciate your feedback — it helps improve the project for everyone.
