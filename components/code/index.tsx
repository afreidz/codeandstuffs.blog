import styles from "./styles.module.scss";

interface Props {
  className: string,
  children?: React.ReactNode;
}

export default function Code(props: Props) {
  const { children, className } = props;
  return (
    <div className={styles.codeblock}>
      <header>
        <button>⬤</button>
      </header>
      <pre className={className}>{children}</pre>
    </div>
  );
}
