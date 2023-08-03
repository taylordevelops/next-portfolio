import Head from "next/head";
import Image from "next/image";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import AddStar from "../components/AddStar";
import StarLoop from "../components/StarLoop";

const name = "Taylor Clark";
const subText = "Web Development, Cybersecurity";
export const siteTitle = "Taylor Clark - Web Development, Cybersecurity";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <div id="starbox"></div>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Web Development portfolio of Taylor Clark"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/tcicon-light.png"
              className={utilStyles.topLogo}
              height={113}
              width={107}
              alt="Taylor Clark Logo"
            />
            <div className={utilStyles.logoText}>{name}</div>
            <div className={utilStyles.logoSubText}>{subText}</div>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/tcicon-light.png"
                className={utilStyles.topLogo}
                height={113}
                width={107}
                alt="Taylor Clark Logo"
              />
            </Link>
            <div className={utilStyles.logoText}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </div>
            <div className={utilStyles.logoSubText}>{subText}</div>
          </>
        )}
      </header>

      <nav className="mainNav">
        <ul>
          <Link href="/about/" title="About Taylor">
            <li>About</li>
          </Link>
          <Link
            href="/portfolio/"
            title="View Taylor's Web Development Portfolio"
          >
            <li>Portfolio</li>
          </Link>
          <Link href="/contact/" title="Contact Taylor">
            <li>Contact</li>
          </Link>
        </ul>

        <div class="theme-switch-wrapper" title="Toggle Dark/Light Mode">
          <label class="theme-switch" for="checkbox">
            <input type="checkbox" id="checkbox" checked />
            <div class="slider round"></div>
          </label>
        </div>
      </nav>

      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
      <div id="footer"></div>
    </div>
  );
}
