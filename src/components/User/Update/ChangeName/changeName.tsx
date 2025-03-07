import { useState } from "react";
import Modal from "../Modal/Modal";
import Button from "../../../Button/Button";
import InputField from "../../../InputField/InputField";
import Button2 from "../Button2/Button2";

function ChangeName() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button text="Cambiar Nombre" onClick={() => setIsOpen(true)} />
      <Modal title="Cambiar Nombre" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <InputField type="text" text="Nuevo nombre..." />
        <Button2 
          text1="Cancelar" 
          text2="Guardar" 
          onCancel={() => setIsOpen(false)} 
        />
      </Modal>
    </>
  );
}

export default ChangeName;
