import { useEffect, useState } from "react";
import { createReservation } from "../services/reservationService";
import { validateReservationForm } from "../components/Reservations/validateReservationForm";
import { Lab } from "./useLabs";

interface FormState {
  selectedLab: string;
  selectedDate: Date | null;
  selectedTime: Date | null;
  selectedDuration: number;
  purpose: string;
  selectedPriority: number;
}

const initialFormState: FormState = {
  selectedLab: "",
  selectedDate: null,
  selectedTime: null,
  selectedDuration: 30,
  purpose: "",
  selectedPriority: 1,
};

type Props = {
  readonly labs: Lab[];
};

function useReservationForm({ labs }: Props) {
  const [form, setForm] = useState<FormState>(initialFormState);

  // Si labs cambia y aún no hay un lab seleccionado, se deja por defecto el primero.
  useEffect(() => {
    if (labs.length > 0 && form.selectedLab === "") {
      setForm((prev) => ({ ...prev, selectedLab: labs[0].id }));
    }
  }, [labs, form.selectedLab]);

  const formatDateAndTime = () => {
    const dateStr = form.selectedDate!.toISOString().split("T")[0];
    const startTime = form.selectedTime!.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const endDate = new Date(form.selectedTime!);
    endDate.setMinutes(endDate.getMinutes() + form.selectedDuration);
    const endTime = endDate.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return { dateStr, startTime, endTime };
  };

  const handleSubmit = async () => {
    const errorMessage = validateReservationForm(form);
    if (errorMessage) {
      alert(errorMessage);
      return;
    }

    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("No se encontró el usuario");
      return;
    }

    const { dateStr, startTime, endTime } = formatDateAndTime();
    const reservationData = {
      userId,
      labId: form.selectedLab,
      date: dateStr,
      startTime,
      endTime,
      purpose: form.purpose,
      priority: form.selectedPriority,
    };

    try {
      await createReservation(reservationData);
      alert("Reserva creada con éxito");
      setForm((prev) => ({
        ...initialFormState,
        selectedLab: prev.selectedLab,
      }));
    } catch (error: any) {
      alert(error.message);
    }
  };

  return { form, setForm, handleSubmit };
}

export { useReservationForm };
export type { FormState };
