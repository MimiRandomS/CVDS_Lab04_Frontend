import { FormState } from "../../hooks/useReservationForm";

const validateReservationForm = (form: FormState): string | null => {
  if (!form.selectedDate) return "Por favor, selecciona una fecha";
  if (!form.selectedTime) return "Por favor, selecciona una hora de inicio";
  if (!form.selectedDuration) return "Por favor, selecciona la duración";
  if (form.purpose.trim() === "") return "Por favor, ingresa el propósito";
  if (!form.selectedPriority)
    return "Por favor, ingresa la prioridad de la reserva";
  return null;
};

export { validateReservationForm };
