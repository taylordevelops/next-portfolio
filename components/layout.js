import Head from "next/head";
import Image from "next/image";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import AddStar from "../components/AddStar";
import StarLoop from "../components/StarLoop";
import ToggleSwitch from "../components/ToggleSwitch";
import SvgLogo from "../components/SvgLogo";
import FillSwitch from "../components/FillSwitch";

const name = "Taylor Clark";
const subText = "Web Development, Cybersecurity";
export const siteTitle = "Taylor Clark - Web Development, Cybersecurity";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <div className="starBox"></div>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="description"
          content="Web Development portfolio of Taylor Clark"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        <>
          <SvgLogo />
          <div className={utilStyles.logoText}>{name}</div>
          <div className={utilStyles.logoSubtext}>{subText}</div>
        </>
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

        {/*         <div className="themeSwitchWrapper" title="Toggle Dark/Light Mode">
          <label className="themeSwitch" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" defaultChecked />
            <div className="slider round"></div>
          </label>
        </div> */}
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
