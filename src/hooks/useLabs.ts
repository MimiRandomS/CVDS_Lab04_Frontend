import { useEffect, useState } from "react";
import { getLabs } from "../services/labService";

interface Lab {
  id: string;
  name: string;
}

const useLabs = () => {
  const [labs, setLabs] = useState<Lab[]>([]);

  useEffect(() => {
    const fetchLabs = async () => {
      try {
        const data = await getLabs();
        setLabs(data);
      } catch (error) {
        alert("Error obteniendo los laboratorios");
      }
    };

    fetchLabs();
  }, []);

  return labs;
};

export { useLabs };
export type { Lab };
