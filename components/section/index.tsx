import { ReactNode } from "react";
import classnames from "classnames/bind";
import styles from "./styles.module.scss";

const cx = classnames.bind(styles);

export interface Props {
  bleed?: boolean;
  invert?: boolean;
  className?: string;
  children?: ReactNode;
}

export default function Section(props: Props) {
  const { bleed, invert, children, className } = props;

  const classList = cx(className, {
    section: true,
    invert,
  });

  return (
    <section className={classList}>
      {bleed ? <>{children}</> : <div>{children}</div>}
    </section>
  );
}
