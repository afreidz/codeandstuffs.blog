import { ReactNode } from "react";
import classnames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classnames.bind(styles);

export interface Props {
  className?: string;
  children?: ReactNode;
  variant?: "paragraph" | "teaser";
}

export default function Paragraph({
  variant = "paragraph",
  children,
  className,
}: Props) {
  const classlist = cx(className, {
    [variant]: true,
  });
  return <p className={classlist}>{children}</p>;
}
