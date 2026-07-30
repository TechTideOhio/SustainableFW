"use client";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Copy, 
  Trash2, 
  Upload, 
  Download, 
  CreditCard,
  Plus
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="p-4 md:p-8 font-body">
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-display font-bold">Settings</h1>
          <p className="text-zinc-400 mt-1">Manage your account settings and preferences.</p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="bg-surface border border-white/10 p-1 mb-8 overflow-x-auto flex w-full justify-start md:w-auto h-auto">
            <TabsTrigger value="profile" className="data-[state=active]:bg-white/10 data-[state=active]:text-lime rounded">Profile</TabsTrigger>
            <TabsTrigger value="account" className="data-[state=active]:bg-white/10 data-[state=active]:text-lime rounded">Account</TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-white/10 data-[state=active]:text-lime rounded">Notifications</TabsTrigger>
            <TabsTrigger value="billing" className="data-[state=active]:bg-white/10 data-[state=active]:text-lime rounded">Billing</TabsTrigger>
            <TabsTrigger value="api-keys" className="data-[state=active]:bg-white/10 data-[state=active]:text-lime rounded">API s</TabsTrigger>
            <TabsTrigger value="team" className="data-[state=active]:bg-white/10 data-[state=active]:text-lime rounded">Team</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6 focus-visible:outline-none">
            <Card className="bg-card border-white/10">
              <CardHeader>
                <CardTitle>Profile Profile</CardTitle>
                <CardDescription className="text-zinc-400">
                  Update your public profile information.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="w-24 h-24 border border-white/10">
                    <AvatarImage src="https://i.pravatar.cc/150?u=admin" />
                    <AvatarFallback className="bg-surface text-xl">AD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload new picture
                    </Button>
                    <p className="text-xs text-zinc-500">JPG, GIF or PNG. Max size of 2MB.</p>
                  </div>
                </div>
                
                <Separator className="bg-white/10" />
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" defaultValue="Admin" className="bg-elevated border-white/10 text-white focus-visible:ring-lime" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" defaultValue="User" className="bg-elevated border-white/10 text-white focus-visible:ring-lime" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="admin@example.com" className="bg-elevated border-white/10 text-white focus-visible:ring-lime" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="bio">Bio</Label>
                    <textarea 
                      id="bio"
                      className="flex min-h-[100px] w-full rounded-md border border-white/10 bg-elevated px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-app"
                      defaultValue="Lead UI/UX Designer and Developer."
                    />
                    <p className="text-xs text-zinc-500">Brief description for your profile.</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-white/10 px-6 py-4">
                <Button className="bg-lime text-app hover:bg-lime/90 font-medium ml-auto">Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Account Tab */}
          <TabsContent value="account" className="space-y-6 focus-visible:outline-none">
            <Card className="bg-card border-white/10">
              <CardHeader>
                <CardTitle>Security</CardTitle>
                <CardDescription className="text-zinc-400">Update your password and secure your account.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" className="bg-elevated border-white/10 text-white focus-visible:ring-lime" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" className="bg-elevated border-white/10 text-white focus-visible:ring-lime" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" type="password" className="bg-elevated border-white/10 text-white focus-visible:ring-lime" />
                </div>
              </CardContent>
              <CardFooter className="border-t border-white/10 px-6 py-4">
                <Button className="bg-lime text-app hover:bg-lime/90 font-medium">Update Password</Button>
              </CardFooter>
            </Card>

            <Card className="bg-card border-white/10">
              <CardHeader>
                <CardTitle>Two-Factor Authentication</CardTitle>
                <CardDescription className="text-zinc-400">Add an extra layer of security to your account.</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Enable 2FA</Label>
                  <p className="text-sm text-zinc-400">Require an extra code from your authenticator app when logging in.</p>
                </div>
                <Switch id="2fa-toggle" className="data-[state=checked]:bg-lime" />
              </CardContent>
            </Card>

            <Card className="bg-card border-red-500/20">
              <CardHeader>
                <CardTitle className="text-red-500">Danger Zone</CardTitle>
                <CardDescription className="text-zinc-400">Irreversible and destructive actions.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-300 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                <Button variant="destructive" className="bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white border border-red-500/20">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Account
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6 focus-visible:outline-none">
            <Card className="bg-card border-white/10">
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription className="text-zinc-400">Choose what you want to be notified about.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Email Notifications</Label>
                    <p className="text-sm text-zinc-400">Receive emails about your account activity.</p>
                  </div>
                  <Switch id="email-notifs" defaultChecked className="data-[state=checked]:bg-lime" />
                </div>
                <Separator className="bg-white/10" />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Push Notifications</Label>
                    <p className="text-sm text-zinc-400">Receive push notifications on your devices.</p>
                  </div>
                  <Switch id="push-notifs" defaultChecked className="data-[state=checked]:bg-lime" />
                </div>
                <Separator className="bg-white/10" />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Marketing Emails</Label>
                    <p className="text-sm text-zinc-400">Receive emails about new products, features, and more.</p>
                  </div>
                  <Switch id="marketing-notifs" className="data-[state=checked]:bg-lime" />
                </div>
                <Separator className="bg-white/10" />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Security Alerts</Label>
                    <p className="text-sm text-zinc-400">Get notified about important security updates.</p>
                  </div>
                  <Switch id="security-notifs" defaultChecked disabled className="data-[state=checked]:bg-lime opacity-50 cursor-not-allowed" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Billing Tab */}
          <TabsContent value="billing" className="space-y-6 focus-visible:outline-none">
            <Card className="bg-card border-white/10 lime-edge">
              <CardHeader>
                <CardTitle>Current Plan</CardTitle>
                <CardDescription className="text-zinc-400">You are currently on the Pro plan.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-bold font-display">$29<span className="text-sm font-normal text-zinc-400">/month</span></div>
                  <Badge className="bg-lime/10 text-lime border-lime/20 hover:bg-lime/20">Pro Active</Badge>
                </div>
                <div className="space-y-2 text-sm text-zinc-300">
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-lime" /> Up to 10 team members</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-lime" /> Advanced analytics</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-lime" /> Priority support</div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-white/10 px-6 py-4 flex justify-between">
                <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">Cancel Plan</Button>
                <Button className="bg-lime text-app hover:bg-lime/90 font-medium">Upgrade Plan</Button>
              </CardFooter>
            </Card>

            <Card className="bg-card border-white/10">
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription className="text-zinc-400">Manage your cards and billing info.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg bg-elevated">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-surface rounded">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Visa ending in 4242</p>
                      <p className="text-sm text-zinc-400">Expires 12/2028</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-lime hover:text-lime hover:bg-lime/10">Edit</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-white/10">
              <CardHeader>
                <CardTitle>Invoice History</CardTitle>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/10 hover:bg-transparent">
                      <TableHead className="text-zinc-400">Date</TableHead>
                      <TableHead className="text-zinc-400">Amount</TableHead>
                      <TableHead className="text-zinc-400">Status</TableHead>
                      <TableHead className="text-zinc-400 text-right">Invoice</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { date: "Oct 1, 2026", amount: "$29.00", status: "Paid" },
                      { date: "Sep 1, 2026", amount: "$29.00", status: "Paid" },
                      { date: "Aug 1, 2026", amount: "$29.00", status: "Paid" },
                    ].map((invoice, i) => (
                      <TableRow key={i} className="border-white/10 hover:bg-white/5">
                        <TableCell className="font-medium">{invoice.date}</TableCell>
                        <TableCell>{invoice.amount}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="border-lime/20 text-lime bg-lime/5">
                            {invoice.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white" aria-label="Download invoice">
                            <Download className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* API s Tab */}
          <TabsContent value="api-keys" className="space-y-6 focus-visible:outline-none">
            <Card className="bg-card border-white/10">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>API s</CardTitle>
                  <CardDescription className="text-zinc-400">Manage keys for authenticating with the API.</CardDescription>
                </div>
                <Button className="bg-lime text-app hover:bg-lime/90 font-medium">
                  <Plus className="w-4 h-4 mr-2" /> Create </Button>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/10 hover:bg-transparent">
                      <TableHead className="text-zinc-400">Name</TableHead>
                      <TableHead className="text-zinc-400"></TableHead>
                      <TableHead className="text-zinc-400">Created</TableHead>
                      <TableHead className="text-zinc-400 text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-white/10 hover:bg-white/5">
                      <TableCell className="font-medium">Production</TableCell>
                      <TableCell className="font-mono text-xs text-zinc-400">pk_live_*******************</TableCell>
                      <TableCell className="text-zinc-400">Oct 12, 2025</TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white" aria-label="Copy key">
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-red-400 hover:text-red-300 hover:bg-red-400/10" aria-label="Revoke key">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-white/10 hover:bg-white/5">
                      <TableCell className="font-medium">Development</TableCell>
                      <TableCell className="font-mono text-xs text-zinc-400">pk_test_*******************</TableCell>
                      <TableCell className="text-zinc-400">Jan 5, 2026</TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white" aria-label="Copy key">
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-red-400 hover:text-red-300 hover:bg-red-400/10" aria-label="Revoke key">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Team Tab */}
          <TabsContent value="team" className="space-y-6 focus-visible:outline-none">
            <Card className="bg-card border-white/10">
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription className="text-zinc-400">Manage who has access to this workspace.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input placeholder="Email address" className="bg-elevated border-white/10 text-white focus-visible:ring-lime max-w-sm" />
                  <Button className="bg-lime text-app hover:bg-lime/90 font-medium">Invite Member</Button>
                </div>
                
                <div className="rounded-md border border-white/10 overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-white/10 hover:bg-transparent">
                        <TableHead className="text-zinc-400">User</TableHead>
                        <TableHead className="text-zinc-400">Role</TableHead>
                        <TableHead className="text-zinc-400 text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="border-white/10 hover:bg-white/5">
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="bg-lime/20 text-lime text-xs">AD</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                              <span className="font-medium">Admin User</span>
                              <span className="text-xs text-zinc-500">admin@example.com</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-surface text-white border-white/10">Owner</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" disabled className="text-zinc-500">Remove</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-white/10 hover:bg-white/5">
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="bg-brand-fuchsia/20 text-brand-fuchsia text-xs">JD</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                              <span className="font-medium">John Doe</span>
                              <span className="text-xs text-zinc-500">john@example.com</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-zinc-300 border-white/10">Member</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 hover:bg-red-400/10">Remove</Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
