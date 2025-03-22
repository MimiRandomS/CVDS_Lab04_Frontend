import { useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import AuthLogo from "../../components/AuthLogo/AuthLogo";
import AuthForm from "../../components/AuthForm/AuthForm";
import { signup } from "../../services/authService";
import CreateUserForm from "../../components/User/Update/CreateUserForm/CreateUserForm";
import { useCreateUserForm } from "../../hooks/useCreateUserForm";
import styles from "./Signup.module.css";

function Signup() {
  const navigate = useNavigate();
  const { formData, validInput, canSubmitForm, handleChange } =
    useCreateUserForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!canSubmitForm) {
      return alert("Campos incorrectos");
    }

    try {
      await signup(formData);
      alert("Usuario creado");
      navigate("/login");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <AuthLayout
      leftContent={<AuthLogo />}
      rightContent={
        <AuthForm type="signup" onSubmit={handleSubmit}>
          <CreateUserForm
            className={styles.inputs}
            formData={formData}
            validInput={validInput}
            handleChange={handleChange}
          />
        </AuthForm>
      }
    />
  );
}

export default Signup;
