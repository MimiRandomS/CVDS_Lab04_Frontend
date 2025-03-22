import { useCreateUserForm } from "../../../hooks/useCreateUserForm";
import CreateUserForm from "../../../components/User/Update/CreateUserForm/CreateUserForm";
import MainLayout from "../../../layouts/MainLayout/MainLayout";
import LateralBar from "../../../components/LateralBar/LateralBar";
import styles from "./CreateUser.module.css";
import Button from "../../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function CreateUser() {
  const { formData, validInput, canSubmitForm, handleChange } =
    useCreateUserForm();

  return (
    <MainLayout
      leftContent={<LateralBar />}
      rightContent={
        <div className={styles.container}>
          <Link to="/users">
            <FontAwesomeIcon icon="arrow-left" className={styles.icon} />
          </Link>

          <h1 className={styles.title}>Crear usuario</h1>
          <div className={styles.form}>
            <CreateUserForm
              className={styles["form__inputs"]}
              formData={formData}
              validInput={validInput}
              handleChange={handleChange}
            />
            <Button text="Crear usuario" className={styles["form__btn"]} />
          </div>
        </div>
      }
    />
  );
}

export default CreateUser;
