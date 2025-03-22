import { useEffect, useState } from "react";
import { getLab, getLabs } from "../services/labService";
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

const useLab = (labId: string) => {
  const [lab, setLab] = useState<Lab | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchLab = async () => {
      try {
        const data = await getLab(labId);
        setLab(data.data!);
      } catch (error) {
        alert("Error obteniendo los laboratorios");
      } finally {
        setIsLoading(false);
      }
    };

    fetchLab();
  }, [labId]);

  return { lab, isLoading };
};

export { useLabs, useLab };
