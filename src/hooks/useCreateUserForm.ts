import { useState, useEffect } from "react";
import {
  validateEmail,
  validateId,
  validateName,
  validatePassword,
} from "../utils/validateInput";

export type FormData = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export const useCreateUserForm = (
  initialValues: FormData = {
    id: "",
    name: "",
    email: "",
    password: "",
  }
) => {
  const [formData, setFormData] = useState<FormData>(initialValues);
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

  const setNewValue = (name: string, valid: boolean) => {
    setValidInput((prev) => ({ ...prev, [name]: valid }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "id") setNewValue(name, validateId(value));
    if (name === "name") setNewValue(name, validateName(value));
    if (name === "email") setNewValue(name, validateEmail(value));
    if (name === "password") setNewValue(name, validatePassword(value));
  };

  return {
    formData,
    validInput,
    canSubmitForm,
    handleChange,
    setFormData,
    setValidInput,
  };
};
