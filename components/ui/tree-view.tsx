"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronDown } from "lucide-react";

interface TreeNodeData {
  id: string;
  label: string;
  icon?: React.ReactNode;
  children?: TreeNodeData[];
}

interface TreeViewProps {
  data: TreeNodeData[];
  selectedId?: string;
  onSelect?: (id: string) => void;
  className?: string;
}

function TreeNode({ node, depth, selectedId, onSelect }: {
  node: TreeNodeData;
  depth: number;
  selectedId?: string;
  onSelect?: (id: string) => void;
}) {
  const [expanded, setExpanded] = React.useState(false);
  const hasChildren = node.children && node.children.length > 0;
  const isSelected = selectedId === node.id;

  const handleToggle = () => {
    if (hasChildren) setExpanded(!expanded);
    onSelect?.(node.id);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleToggle}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight" && hasChildren && !expanded) { setExpanded(true); e.preventDefault(); }
          if (e.key === "ArrowLeft" && expanded) { setExpanded(false); e.preventDefault(); }
        }}
        className={cn(
          "flex w-full items-center gap-1.5 rounded-md px-2 py-1 text-sm transition-colors",
          "hover:bg-white/5 text-zinc-300 hover:text-white",
          isSelected && "bg-lime/10 text-lime"
        )}
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
        role="treeitem"
        aria-expanded={hasChildren ? expanded : undefined}
        aria-selected={isSelected}
      >
        {hasChildren ? (
          expanded ? <ChevronDown className="h-4 w-4 shrink-0" /> : <ChevronRight className="h-4 w-4 shrink-0" />
        ) : (
          <span className="w-4 shrink-0" />
        )}
        {node.icon && <span className="shrink-0">{node.icon}</span>}
        <span className="truncate">{node.label}</span>
      </button>
      {expanded && hasChildren && (
        <div role="group">
          {node.children!.map((child) => (
            <TreeNode key={child.id} node={child} depth={depth + 1} selectedId={selectedId} onSelect={onSelect} />
          ))}
        </div>
      )}
    </div>
  );
}

function TreeView({ data, selectedId, onSelect, className }: TreeViewProps) {
  return (
    <div role="tree" className={cn("space-y-0.5", className)}>
      {data.map((node) => (
        <TreeNode key={node.id} node={node} depth={0} selectedId={selectedId} onSelect={onSelect} />
      ))}
    </div>
  );
}

export { TreeView, type TreeViewProps, type TreeNodeData };
