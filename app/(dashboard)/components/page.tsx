"use client";
import { useState } from "react";
import { toast } from "sonner";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/sonner";
import { Toaster as RadixToaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Card, 
  CardContent, 
  CardDescription,
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { StatusBadge } from "@/components/ui/status-badge";
import { CopyButton } from "@/components/ui/copy-button";
import { Rating } from "@/components/ui/rating";
import { Kbd } from "@/components/ui/kbd";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { 
  Info, 
  AlertCircle, 
  Bell, 
  Layers, 
  Command as CommandIcon, 
  Sparkles,
  Sliders,
  MessageSquare,
  Box,
  MousePointerClick
} from "lucide-react";

export default function ComponentsPage() {
  const [sliderVal, setSliderVal] = useState([72]);
  const [ratingVal, setRatingVal] = useState(4);
  const { toast: radixToast } = useToast();

  const categories = [
    { id: "buttons", label: "Buttons & CTAs", icon: MousePointerClick },
    { id: "inputs", label: "Inputs & Form Controls", icon: Sliders },
    { id: "overlays", label: "Radix Overlays & Dialogs", icon: Layers },
    { id: "menus", label: "Menus & Navigation", icon: CommandIcon },
    { id: "toasts", label: "Sonner & Radix Toasts", icon: Bell },
    { id: "display", label: "Data Display & Badges", icon: Box },
    { id: "feedback", label: "Feedback & Skeletons", icon: MessageSquare },
  ];

  return (
    <div className="p-6 md:p-12 font-body">
      <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div className="space-y-4 border-b border-white/10 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime/10 border border-lime/20 text-lime text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Design System Showcase
            </div>
            <h1 className="text-4xl font-display font-bold text-white tracking-tight">
              Component Inventory
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl">
              Complete catalog of Radix UI primitives, Sonner toasts, custom buttons, and extended controls tailored for the Lime theme.
            </p>
          </div>

          {/* 1. Buttons & CTAs */}
          <section id="buttons" className="space-y-6 scroll-mt-20">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h2 className="text-2xl font-display font-semibold text-white">1. Buttons & CTAs</h2>
              <Badge className="bg-lime/10 text-lime border-lime/20">8 Variants</Badge>
            </div>
            <Card className="glass-panel border-white/10 bg-card">
              <CardHeader>
                <CardTitle>Button System Hierarchy</CardTitle>
                <CardDescription>Primary, glass, edge-glow, pill CTAs, and functional button states.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4 items-center">
                <Button className="bg-lime text-black font-bold hover:bg-lime/90 rounded-xl">
                  Primary Lime
                </Button>
                <Button variant="glass">
                  Glass Panel
                </Button>
                <Button variant="edgeGlow">
                  Edge Glow
                </Button>
                <Button variant="lime">
                  Pill CTA ✦
                </Button>
                <Button variant="secondary">
                  Secondary
                </Button>
                <Button variant="outline">
                  Outline
                </Button>
                <Button variant="ghost">
                  Ghost
                </Button>
                <Button variant="destructive">
                  Destructive
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* 2. Inputs & Form Controls */}
          <section id="inputs" className="space-y-6 scroll-mt-20">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h2 className="text-2xl font-display font-semibold text-white">2. Inputs & Form Controls</h2>
              <Badge variant="outline" className="text-zinc-400">Radix Primitives</Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass-panel border-white/10 bg-card">
                <CardHeader>
                  <CardTitle>Text Inputs & Labels</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="demo-email">Email Address</Label>
                    <Input id="demo-email" placeholder="alex@techtide.io" className="bg-elevated border-white/10 text-white focus-visible:ring-lime" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="demo-code">Verification Code</Label>
                    <div className="flex gap-2">
                      <Input id="demo-code" placeholder="SEC-9402" className="bg-elevated border-white/10 text-white font-mono" />
                      <CopyButton value="SEC-9402" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-panel border-white/10 bg-card">
                <CardHeader>
                  <CardTitle>Radix Select & Sliders</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Preferred Stack</Label>
                    <Select defaultValue="react">
                      <SelectTrigger className="bg-elevated border-white/10 text-white focus:ring-lime">
                        <SelectValue placeholder="Select stack" />
                      </SelectTrigger>
                      <SelectContent className="bg-surface border-white/10 text-white">
                        <SelectItem value="react">React 18 + Vite</SelectItem>
                        <SelectItem value="next">Next.js App Router</SelectItem>
                        <SelectItem value="three">Three.js / WebGL</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <Label>Intensity Level</Label>
                      <span className="text-lime font-mono">{sliderVal}%</span>
                    </div>
                    <Slider value={sliderVal} onValueChange={setSliderVal} max={100} step={1} className="[&_[role=slider]]:bg-lime [&_.bg-primary]:bg-lime" />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-panel border-white/10 bg-card">
                <CardHeader>
                  <CardTitle>Switches & Checkboxes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="sw-1" className="cursor-pointer">Enable Real-Time Telemetry</Label>
                    <Switch id="sw-1" defaultChecked className="data-[state=checked]:bg-lime" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox id="chk-1" defaultChecked className="border-white/20 data-[state=checked]:bg-lime data-[state=checked]:text-black" />
                    <Label htmlFor="chk-1" className="cursor-pointer">Auto-Deploy to Staging Environment</Label>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-panel border-white/10 bg-card">
                <CardHeader>
                  <CardTitle>Extended Rating & Badges</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>User Rating Component</Label>
                    <Rating value={ratingVal} onChange={setRatingVal} className="text-lime" />
                  </div>
                  <div className="flex items-center gap-3">
                    <StatusBadge status="online">Cluster Active</StatusBadge>
                    <StatusBadge status="busy">High Load</StatusBadge>
                    <StatusBadge status="offline">Maintenance</StatusBadge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 3. Radix Overlays & Dialogs */}
          <section id="overlays" className="space-y-6 scroll-mt-20">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h2 className="text-2xl font-display font-semibold text-white">3. Radix Overlays & Dialogs</h2>
              <Badge className="bg-lime/10 text-lime border-lime/20">Modal / Sheet / Drawer</Badge>
            </div>
            <Card className="glass-panel border-white/10 bg-card">
              <CardHeader>
                <CardTitle>Interactive Modals & Drawers</CardTitle>
                <CardDescription>Test Radix Portal overlays with focus trap and backdrop blur.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                {/* Dialog */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      Open Radix Dialog
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-surface border-white/10 text-white">
                    <DialogHeader>
                      <DialogTitle className="text-white">Radix Dialog Overlay</DialogTitle>
                      <DialogDescription className="text-zinc-400">
                        This is a fully accessible Radix UI dialog modal with keyboard focus trap.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <Label htmlFor="proj-name">Project Name</Label>
                      <Input id="proj-name" defaultValue="UXUITemplate3" className="bg-elevated border-white/10 text-white focus:ring-lime" />
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Sheet */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      Open Slide Sheet
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="bg-surface border-white/10 text-white">
                    <SheetHeader>
                      <SheetTitle className="text-white">Slide-Over Sheet</SheetTitle>
                      <SheetDescription className="text-zinc-400">
                        Radix sheet overlay for detail drawers and inspection panels.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="py-6 space-y-4">
                      <p className="text-sm text-zinc-300">Inspect system parameters, logs, and configuration state in real time.</p>
                      <div className="p-4 rounded-xl bg-elevated border border-white/10 font-mono text-xs text-lime">
                        STATUS: OPERATIONAL 100%
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Drawer */}
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      Open Bottom Drawer
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent className="bg-surface border-white/10 text-white p-6">
                    <DrawerHeader>
                      <DrawerTitle className="text-white">Bottom Drawer Panel</DrawerTitle>
                      <DrawerDescription className="text-zinc-400">
                        Mobile-friendly drawer panel powered by Vaul / Radix primitives.
                      </DrawerDescription>
                    </DrawerHeader>
                  </DrawerContent>
                </Drawer>

                {/* Popover */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      Open Popover
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="bg-surface border-white/10 text-white w-64 p-4">
                    <h4 className="font-bold mb-2">Popover Content</h4>
                    <p className="text-xs text-zinc-400">Floating popover panel anchored to trigger target.</p>
                  </PopoverContent>
                </Popover>

                {/* Tooltip */}
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" className="text-lime hover:bg-lime/10">
                        Hover for Tooltip
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="bg-lime text-black font-bold">
                      Radix Tooltip Active ✦
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardContent>
            </Card>
          </section>

          {/* 4. Menus & Navigation */}
          <section id="menus" className="space-y-6 scroll-mt-20">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h2 className="text-2xl font-display font-semibold text-white">4. Menus & Navigation</h2>
              <Badge variant="outline" className="text-zinc-400">Dropdown / Keyboard Shortcuts</Badge>
            </div>
            <Card className="glass-panel border-white/10 bg-card">
              <CardHeader>
                <CardTitle>Dropdown Menus & Keyboard Badges</CardTitle>
                <CardDescription>Structured menus with shortcuts (<Kbd>⌘K</Kbd>) and theme highlights.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-6 items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="glass">
                      Open Dropdown Menu
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-surface border-white/10 text-white w-56">
                    <DropdownMenuLabel className="text-zinc-400 text-xs">Quick Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-white/10" />
                    <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                      <span>New Document</span>
                      <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                      <span>Command Palette</span>
                      <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-white/10" />
                    <DropdownMenuItem className="text-red-400 hover:bg-red-500/10 cursor-pointer">
                      <span>Delete Workspace</span>
                      <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-zinc-400">Shortcuts:</span>
                  <Kbd>⌘</Kbd>
                  <Kbd>K</Kbd>
                  <Kbd>Shift</Kbd>
                  <Kbd>P</Kbd>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 5. Sonner & Radix Toasts */}
          <section id="toasts" className="space-y-6 scroll-mt-20">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h2 className="text-2xl font-display font-semibold text-white">5. Sonner & Radix Toasts</h2>
              <Badge className="bg-lime/10 text-lime border-lime/20">Live Triggers</Badge>
            </div>
            <Card className="glass-panel border-white/10 bg-card">
              <CardHeader>
                <CardTitle>Toast Notification Suite</CardTitle>
                <CardDescription>Trigger both Sonner stack toasts and Radix viewport toasts with theme colors.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                {/* Sonner Triggers */}
                <Button 
                  className="bg-lime text-black font-bold hover:bg-lime/90"
                  onClick={() => toast.success("Deployment Successful!", { description: "Cluster updated to build #9402." })}
                >
                  Sonner Success
                </Button>
                <Button 
                  variant="secondary"
                  onClick={() => toast.error("Connection Failed", { description: "API rate limit exceeded. Retry in 60s." })}
                >
                  Sonner Error
                </Button>
                <Button 
                  variant="outline" className="border-white/20 text-white"
                  onClick={() => toast.info("New Feature Available", { description: "Check out the ThreeD 3D showcase page." })}
                >
                  Sonner Info
                </Button>

                {/* Radix Toast Trigger */}
                <Button 
                  variant="glass"
                  onClick={() => radixToast({ title: "Radix Toast Fired ✦", description: "Triggered from useToast state hook." })}
                >
                  Radix Toast Trigger
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* 6. Data Display & Badges */}
          <section id="display" className="space-y-6 scroll-mt-20">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h2 className="text-2xl font-display font-semibold text-white">6. Data Display & Badges</h2>
              <Badge variant="outline" className="text-zinc-400">Avatars / Badges / Timeline</Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass-panel border-white/10 bg-card">
                <CardHeader>
                  <CardTitle>Badges & Avatars</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-lime text-black font-bold">Lime Accent</Badge>
                    <Badge variant="secondary" className="bg-white/10 text-white">Secondary</Badge>
                    <Badge variant="outline" className="border-white/20 text-white">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                  </div>
                  <div className="flex items-center gap-4">
                    <Avatar className="border-2 border-lime w-12 h-12">
                      <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" />
                      <AvatarFallback className="bg-lime text-black font-bold">AC</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-white text-sm">Alex Cinovoj</h4>
                      <p className="text-xs text-zinc-400">Lead Systems Engineer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-panel border-white/10 bg-card">
                <CardHeader>
                  <CardTitle>Timeline Component</CardTitle>
                </CardHeader>
                <CardContent>
                  <Timeline>
                    <TimelineItem title="Repo Created" timestamp="Jul 27" description="Vite + TS + Tailwind setup" status="success" />
                    <TimelineItem title="68 UI Primitives" timestamp="Jul 27" description="Copied & themed to Lime #a8d946" status="success" />
                    <TimelineItem title="Vite Production Build" timestamp="Jul 27" description="TSC clean, Dist verified" status="info" />
                  </Timeline>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 7. Feedback & Skeletons */}
          <section id="feedback" className="space-y-6 scroll-mt-20">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h2 className="text-2xl font-display font-semibold text-white">7. Feedback & Skeletons</h2>
              <Badge variant="outline" className="text-zinc-400">Alerts / Progress</Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass-panel border-white/10 bg-card">
                <CardHeader>
                  <CardTitle>Alert Notifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert className="bg-surface border-lime/30 text-white">
                    <Info className="h-4 w-4 text-lime" />
                    <AlertTitle className="text-white font-bold">System Status</AlertTitle>
                    <AlertDescription className="text-zinc-400">
                      All cluster nodes operating at peak efficiency.
                    </AlertDescription>
                  </Alert>
                  
                  <Alert variant="destructive" className="bg-red-500/10 border-red-500/20 text-red-400">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Critical Alert</AlertTitle>
                    <AlertDescription className="text-red-300">
                      High memory utilization detected on node EU-WEST-1.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Card className="glass-panel border-white/10 bg-card">
                <CardHeader>
                  <CardTitle>Progress & Loading Skeletons</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-zinc-400">
                      <span>Sync Progress</span>
                      <span className="text-lime font-mono">84%</span>
                    </div>
                    <Progress value={84} className="h-2 bg-white/10 [&>div]:bg-lime" />
                  </div>

                  <div className="flex items-center space-x-4 pt-2">
                    <Skeleton className="h-12 w-12 rounded-full bg-white/10" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-4 w-full bg-white/10" />
                      <Skeleton className="h-4 w-2/3 bg-white/10" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

        </div>
    </div>
  );
}
