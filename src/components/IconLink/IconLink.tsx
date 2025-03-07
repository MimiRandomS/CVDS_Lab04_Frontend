import styles from "./IconLink.module.css";

type Props = {
  readonly href: string;
  readonly src: string;
  readonly alt: string;
};

function IconLink({ href, src, alt }: Props) {
  return (
    <a href={href}>
      <img src={src} alt={alt} className={styles.ico} />
    </a>
  );
}

export default IconLink;