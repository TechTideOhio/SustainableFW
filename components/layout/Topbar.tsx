"use client";
import { Search, Bell, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TopbarProps {
  onMenuToggle?: () => void;
}

export function Topbar({ onMenuToggle }: TopbarProps) {
  return (
    <header className="h-16 flex items-center justify-between px-4 md:px-8 border-b border-border bg-card/50 backdrop-blur shrink-0">
      {/* Left: hamburger + search */}
      <div className="flex items-center gap-3 flex-1 max-w-md">
        {/* Hamburger - mobile only */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-muted-foreground hover:text-foreground min-w-[44px] min-h-[44px]"
          onClick={onMenuToggle}
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5" />
        </Button>

        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="pl-10 bg-muted border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-brand-600"
            aria-label="Search dashboard"
          />
        </div>
      </div>

      {/* Right: notifications + avatar */}
      <div className="flex items-center gap-2 md:gap-4 ml-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground min-w-[44px] min-h-[44px]"
          aria-label="Notifications"
        >
          <div className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-brand-600 rounded-full border-2 border-card"></span>
          </div>
        </Button>
        <Separator orientation="vertical" className="h-6 bg-border hidden md:block" />
        <div className="flex items-center gap-3">
          <Avatar className="border border-brand-600/50 h-8 w-8 md:h-10 md:w-10">
            <AvatarImage src="https://i.pravatar.cc/150?u=admin" />
            <AvatarFallback className="bg-brand-600 text-white font-bold text-xs md:text-sm">AD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
