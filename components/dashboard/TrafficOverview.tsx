import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const chartData = [
  { name: "Mon", value: 4000 },
  { name: "Tue", value: 3000 },
  { name: "Wed", value: 2000 },
  { name: "Thu", value: 2780 },
  { name: "Fri", value: 1890 },
  { name: "Sat", value: 2390 },
  { name: "Sun", value: 3490 },
];

export function TrafficOverview() {
  return (
    <Card className="lg:col-span-2 bg-card border-white/10">
      <CardHeader>
        <CardTitle>Traffic Overview</CardTitle>
        <CardDescription className="text-zinc-400">Daily visitors for the last 7 days</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <XAxis 
                dataKey="name" 
                stroke="#71717a" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="#71717a" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value: number) => `${value}`}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#141416', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
                itemStyle={{ color: '#a8d946' }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#a8d946" 
                strokeWidth={3}
                dot={{ r: 4, fill: '#141416', stroke: '#a8d946', strokeWidth: 2 }}
                activeDot={{ r: 6, fill: '#a8d946' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
