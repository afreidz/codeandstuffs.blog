import Link from "next/link";
import styles from "./styles.module.scss";

export default function Logo() {
  return (
    <h1 className={styles.heading}>
      <Link href="/" passHref>
        <a>
          <span>&#47;&#47;</span>codeandstuffs<span>.blog</span>
        </a>
      </Link>
    </h1>
  );
}
