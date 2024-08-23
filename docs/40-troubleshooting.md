---
sidebar_label: 'Troubleshooting'
sidebar_position: 40
---

# Troubleshooting

## Unable to login

1. From the access page click Diagnostic link ![diagnostic-link](./assets/screenshots/32_diagnostic_link.png) (bottom left-hand corner).

   A pop up message appaers with a diagnostic check list and its state.

   ![diagnostic](./assets/screenshots/33_diagnostic.png)

2. In some cases, the securityTokenKey is not automatically generated. As a result, when trying to log in, authentication fails, and the user is redirected to the login page.
To resolve this issue, manually set the optional parameter **SECURITY_TOKEN_KEY** in the VUI-API configuration.
   1. [See note 3](./getting-started/configuration/velero-api#configuration)

   2. [See values-override.yaml](https://github.com/seriohub/velero-helm/blob/688dba38e3573707c75898a0ba32a9c07e923117/values-override.yaml#L14)
