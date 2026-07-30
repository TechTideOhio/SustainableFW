"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Settings,
  TreePine,
  Users,
  Box,
  Server,
  Activity,
  HelpCircle,
  BookOpen,
  Link as LinkIcon,
  PieChart
} from "lucide-react";

export function AppSidebar() {
  const pathname = usePathname() || "";

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/analytics", label: "Analytics", icon: PieChart },
    { path: "/forest-assets", label: "Forest Assets", icon: TreePine },
    { path: "/team", label: "Team", icon: Users },
    { path: "/carbon-ledger", label: "Carbon Ledger", icon: BookOpen },
    { path: "/integrations", label: "Integrations", icon: LinkIcon },
    { path: "/components", label: "Components", icon: Box },
    { path: "/systems", label: "Systems", icon: Server },
    { path: "/status", label: "Status", icon: Activity },
    { path: "/help", label: "Help", icon: HelpCircle },
    { path: "/settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside className="w-64 border-r border-white/10 bg-surface hidden md:flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-white/10">
        <Link href="/" className="flex items-center gap-2 text-lime font-display font-bold text-xl">
          <div className="w-8 h-8 rounded bg-lime flex items-center justify-center text-app">
            FT
          </div>
          ForestTwin
        </Link>
      </div>

      <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.path);
          return (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2.5 rounded-md transition-colors",
                isActive
                  ? "bg-lime/10 text-lime"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
