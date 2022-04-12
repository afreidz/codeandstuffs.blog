import classnames from "classnames/bind";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

const cx = classnames.bind(styles);

export default function Heading(props) {
  const { as, children, ...rest } = props;
  const [jump, setJump] = useState(null);
  const Tag = as || "h2";

  useEffect(() => {
    if (rest.id) setJump(`#${rest.id}`);
  }, [rest.id]);

  const classList = cx(rest.className, { heading: true });

  return (
    <Tag {...rest} className={classList}>
      {children}
      {!!jump && <a href={jump}>🔗</a>}
    </Tag>
  );
}

export const Headings = {
  h1: (props) => <Heading {...props} as="h1" />,
  h2: (props) => <Heading {...props} as="h2" />,
  h3: (props) => <Heading {...props} as="h3" />,
  h4: (props) => <Heading {...props} as="h4" />,
};
