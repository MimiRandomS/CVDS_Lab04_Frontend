import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import AuthLogo from "../../components/AuthLogo/AuthLogo";
import AuthForm from "../../components/AuthForm/AuthForm";
import InputField from "../../components/InputField/InputField";

function Login() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <AuthLayout
      leftContent={
        <AuthForm type="login" onSubmit={handleSubmit}>
          <InputField type="text" text="Correo" />
          <InputField type="password" text="Contraseña" />
        </AuthForm>
      }
      rightContent={<AuthLogo />}
    />
  );
}

export default Login;
