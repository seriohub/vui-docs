import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import Head from "@docusaurus/Head";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)} /*style={{marginTop: "8rem"}}*/>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Introduction
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title={`${siteConfig.title}`}
      description="An opensource VUI for Velero backup"
    >
      <Head>
        <meta property="og:url" content="https://vui.seriohub.com" />
        <meta
          property="og:description"
          content="An innovative solution designed to streamline and simplify the management of Velero backups"
        />
        {/*<link
          rel="icon"
          type="image/svg+xml"
          sizes="any"
          href="img/favicon.svg"
        />*/
        }
        
      </Head>
      <HomepageHeader/>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
