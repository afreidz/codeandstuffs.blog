import Image from "next/image";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import useLikes from "$scripts/hooks/likes";
import { Heading, Date, Paragraph, Chip, Link, Spinner } from "$components";

const cx = classNames.bind(styles);

export interface Props {
  date: number;
  slug?: string;
  title: string;
  teaser: string;
  image?: string;
  tags?: string[];
  feeling?: string;
  variant?: "search" | "teaser" | null;
}

export default function Meta(props: Props) {
  const { title, date, teaser, tags, feeling, variant, image, slug } = props;
  const headingClass = `${styles.metaHeading} ${styles.metaList}`;
  const { likes, isLoading } = useLikes(slug);

  const Tag = variant === "search" ? "a" : "summary";
  const tagProps = variant === "search" ? { href: `posts/${slug}` } : {};
  const titleTag = variant === "search" ? "h3" : "h2";

  const rootClassnames = cx(styles.post, {
    [variant]: !!variant,
  });

  return (
    <Tag {...tagProps} className={rootClassnames}>
      {variant === "search" && (
        <figure className={styles.image}>
          <Image
            width={300}
            height={300}
            layout="responsive"
            src={image || "/logo.png"}
            alt="clever visual representing post"
          />
        </figure>
      )}
      <header>
        {[undefined, "teaser"].some((v) => v === variant) && (
          <div className={styles.date}>
            {variant !== "search" && <Date stamp={date} />}
            {variant !== "teaser" && (
              <Link className={styles.home} href="/">
                ← Home
              </Link>
            )}
          </div>
        )}
        <Heading as={titleTag} top={false}>
          {title}
        </Heading>
        {variant === "search" && <Date stamp={date} />}
      </header>
      {!variant && (
        <summary>
          <ul className={styles.metaList}>
            {!!feeling && (
              <li>
                <strong className={headingClass}>feeling: {feeling}</strong>
              </li>
            )}
            <li>
              <strong className={headingClass}>likes:</strong>
              <Chip className={styles.like} type="like">
                {isLoading ? (
                  <Spinner/> 
                ) : (
                  <>
                    <em>❤️</em> {likes?.length || 0}
                  </>
                )}
              </Chip>
            </li>
            {tags.length && (
              <li>
                <strong className={headingClass}>tags:</strong>
                <ul className={styles.tags}>
                  {tags.map((t, i) => {
                    return (
                      <Chip type={t} key={i}>
                        {t}
                      </Chip>
                    );
                  })}
                </ul>
              </li>
            )}
          </ul>
        </summary>
      )}
      {variant !== "search" && <Paragraph variant="teaser">{teaser}</Paragraph>}
      {variant === "teaser" && (
        <Paragraph className={styles.readMore}>
          <Link href={`/posts/${slug}`}>Read more...</Link>
        </Paragraph>
      )}
    </Tag>
  );
}
