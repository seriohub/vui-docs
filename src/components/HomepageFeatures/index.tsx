import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Intuitive Dashboard",
    Svg: require("@site/static/img/home-features/blue/undraw_dashboard.svg").default,
    description: (
      <>
        Access all your Velero backup information in one centralized,
        user-friendly dashboard. Monitor backups, restores, and system health at
        a glance.
      </>
    ),
  },
  {
    title: "Real-Time Alerts and Notifications",
    Svg: require("@site/static/img/home-features/blue/undraw_new_notifications.svg").default,
    description: (
      <>
        Stay informed with real-time alerts and notifications about the status
        of your backups. Receive updates via email, SMS, or in-app
        notifications.
      </>
    ),
  },
  {
    title: "Cron Heat Map Visualization",
    Svg: require("@site/static/img/home-features/blue/undraw_design_stats.svg").default,
    description: (
      <>
        Visualize your backup activity with heat map. Identify peak usage times
        and optimize your backup strategies.
      </>
    ),
  },
  {
    title: "Centralized Management for Multiple Clusters",
    Svg: require("@site/static/img/home-features/blue/undraw_server_cluster.svg").default,
    description: (
      <>
        Effortlessly manage and monitor backups across all your clusters from
        one centralized interface.
      </>
    ),
  },
  {
    title: "Simplified Storage Class Mapping",
    Svg: require("@site/static/img/home-features/blue/undraw_memory_storage.svg").default,
    description: (
      <>
        Easily map and manage storage classes across different environments.
        Simplify storage management and ensure consistency in your backup and
        restore processes.
      </>
    ),
  },
  {
    title: "S3 Repository Statistics and Restic Operations",
    Svg: require("@site/static/img/home-features/blue/undraw_product_iteration.svg").default,
    description: (
      <>
        Access statistics directly from your S3 repositories. Monitor storage
        usage. Perform advanced operations on Restic repositories.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
