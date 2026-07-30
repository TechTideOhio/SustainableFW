"use client";
import * as React from "react"
import { Check, Copy } from "lucide-react"
import { Button, ButtonProps } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

export interface CopyButtonProps extends ButtonProps {
  value: string
}

const CopyButton = React.forwardRef<HTMLButtonElement, CopyButtonProps>(
  ({ value, className, variant = "ghost", size = "icon-sm", ...props }, ref) => {
    const [copied, setCopied] = React.useState(false)

    const handleCopy = React.useCallback(() => {
      navigator.clipboard.writeText(value).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
    }, [value])

    return (
      <TooltipProvider>
        <Tooltip open={copied ? true : undefined}>
          <TooltipTrigger asChild>
            <Button
              ref={ref}
              variant={variant}
              size={size}
              className={cn("text-muted-foreground hover:text-foreground", className)}
              onClick={handleCopy}
              {...props}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>Copied!</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }
)
CopyButton.displayName = "CopyButton"
export { CopyButton }
