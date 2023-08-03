import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div class="about-section">
          <img
            class="profile-tn"
            src="/images/profile.jpg"
            alt="Taylor Clark's Profile Picture"
          />
          <div class="intro">
            <ul>
              <li>
                <span class="emo-icon">👋</span>
                Hello, my name is Taylor Clark.
              </li>
              <li>
                <span class="emo-icon">💻</span> I've been writing code and
                designing user experiences for the web since I was 12 years old.
              </li>
              <li>
                <span class="emo-icon">📚</span> I'm currently finishing my last
                2 quarters of my B.S. in Information Technology & Business
                Administration with a specialization in Cybersecurity at Central
                Washington University; and seeking a remote position in Web
                Development or Cybersecurity.
              </li>
              <li>
                <a href="contact/">
                  <button type="button" class="contact-button">
                    Contact me!
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
