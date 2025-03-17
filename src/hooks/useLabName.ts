import { useEffect } from "react";
import { getLabName } from "../services/labService";

const useLabName = (labId: string) => {
  let labName = "";

  useEffect(() => {
    const fetchLabName = async () => {
      try {
        const data = await getLabName(labId);
        labName = data.data!;
      } catch (error) {
        alert("Error obteniendo el nombre del laboratorio");
      }
    };

    fetchLabName();
  }, []);

  return labName;
};

export { useLabName };
