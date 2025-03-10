import { useState } from "react";
import Modal from "../Modal/Modal";
import Button from "../../../Button/Button";
import Button2 from "../Button2/Button2";

function DeleteAccount() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button text="Borrar Cuenta" onClick={() => setIsOpen(true)} className="btn-delete" />
      <Modal title="Borrar Cuenta" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>¿Está seguro de querer borrar su cuenta?</p>
        <Button2 
          text1="Cancelar" 
          text2="Borrar Cuenta" 
          onCancel={() => setIsOpen(false)} 
        />
      </Modal>
    </>
  );
}

export default DeleteAccount;
