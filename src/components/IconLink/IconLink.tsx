import styles from "./IconLink.module.css";

type Props = {
  readonly src: string;
  readonly alt: string;
  readonly onClick?: () => void;
};

function IconLink({ src, alt, onClick }: Props) {
  return (
    <button className={styles.icoButton} onClick={onClick}>
      <img src={src} alt={alt} className={styles.ico} />
    </button>
  );
}

export default IconLink;
