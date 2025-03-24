import { useCreateUserForm } from "../../../hooks/useCreateUserForm";
import CreateUserForm from "../../../components/User/Update/CreateUserForm/CreateUserForm";
import MainLayout from "../../../layouts/MainLayout/MainLayout";
import LateralBar from "../../../components/LateralBar/LateralBar";
import styles from "./CreateUser.module.css";
import Button from "../../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../../services/userService";

function CreateUser() {
  const navigate = useNavigate();
  const { formData, validInput, canSubmitForm, handleChange } =
    useCreateUserForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!canSubmitForm) {
      return alert("Campos incorrectos");
    }

    try {
      await createUser(formData);
      alert("Usuario creado");
      navigate("/users");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <MainLayout
      leftContent={<LateralBar />}
      rightContent={
        <div className={styles.container}>
          <Link to="/users">
            <FontAwesomeIcon icon="arrow-left" className={styles.icon} />
          </Link>

          <h1 className={styles.title}>Crear usuario</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <CreateUserForm
              className={styles["form__inputs"]}
              formData={formData}
              validInput={validInput}
              handleChange={handleChange}
            />
            <Button text="Crear usuario" className={styles["form__btn"]} />
          </form>
        </div>
      }
    />
  );
}

export default CreateUser;
