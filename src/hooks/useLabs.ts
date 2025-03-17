import { useEffect, useState } from "react";
import { getLabs } from "../services/labService";
import Lab from "../model/Lab";

const useLabs = () => {
  const [labs, setLabs] = useState<Lab[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLabs = async () => {
      try {
        const data = await getLabs();
        setLabs(data.data!);
      } catch (error) {
        alert("Error obteniendo los laboratorios");
      } finally {
        setIsLoading(false);
      }
    };

    fetchLabs();
  }, []);

  return { labs, isLoading };
};

export { useLabs };
