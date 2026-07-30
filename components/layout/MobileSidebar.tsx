"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
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
  PieChart,
} from "lucide-react";

export const dashboardNavItems = [
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

interface MobileSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MobileSidebar({ open, onOpenChange }: MobileSidebarProps) {
  const pathname = usePathname() || "";

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="left"
        className="w-[280px] bg-card border-r border-border p-0"
      >
        <SheetHeader className="h-16 flex flex-row items-center px-6 border-b border-border">
          <SheetTitle className="flex items-center gap-2 text-brand-600 font-display font-bold text-xl">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white text-xs font-bold">
              FT
            </div>
            ForestTwin
          </SheetTitle>
        </SheetHeader>

        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto max-h-[calc(100dvh-64px)]">
          {dashboardNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => onOpenChange(false)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ease-out min-h-[44px]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2",
                  isActive
                    ? "bg-brand-50 dark:bg-brand-600/10 text-brand-600 font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                <Icon className="w-5 h-5 shrink-0" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
