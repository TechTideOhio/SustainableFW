"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { dashboardNavItems } from "./MobileSidebar";

export function AppSidebar() {
  const pathname = usePathname() || "";

  return (
    <aside className="w-64 border-r border-border bg-card hidden md:flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-border">
        <Link href="/" className="flex items-center gap-2 text-brand-600 font-display font-bold text-xl">
          <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white text-xs font-bold">
            FT
          </div>
          ForestTwin
        </Link>
      </div>

      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {dashboardNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.path);
          return (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 ease-out",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2",
                isActive
                  ? "bg-brand-50 dark:bg-brand-600/10 text-brand-600 font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
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
