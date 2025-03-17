interface Lab {
  id: string;
  name: string;
  capacity: number;
  reservations: string[];
  equipment: Record<string, number>;
}

export default Lab;
