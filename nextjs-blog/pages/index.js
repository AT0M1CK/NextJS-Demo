import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Upcoming Front-End Developer]</p>
        <p>
          Sample Website to demonstrate NextJS features{" "}
          <a href="https://nextjs.org/learn">using Next.js tutorial</a>.
        </p>
      </section>
    </Layout>
  );
}
