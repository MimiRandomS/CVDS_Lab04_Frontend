import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type ReservationsByLabChartProps = {
  data: { lab: string; count: number }[];
};

export default function ReservationsByLabChart({
  data,
}: ReservationsByLabChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="lab" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="count" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
