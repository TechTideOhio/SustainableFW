"use client";
import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface NumberInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'prefix'> {
  value?: number
  onChange?: (value: number) => void
  min?: number
  max?: number
  step?: number
  prefix?: React.ReactNode
  suffix?: React.ReactNode
}

const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  ({ className, value, onChange, min = -Infinity, max = Infinity, step = 1, prefix, suffix, disabled, ...props }, ref) => {
    const [localValue, setLocalValue] = React.useState<number | "">(value ?? "")

    React.useEffect(() => {
      if (value !== undefined) {
        setLocalValue(value)
      }
    }, [value])

    const handleIncrement = () => {
      if (disabled) return
      const current = typeof localValue === "number" ? localValue : 0
      const next = Math.min(max, current + step)
      updateValue(next)
    }

    const handleDecrement = () => {
      if (disabled) return
      const current = typeof localValue === "number" ? localValue : 0
      const next = Math.max(min, current - step)
      updateValue(next)
    }

    const updateValue = (newValue: number | "") => {
      if (value === undefined) setLocalValue(newValue)
      if (onChange && typeof newValue === "number") onChange(newValue)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "ArrowUp") {
        e.preventDefault()
        handleIncrement()
      } else if (e.key === "ArrowDown") {
        e.preventDefault()
        handleDecrement()
      }
    }

    return (
      <div className={cn("flex items-center rounded-md border border-white/10 bg-bg-elevated p-1", className)}>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          className="h-8 w-8 text-zinc-400 hover:text-white disabled:opacity-50"
          onClick={handleDecrement}
          disabled={disabled || (typeof localValue === "number" && localValue <= min)}
        >
          <Minus className="h-4 w-4" />
        </Button>
        
        <div className="flex-1 relative flex items-center justify-center">
          {prefix && <span className="absolute left-2 text-zinc-400 text-sm">{prefix}</span>}
          <input
            ref={ref}
            type="text"
            inputMode="decimal"
            className={cn(
              "w-full bg-transparent text-center text-sm text-white focus:outline-none disabled:opacity-50",
              prefix && "pl-6",
              suffix && "pr-6"
            )}
            value={localValue}
            onChange={(e) => {
              const val = e.target.value
              if (val === "") {
                updateValue("")
              } else {
                const parsed = parseFloat(val)
                if (!isNaN(parsed)) {
                  updateValue(parsed)
                }
              }
            }}
            onBlur={() => {
              if (typeof localValue === "number") {
                const clamped = Math.max(min, Math.min(max, localValue))
                updateValue(clamped)
              }
            }}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            {...props}
          />
          {suffix && <span className="absolute right-2 text-zinc-400 text-sm">{suffix}</span>}
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          className="h-8 w-8 text-zinc-400 hover:text-white disabled:opacity-50"
          onClick={handleIncrement}
          disabled={disabled || (typeof localValue === "number" && localValue >= max)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    )
  }
)
NumberInput.displayName = "NumberInput"
export { NumberInput }
