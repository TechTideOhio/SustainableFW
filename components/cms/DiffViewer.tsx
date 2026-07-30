"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, Clock, RotateCcw, } from "lucide-react";

interface Revision {
  id: string;
  date: string;
  author: string;
  status: "published" | "draft" | "archived";
  content: string;
}

const mockRevisions: Revision[] = [
  {
    id: "rev-3",
    date: "2026-07-27 15:30",
    author: "Alice Smith",
    status: "published",
    content: "The quick brown fox jumps over the lazy dog.\n\nThis is the latest published version of the document.\nIt contains new features and bug fixes.\n\nEnjoy the update!",
  },
  {
    id: "rev-2",
    date: "2026-07-26 10:15",
    author: "Bob Jones",
    status: "archived",
    content: "The quick brown fox jumps over the lazy dog.\n\nThis is an older version of the document.\nIt contains some features.",
  },
  {
    id: "rev-1",
    date: "2026-07-25 09:00",
    author: "Alice Smith",
    status: "archived",
    content: "The quick brown fox jumps over the lazy dog.\n\nThis is the initial version of the document.",
  },
];

export interface DiffViewerProps {
  className?: string;
}

export function DiffViewer({ className }: DiffViewerProps) {
  const [selectedRevId, setSelectedRevId] = useState<string>(mockRevisions[0].id);
  const [compareMode, setCompareMode] = useState<"unified" | "split">("split");

  const selectedRevision = mockRevisions.find((r) => r.id === selectedRevId) || mockRevisions[0];
  const previousRevision = mockRevisions.find(
    (r) => mockRevisions.indexOf(r) === mockRevisions.indexOf(selectedRevision) + 1
  );

  const renderDiff = () => {
    if (!previousRevision) {
      return (
        <div className="p-4 text-white/70">
          <p>This is the initial version. No previous version to compare against.</p>
          <pre className="mt-4 p-4 bg-white/5 rounded-md text-white whitespace-pre-wrap font-mono text-sm">
            {selectedRevision.content}
          </pre>
        </div>
      );
    }

    const currentLines = selectedRevision.content.split("\n");
    const previousLines = previousRevision.content.split("\n");
    const maxLines = Math.max(currentLines.length, previousLines.length);

    if (compareMode === "split") {
      return (
        <div className="flex w-full divide-x divide-white/10 text-sm font-mono overflow-x-auto">
          <div className="w-1/2 flex flex-col min-w-[300px]">
            <div className="bg-white/5 p-2 border-b border-white/10 text-white/50 text-xs flex justify-between">
              <span>{previousRevision.id} (Previous)</span>
            </div>
            {Array.from({ length: maxLines }).map((_, i) => {
              const pLine = previousLines[i];
              const cLine = currentLines[i];
              let isRemoved = false;
              if (pLine !== undefined && pLine !== cLine && cLine !== undefined) isRemoved = true;
              else if (pLine !== undefined && cLine === undefined) isRemoved = true;

              return (
                <div key={`p-${i}`} className={cn("flex", isRemoved && "bg-red-500/10 text-red-400")}>
                  <div className="w-8 flex-shrink-0 text-right pr-2 text-white/30 select-none border-r border-white/10 bg-white/5">
                    {i + 1}
                  </div>
                  <div className="px-4 whitespace-pre-wrap flex-grow">{pLine || " "}</div>
                </div>
              );
            })}
          </div>
          <div className="w-1/2 flex flex-col min-w-[300px]">
            <div className="bg-white/5 p-2 border-b border-white/10 text-white/50 text-xs flex justify-between">
              <span>{selectedRevision.id} (Selected)</span>
            </div>
            {Array.from({ length: maxLines }).map((_, i) => {
              const pLine = previousLines[i];
              const cLine = currentLines[i];
              let isAdded = false;
              if (cLine !== undefined && pLine !== cLine && pLine !== undefined) isAdded = true;
              else if (cLine !== undefined && pLine === undefined) isAdded = true;

              return (
                <div key={`c-${i}`} className={cn("flex", isAdded && "bg-green-500/10 text-green-400")}>
                  <div className="w-8 flex-shrink-0 text-right pr-2 text-white/30 select-none border-r border-white/10 bg-white/5">
                    {i + 1}
                  </div>
                  <div className="px-4 whitespace-pre-wrap flex-grow">{cLine || " "}</div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    // Unified
    return (
      <div className="flex flex-col w-full text-sm font-mono overflow-x-auto">
        <div className="bg-white/5 p-2 border-b border-white/10 text-white/50 text-xs flex gap-4">
          <span>{previousRevision.id} vs {selectedRevision.id}</span>
        </div>
        {Array.from({ length: maxLines }).map((_, i) => {
          const pLine = previousLines[i];
          const cLine = currentLines[i];
          
          const lines = [];
          if (pLine !== undefined && pLine !== cLine) {
            lines.push(
              <div key={`u-del-${i}`} className="flex bg-red-500/10 text-red-400">
                <div className="w-8 flex-shrink-0 text-right pr-2 text-white/30 select-none border-r border-white/10 bg-white/5">{i + 1}</div>
                <div className="w-8 flex-shrink-0 text-right pr-2 text-white/30 select-none border-r border-white/10 bg-white/5">-</div>
                <div className="px-4 whitespace-pre-wrap flex-grow">{pLine}</div>
              </div>
            );
          }
          if (cLine !== undefined && pLine !== cLine) {
            lines.push(
              <div key={`u-add-${i}`} className="flex bg-green-500/10 text-green-400">
                <div className="w-8 flex-shrink-0 text-right pr-2 text-white/30 select-none border-r border-white/10 bg-white/5">-</div>
                <div className="w-8 flex-shrink-0 text-right pr-2 text-white/30 select-none border-r border-white/10 bg-white/5">{i + 1}</div>
                <div className="px-4 whitespace-pre-wrap flex-grow">{cLine}</div>
              </div>
            );
          }
          if (pLine === cLine && pLine !== undefined) {
             lines.push(
              <div key={`u-eq-${i}`} className="flex">
                <div className="w-8 flex-shrink-0 text-right pr-2 text-white/30 select-none border-r border-white/10 bg-white/5">{i + 1}</div>
                <div className="w-8 flex-shrink-0 text-right pr-2 text-white/30 select-none border-r border-white/10 bg-white/5">{i + 1}</div>
                <div className="px-4 whitespace-pre-wrap flex-grow text-white/70">{cLine}</div>
              </div>
            );
          }
          return lines;
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex flex-col h-full bg-bg-app text-white border border-white/10 rounded-lg overflow-hidden", className)}>
      {/* Toolbar */}
      <div className="flex items-center justify-between p-4 border-b border-white/10 bg-bg-elevated">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h2 className="text-lg font-medium leading-none">Version History</h2>
            <p className="text-sm text-white/50 mt-1">Comparing versions</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Tabs value={compareMode} onValueChange={(v: string) => setCompareMode(v as "unified" | "split")}>
            <TabsList className="bg-white/5">
              <TabsTrigger value="split" className="data-[state=active]:bg-white/10 data-[state=active]:text-white">Split</TabsTrigger>
              <TabsTrigger value="unified" className="data-[state=active]:bg-white/10 data-[state=active]:text-white">Unified</TabsTrigger>
            </TabsList>
          </Tabs>
          <Button variant="outline" className="border-white/10 hover:bg-white/5">
            <RotateCcw className="w-4 h-4 mr-2" />
            Rollback to Selected
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-72 border-r border-white/10 bg-bg-card flex flex-col flex-shrink-0">
          <div className="p-4 border-b border-white/10">
            <h3 className="text-sm font-medium flex items-center gap-2 text-white/70">
              <Clock className="w-4 h-4" />
              Revisions
            </h3>
          </div>
          <ScrollArea className="flex-1">
            <div className="p-2 flex flex-col gap-2">
              {mockRevisions.map((rev) => {
                const isSelected = rev.id === selectedRevId;
                return (
                  <button
                    key={rev.id}
                    onClick={() => setSelectedRevId(rev.id)}
                    className={cn(
                      "flex flex-col gap-2 p-3 rounded-md text-left transition-colors border",
                      isSelected
                        ? "bg-[#d9ff00]/10 border-[#d9ff00]/30"
                        : "bg-transparent border-transparent hover:bg-white/5"
                    )}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className={cn("font-medium", isSelected ? "text-[#d9ff00]" : "text-white")}>
                        {rev.id}
                      </span>
                      {rev.status === "published" && (
                        <Badge variant="outline" className="text-xs bg-[#d9ff00]/10 text-[#d9ff00] border-[#d9ff00]/20">
                          Current
                        </Badge>
                      )}
                    </div>
                    <div className="text-xs text-white/50">{rev.date}</div>
                    <div className="text-xs text-white/70 flex items-center gap-1">
                      <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[8px] uppercase">
                        {rev.author.substring(0, 1)}
                      </div>
                      {rev.author}
                    </div>
                  </button>
                );
              })}
            </div>
          </ScrollArea>
        </div>

        {/* Diff Area */}
        <div className="flex-1 overflow-auto bg-[#0a0a0a]">
          {renderDiff()}
        </div>
      </div>
    </div>
  );
}
