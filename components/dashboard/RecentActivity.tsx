import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function RecentActivity() {
  const activities = [
    { title: "New project created", time: "2 hours ago", user: "Alice", role: "Design" },
    { title: "Deployment successful", time: "5 hours ago", user: "System", role: "Ops" },
    { title: "Database backup", time: "12 hours ago", user: "Bob", role: "Data" },
    { title: "Settings updated", time: "1 day ago", user: "You", role: "Admin" },
  ];

  return (
    <Card className="bg-card border-white/10">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription className="text-zinc-400">Latest actions from your team</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-lime mt-2" />
                {i !== activities.length - 1 && <div className="w-px h-full bg-white/10 mt-2" />}
              </div>
              <div className="pb-2">
                <p className="text-sm font-medium text-white">{activity.title}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-zinc-500">{activity.time}</span>
                  <span className="text-xs text-zinc-500">•</span>
                  <span className="text-xs text-zinc-400">{activity.user}</span>
                  <Badge variant="outline" className="text-[10px] px-1 py-0 h-4 border-white/10 bg-white/5 text-zinc-300">{activity.role}</Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/5">
            View all activity
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
