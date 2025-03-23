import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

type MostDemandedLabsChartProps = {
  data: { lab: string; value: number }[];
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function MostDemandedLabsChart({
  data,
}: MostDemandedLabsChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="lab"
          cx="50%"
          cy="50%"
          outerRadius={100}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
