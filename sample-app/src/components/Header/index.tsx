import Link from "next/link";
import { FC } from "react";
import styles from "./style.module.css";
import Image from "next/image";

export const Header: FC = () => (
  <header className={styles.root}>
    <Link href="/">
      <Image
        className={styles.logo}
        src="https://nextjs.org/icons/next.svg"
        alt="Next.js"
        width={120}
        height={38}
        priority
      />
    </Link>
    <div className={styles.navigation}>
      <Link className={styles.link} href="/a" prefetch={false}>
        ページA
      </Link>
      <Link className={styles.link} href="/b">
        ページB
      </Link>
    </div>
  </header>
);
