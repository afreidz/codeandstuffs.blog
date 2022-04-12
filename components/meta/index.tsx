import Image from "next/image";
import { useContext } from "react";
import PostContext from "$contexts/post";
import styles from "./styles.module.scss";
import { Heading, Date, Paragraph, Chip, Link } from "$components";

export interface Props {
  date: number;
  slug?: string;
  title: string;
  likes: number;
  teaser: string;
  image?: string;
  tags?: string[];
  feeling?: string;
  variant?: "search" | "teaser" | null;
}

export default function Meta(props: Props) {
  const { likes } = useContext(PostContext);
  const { title, date, teaser, tags, feeling, variant, image, slug } = props;
  const headingClass = `${styles.metaHeading} ${styles.metaList}`;

  const Tag = variant === "search" ? "a" : "summary";
  const tagProps = variant === "search" ? { href: `posts/${slug}` } : {};
  const titleTag = variant === "search" ? "h3" : "h2";

  return (
    <Tag {...tagProps} className={styles.post}>
      {variant === "search" && (
        <figure className={styles.image}>
          <Image
            layout="fill"
            src={image || "/logo.png"}
            alt="clever visual representing post"
          />
        </figure>
      )}
      <header>
        <div className={styles.date}>
          {variant !== "search" && <Date stamp={date} />}
          {!["search", "teaser"].some((v) => v === variant) && (
            <Link className={styles.home} href="/">
              ← Home
            </Link>
          )}
        </div>
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
                <Heading as="h4" className={headingClass} top={false}>
                  feeling: {feeling}
                </Heading>
              </li>
            )}
            <li>
              <Heading as="h4" className={headingClass} top={false}>
                likes:
              </Heading>
              <Chip className={styles.like} type="like">
                <>
                  <em>❤️</em> {likes.length || 0}
                </>
              </Chip>
            </li>
            {tags.length && (
              <li>
                <Heading as="h4" className={headingClass} top={false}>
                  tags:
                </Heading>
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
