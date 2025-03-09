import { useState } from "react";
import Modal from "../Modal/Modal";
import Button from "../../../Button/Button";
import InputField from "../../../InputField/InputField";
import Button2 from "../Button2/Button2";

function ChangePassword() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button text="Cambiar Contraseña" onClick={() => setIsOpen(true)} />
      <Modal title="Cambiar Contraseña" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <InputField type="password" text="Nueva contraseña..." />
        <InputField type="password" text="Confirmar contraseña..." />
        <Button2 
          text1="Cancelar" 
          text2="Guardar" 
          onCancel={() => setIsOpen(false)} 
        />
      </Modal>
    </>
  );
}

export default ChangePassword;
