import React from "react";
import InputField from "../../../InputField/InputField";
import InputError from "../../../InputError/InputError";

type Props = {
  formData: {
    id: string;
    name: string;
    email: string;
    password: string;
  };
  validInput: {
    id: boolean;
    name: boolean;
    email: boolean;
    password: boolean;
  };
  readonly className?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CreateUserForm = ({
  formData,
  validInput,
  className,
  handleChange,
}: Props) => {
  return (
    <div className={className}>
      <div>
        <InputField
          type="number"
          text="Número de identidad"
          name="id"
          value={formData.id}
          error={formData.id !== "" && !validInput.id}
          onChange={handleChange}
        />
        {formData.id !== "" && !validInput.id && (
          <InputError text="El número de identidad debe tener 10 dígitos" />
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
          <InputError text="El correo debe tener un dominio válido" />
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
          <InputError text="La contraseña debe contener al menos: una mayúscula, un dígito, un carácter especial y 8 caracteres" />
        )}
      </div>
    </div>
  );
};

export default CreateUserForm;
