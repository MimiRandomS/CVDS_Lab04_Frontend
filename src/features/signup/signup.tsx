import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import AuthLogo from "../../components/AuthLogo/AuthLogo";
import AuthForm from "../../components/AuthForm/AuthForm";
import InputField from "../../components/InputField/InputField";
import { signup } from "../../services/authService";
import InputError from "../../components/InputError/InputError";
import {
  validateEmail,
  validateId,
  validateName,
  validatePassword,
} from "./validateInput";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
  });
  const [validInput, setValidInput] = useState({
    id: true,
    name: true,
    email: true,
    password: true,
  });
  const [canSubmitForm, setCanSubmitForm] = useState(false);

  useEffect(() => {
    setCanSubmitForm(Object.values(validInput).every((value) => value));
  }, [validInput]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "id") setNewValue(name, validateId(value));
    if (name === "name") setNewValue(name, validateName(value));
    if (name === "email") setNewValue(name, validateEmail(value));
    if (name === "password") setNewValue(name, validatePassword(value));
  };

  const setNewValue = (name: string, valid: boolean) => {
    setValidInput((prev) => ({ ...prev, [name]: valid }));
  };

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
          <div>
            <InputField
              type="number"
              text="Numero de identidad"
              name="id"
              value={formData.id}
              error={formData.id !== "" && !validInput.id}
              onChange={handleChange}
            />
            {formData.id !== "" && !validInput.id && (
              <InputError text="El numero de identidad debe tener 10 digitos" />
            )}
          </div>
          <div>
            <InputField
              type="text"
              text="Nombre"
              name="name"
              value={formData.name}
              error={formData.name !== "" && !validInput.name}
              onChange={handleChange}
            />
            {formData.name !== "" && !validInput.name && (
              <InputError text="El nombre solo debe contener caracteres" />
            )}
          </div>
          <div>
            <InputField
              type="text"
              text="Correo"
              name="email"
              value={formData.email}
              error={formData.email !== "" && !validInput.email}
              onChange={handleChange}
            />
            {formData.email !== "" && !validInput.email && (
              <InputError text="El correo debe tener un dominio valido" />
            )}
          </div>
          <div>
            <InputField
              type="password"
              text="Contraseña"
              name="password"
              value={formData.password}
              error={formData.password !== "" && !validInput.password}
              onChange={handleChange}
            />
            {formData.password !== "" && !validInput.password && (
              <InputError
                text="La contraseña debe contener al menos: una mayuscula, un digito,
                un caracter especial y 8 caracteres"
              />
            )}
          </div>
        </AuthForm>
      }
    />
  );
}

export default Signup;
