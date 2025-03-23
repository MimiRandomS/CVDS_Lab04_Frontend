import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import styles from "./LateralBar.module.css";
import getUserFromSessionStorage from "../../utils/getFromSessionStorage";

function LateralBar() {
  const navigate = useNavigate();
  const userRole = getUserFromSessionStorage().rol;
  const items = ["Reservas", "Mis reservas"];
  const paths = ["/reservations", "/myReservations"];

  if (userRole === "ADMIN") {
    items.push("Usuarios", "Reportes");
    paths.push("/users", "/analytics");
  }

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className={styles.lateralBar}>
      <div className={styles.lateralBar__listContainer}>
        <ul className={styles.lateralBar__list}>
          {items.map((element, index) => (
            <li
              key={element}
              className={styles.lateralBar__item}
              onClick={() => handleNavigation(paths[index])}
            >
              {element}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={styles.lateralBar__account}
        onClick={() => {
          navigate("/account");
        }}
      >
        <FontAwesomeIcon icon="user"></FontAwesomeIcon>
        <p className={styles.lateralBar__p}>Mi cuenta</p>
      </div>
    </div>
  );
}

export default LateralBar;
