import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const trafficData = [
  { date: 'Mon', visitors: 4000, pageViews: 6400 },
  { date: 'Tue', visitors: 3000, pageViews: 5398 },
  { date: 'Wed', visitors: 2000, pageViews: 9800 },
  { date: 'Thu', visitors: 2780, pageViews: 3908 },
  { date: 'Fri', visitors: 1890, pageViews: 4800 },
  { date: 'Sat', visitors: 2390, pageViews: 3800 },
  { date: 'Sun', visitors: 3490, pageViews: 4300 },
];

const sourceData = [
  { name: 'Direct', value: 400 },
  { name: 'Organic', value: 300 },
  { name: 'Social', value: 300 },
  { name: 'Referral', value: 200 },
  { name: 'Email', value: 100 },
];

const COLORS = ['#a8d946', '#d946ef', '#3b82f6', '#f59e0b', '#10b981'];

export function TrafficCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="col-span-1 lg:col-span-2 bg-card border-white/5 glass-panel">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Traffic Overview</CardTitle>
            <p className="text-sm text-zinc-400">Visitors vs Page Views over time</p>
          </div>
          <Badge variant="outline" className="border-lime text-lime bg-lime/10 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
            1,204 Active Now
          </Badge>
        </CardHeader>
        <CardContent className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trafficData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a8d946" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#a8d946" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#d946ef" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#d946ef" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
              <XAxis dataKey="date" stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `${val / 1000}k`} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#141416', border: '1px solid #ffffff10', borderRadius: '8px' }}
                itemStyle={{ color: '#fff' }}
              />
              <Area type="monotone" dataKey="pageViews" stroke="#a8d946" strokeWidth={2} fillOpacity={1} fill="url(#colorViews)" />
              <Area type="monotone" dataKey="visitors" stroke="#d946ef" strokeWidth={2} fillOpacity={1} fill="url(#colorVisitors)" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="bg-card border-white/5 glass-panel flex flex-col">
        <CardHeader>
          <CardTitle>Traffic Sources</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 min-h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={sourceData}
                cx="50%"
                cy="45%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {sourceData.map((__entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#141416', border: '1px solid #ffffff10', borderRadius: '8px' }} 
                itemStyle={{ color: '#fff' }}
              />
              <Legend verticalAlign="bottom" height={36} iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
