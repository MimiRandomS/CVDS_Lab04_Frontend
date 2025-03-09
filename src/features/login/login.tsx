import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import AuthLogo from "../../components/AuthLogo/AuthLogo";
import AuthForm from "../../components/AuthForm/AuthForm";
import InputField from "../../components/InputField/InputField";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { login } from "../../services/authService";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(formData);
      navigate("/reservations");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <AuthLayout
      leftContent={
        <AuthForm type="login" onSubmit={handleSubmit}>
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
      rightContent={<AuthLogo />}
    />
  );
}

export default Login;
