import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const topPagesData = [
  { name: '/home', views: 4000 },
  { name: '/products', views: 3000 },
  { name: '/pricing', views: 2000 },
  { name: '/about', views: 2780 },
  { name: '/blog', views: 1890 },
];

const tableData = [
  { path: '/dashboard', views: '45,231', unique: '12,453', time: '04:12', bounce: '23%' },
  { path: '/products/analytics', views: '32,109', unique: '8,901', time: '03:45', bounce: '31%' },
  { path: '/pricing', views: '28,456', unique: '10,234', time: '02:18', bounce: '45%' },
  { path: '/blog/new-features', views: '15,890', unique: '14,102', time: '05:30', bounce: '68%' },
  { path: '/docs/getting-started', views: '12,304', unique: '5,600', time: '06:15', bounce: '15%' },
];

export function PerformanceTable() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="bg-card border-white/5 glass-panel">
        <CardHeader>
          <CardTitle>Top Pages by Views</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={topPagesData} layout="vertical" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" horizontal={false} />
              <XAxis type="number" stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} hide />
              <YAxis dataKey="name" type="category" stroke="#ffffff80" fontSize={12} tickLine={false} axisLine={false} width={80} />
              <Tooltip 
                cursor={{ fill: '#ffffff05' }}
                contentStyle={{ backgroundColor: '#141416', border: '1px solid #ffffff10', borderRadius: '8px' }} 
              />
              <Bar dataKey="views" fill="#a8d946" radius={[0, 4, 4, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="col-span-1 lg:col-span-2 bg-card border-white/5 glass-panel">
        <CardHeader>
          <CardTitle>Content Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border border-white/10 overflow-hidden">
            <Table>
              <TableHeader className="bg-white/5">
                <TableRow className="border-white/10 hover:bg-transparent">
                  <TableHead className="text-zinc-300">Page Path</TableHead>
                  <TableHead className="text-right text-zinc-300">Views</TableHead>
                  <TableHead className="text-right text-zinc-300">Unique</TableHead>
                  <TableHead className="text-right text-zinc-300">Avg Time</TableHead>
                  <TableHead className="text-right text-zinc-300">Bounce</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow key={row.path} className="border-white/5 hover:bg-white/5 transition-colors">
                    <TableCell className="font-medium text-white">{row.path}</TableCell>
                    <TableCell className="text-right text-zinc-400">{row.views}</TableCell>
                    <TableCell className="text-right text-zinc-400">{row.unique}</TableCell>
                    <TableCell className="text-right text-zinc-400">{row.time}</TableCell>
                    <TableCell className="text-right text-zinc-400">{row.bounce}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
