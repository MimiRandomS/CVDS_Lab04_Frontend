import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type PriorityAverageChartProps = {
  data: { priority: string; avg: number }[];
};

export default function PriorityAverageChart({
  data,
}: PriorityAverageChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="priority" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="avg" fill="#ff7300" />
      </BarChart>
    </ResponsiveContainer>
  );
}
