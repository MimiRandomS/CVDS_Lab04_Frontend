import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import AuthLogo from "../../components/AuthLogo/AuthLogo";
import AuthForm from "../../components/AuthForm/AuthForm";
import InputField from "../../components/InputField/InputField";
import { signup } from "../../services/authService";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(formData);
      navigate("/reservations");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <AuthLayout
      leftContent={<AuthLogo />}
      rightContent={
        <AuthForm type="signup" onSubmit={handleSubmit}>
          <InputField
            type="number"
            text="Numero de identidad"
            name="id"
            value={formData.id}
            onChange={handleChange}
          />
          <InputField
            type="text"
            text="Nombre"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <InputField
            type="text"
            text="Correo"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            type="password"
            text="Contraseña"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </AuthForm>
      }
    />
  );
}

export default Signup;
