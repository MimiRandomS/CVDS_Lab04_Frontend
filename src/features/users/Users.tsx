import { faUserPlus, faUsersGear } from "@fortawesome/free-solid-svg-icons";
import LateralBar from "../../components/LateralBar/LateralBar";
import Card from "../../components/Users/Card/Card";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./Users.module.css";
import { Link } from "react-router-dom";

function Users() {
  return (
    <MainLayout
      leftContent={<LateralBar />}
      rightContent={
        <div className={styles.container}>
          <Link to="/users/create" style={{ textDecoration: "none" }}>
            <Card icon={faUserPlus} text="Agregar usuario" />
          </Link>
          <Card icon={faUsersGear} text="Administrar usuarios" />
        </div>
      }
    ></MainLayout>
  );
}

export default Users;
