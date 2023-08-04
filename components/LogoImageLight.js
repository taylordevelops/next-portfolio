import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

export default function LogoImageLight() {
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
}
