import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

export default function LogoImage() {
  const themeColor = ThemeMode();
  console.log(themeColor);
  if (themeColor === "dark") {
    return (
      <Image
        priority
        src="/images/tcicon-light.png"
        className={utilStyles.topLogo}
        height={113}
        width={107}
        alt="Taylor Clark Logo"
      />
    );
  } else if (themeColor === "light") {
    return (
      <Image
        priority
        src="/images/tcicon.png"
        className={utilStyles.topLogo}
        height={113}
        width={107}
        alt="Taylor Clark Logo"
      />
    );
  }
}
