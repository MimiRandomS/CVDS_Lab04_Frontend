import { useNavigate } from "react-router-dom";
import styles from "./account.module.css";
import MainLayout from "../../../layouts/MainLayout/MainLayout";
import LateralBar from "../../../components/LateralBar/LateralBar";
import Button from "../../../components/Button/Button";
import ChangeName from "../../../components/User/Update/ChangeName/changeName";
import ChangePassword from "../../../components/User/Update/ChangePassword/changePassword";
import DeleteAccount from "../../../components/User/Update/DeleteAccount/deleteAccount";

function account() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <MainLayout
      leftContent={<LateralBar />}
      rightContent={
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.header__top}></div>
            <div className={styles.header__bottom}></div>
            <div className={styles.header__photo}></div>
          </div>
          <div className={styles.info}>
            <h1 className={styles.info__name}>
              {localStorage.getItem("userName")}
            </h1>
            <div className={styles.info__data}>
              <div className={styles.data__items}>
                <div className={styles.data__item}>
                  <h3 className={styles.item__title}>No identificacion</h3>
                  <p className={styles.item__text}>
                    {localStorage.getItem("userId")}
                  </p>
                </div>
                <div className={styles.data__item}>
                  <h3 className={styles.item__title}>Correo</h3>
                  <p className={styles.item__text}>
                    {localStorage.getItem("userEmail")}
                  </p>
                </div>
              </div>
              <div className={styles.data__update}>
                <ChangeName></ChangeName>
                <ChangePassword></ChangePassword>
                <DeleteAccount></DeleteAccount>
              </div>
            </div>
            <div className={styles.btnContainer}>
              <Button
                text="Cerrar sesion"
                className={styles.btn}
                onClick={handleLogout}
              />
            </div>
          </div>
        </div>
      }
    />
  );
}

export default account;