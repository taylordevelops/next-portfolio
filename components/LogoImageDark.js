import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

export default function LogoImageDark() {
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
