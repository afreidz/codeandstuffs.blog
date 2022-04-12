import Link from "next/link";
import { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

interface Props {
  href: string;
  className?: string;
  children: ReactNode;
}

export default function Anchor(props: Props) {
  const { href, children, className } = props;

  const classList = cx(className, {
    link: true
  });

  return (
    <Link href={href} passHref>
      <a className={classList}>{children}</a>
    </Link>
  );
}
