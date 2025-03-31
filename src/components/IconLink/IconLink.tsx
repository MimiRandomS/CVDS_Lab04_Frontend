import styles from "./IconLink.module.css";

type Props = {
  readonly src: string;
  readonly alt: string;
  readonly onClick?: () => void;
  readonly disabled?: boolean;
};

function IconLink({ src, alt, onClick, disabled = false }: Props) {
  return (
    <button className={styles.icoButton} onClick={onClick} disabled={disabled}>
      <img src={src} alt={alt} className={styles.ico} />
    </button>
  );
}

export default IconLink;
