import { ReactNode } from "react";
import classnames from "classnames/bind";
import styles from "./styles.module.scss";

const cx = classnames.bind(styles);

interface Props {
  type?: string;
  className?: string;
  children: ReactNode;
}

export default function Chip(props: Props) {
  const { type, children, className } = props;
  const classList = !!type
    ? cx(className, {
        chip: true,
        [type]: true,
      })
    : cx(className, { chip: true });

  return <span className={classList}>{children}</span>;
}
