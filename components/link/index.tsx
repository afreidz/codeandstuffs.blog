import Link from "next/link";
import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props {
  href: string;
  children: ReactNode;
}

export default function Anchor(props: Props) {
  const { href, children } = props;

  return (
    <Link href={href} passHref>
      <a className={styles.link}>{children}</a>
    </Link>
  );
}
