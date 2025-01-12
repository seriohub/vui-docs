---
sidebar_label: 'Installation'
sidebar_position: 3
---

# HELM Install

While YAML files are available for individual projects to facilitate installation via kubectl, it is highly recommended to use Helm for installation. Helm automates many steps, streamlining the process.

Helm repository is available [here](https://github.com/seriohub/velero-helm)

:::important
The application consists of a UI that needs to communicate with the API service. Therefore, the API must have endpoints accessible from the client's browser. For this purpose, the Helm chart is configured to support installation via ingress or node port to expose both the UI and the API.
If both NodePort and Ingress are disabled, the application will be unreachable.
If NodePort or Ingress don't meet your requirements, feel free to modify the configuration as needed.
:::

## Install Vui with repo

Follow these steps:

1. Add repo:

    ``` bash
    helm repo add seriohub-velero https://seriohub.github.io/velero-helm/
    ```

2. Check repo:

    ``` bash
    helm search repo seriohub-velero
    ```

    Check that the output looks like:

    ``` bash
    NAME                CHART VERSION   APP VERSION DESCRIPTION                                       
    seriohub-velero/vui 0.1.6           0.1.6       Velero User Interface: a friendly UI and dashbo..
    ```

3. Create a configuration file starting from [values-override.yaml](https://github.com/seriohub/velero-helm/blob/main/values-override.yaml) file.

    For a simplified installation, you can refer to the values-override.yaml file, which defines the essential parameters for proper installation.

    :::tip
    If you need advanced configurations, you can configure the [values.yaml](https://github.com/seriohub/velero-helm/blob/main/chart/values.yaml)

    The description of the parameters is available in the chart [readme](https://github.com/seriohub/velero-helm/tree/main/chart):
    :::

4. Create namespace:
  
    ``` bash
    kubectl create ns velero-ui
    ```

5. Install using Helm:

    For a simplified installation, you can refer to the values-override.yaml file, which defines the essential parameters for proper installation.

    :::tip
    Make sure to customize the values in the [values-override.yaml](https://github.com/seriohub/velero-helm/blob/main/values-override.yaml) file according to your requirements before running the installation command.
    :::

    :::note
    If you want to use a release candidate version of the components, add these lines in the values-override.yaml
        ```
        # api
        api:
          apiServer:
            image:
              tag: dev
            imagePullPolicy: Always
        # ui
        ui:
          webServer:
            image:
              tag: dev
            imagePullPolicy: Always
        # watchdog daemon
        watchdog:
          veleroMonitoring:
            image:
              tag: dev
            imagePullPolicy: Always
        # watchdog report
        report:
          veleroWatchdogReport:
            image:
              tag: dev
            imagePullPolicy: Always
        ```
    The images contain the latest updates or improvements that will be released after a testing phase
    :::


    ``` bash
    helm install -f values-override.yaml vui seriohub-velero/vui -n velero-ui
    ```

    :::tip[Credentials]
    Default user:

    - Username: **admin**

    - Password: **admin**
    :::

6. Upgrade (In the case of changes or updates):

    ``` bash
    helm upgrade -f values-override.yaml vui seriohub-velero/vui -n velero-ui
    ```

7. Uninstall

    ``` bash
    helm uninstall vui -n velero-ui
    helm repo remove seriohub-velero
    kubectl delete ns velero-ui
    ```

## Install Vui with clone repository

Follow these steps:

1. Clone the repository:

    ``` bash
    git clone https://github.com/seriohub/velero-helm.git
    ```

2. Navigate to the Helm folder:

    ``` bash
    cd velero-helm
    ```

3. Edit a configuration file starting from [values-override.yaml](https://github.com/seriohub/velero-helm/blob/main/values-override.yaml) file.

    For a simplified installation, you can refer to the values-override.yaml file, which defines the essential parameters for proper installation.

    :::tip
    If you need advanced configurations, you can configure the [values.yaml](https://github.com/seriohub/velero-helm/blob/main/chart/values.yaml)

    The description of the parameters is available in the chart [readme](https://github.com/seriohub/velero-helm/tree/main/chart):
    :::

4. Create the namespace

    ``` bash
    kubectl create ns velero-ui
    ```

5. Install using Helm:

    :::important
    Make sure to customize the values in the [values-override.yaml](https://github.com/seriohub/velero-helm/blob/main/values-override.yaml) file according to your requirements before running the installation command.
    :::

    ``` bash
    helm install -f values-override.yaml vui ./chart/ -n velero-ui
    ```

6. Upgrade (In the case of changes or updates):

    ``` bash
    helm upgrade -f values-override.yaml vui ./chart/ -n velero-ui
    ```

7. Uninstall

    ``` bash
    helm uninstall vui -n velero-ui
    kubectl delete ns velero-ui
    ```
