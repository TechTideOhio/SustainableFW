"use client";
import { Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Topbar() {
  return (
    <header className="h-16 flex items-center justify-between px-4 md:px-8 border-b border-white/10 bg-surface/50 backdrop-blur shrink-0">
      <div className="flex items-center w-full max-w-md relative">
        <Search className="w-4 h-4 absolute left-3 text-zinc-500" />
        <Input
          placeholder="Search..."
          className="pl-10 bg-elevated border-white/5 text-white placeholder:text-zinc-500 focus-visible:ring-lime"
          aria-label="Search dashboard"
        />
      </div>

      <div className="flex items-center gap-2 md:gap-4 ml-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-zinc-400 hover:text-white hover:bg-white/10"
          aria-label="Notifications"
        >
          <div className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-lime rounded-full border-2 border-surface"></span>
          </div>
        </Button>
        <Separator orientation="vertical" className="h-6 bg-white/10 hidden md:block" />
        <div className="flex items-center gap-3">
          <Avatar className="border border-lime/50 h-8 w-8 md:h-10 md:w-10">
            <AvatarImage src="https://i.pravatar.cc/150?u=admin" />
            <AvatarFallback className="bg-lime text-app font-bold text-xs md:text-sm">AD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
