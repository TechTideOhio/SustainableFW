"use client";
import * as React from "react"
import { UploadCloud, X, File as FileIcon, ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface FileUploadProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'onChange'> {
  onFilesChange?: (files: File[]) => void
  maxSize?: number
}

const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  ({ className, multiple, accept, maxSize, disabled, onFilesChange, ...props }, ref) => {
    const [isDragging, setIsDragging] = React.useState(false)
    const [files, setFiles] = React.useState<File[]>([])
    const inputRef = React.useRef<HTMLInputElement | null>(null)
    
    // Combining refs
    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      if (!disabled) setIsDragging(true)
    }

    const handleDragLeave = (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragging(false)
    }

    const addFiles = (newFiles: File[]) => {
      const validFiles = newFiles.filter(file => {
        if (maxSize && file.size > maxSize) return false
        return true
      })
      
      let updatedFiles = files
      if (multiple) {
        updatedFiles = [...files, ...validFiles]
      } else {
        updatedFiles = validFiles.slice(0, 1)
      }
      
      setFiles(updatedFiles)
      onFilesChange?.(updatedFiles)
    }

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragging(false)
      if (disabled) return
      
      const droppedFiles = Array.from(e.dataTransfer.files)
      addFiles(droppedFiles)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        addFiles(Array.from(e.target.files))
      }
    }

    const removeFile = (index: number) => {
      const updated = [...files]
      updated.splice(index, 1)
      setFiles(updated)
      onFilesChange?.(updated)
      if (inputRef.current) inputRef.current.value = ""
    }

    const formatSize = (bytes: number) => {
      if (bytes === 0) return '0 Bytes'
      const k = 1024
      const sizes = ['Bytes', 'KB', 'MB', 'GB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    }

    return (
      <div className={cn("w-full", className)}>
        <div
          className={cn(
            "relative flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-8 transition-colors",
            isDragging ? "border-lime bg-lime/5" : "border-white/10 bg-bg-app hover:bg-white/5",
            disabled && "pointer-events-none opacity-50"
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
        >
          <input
            ref={inputRef}
            type="file"
            className="hidden"
            multiple={multiple}
            accept={accept}
            disabled={disabled}
            onChange={handleChange}
            {...props}
          />
          <UploadCloud className={cn("mb-4 h-10 w-10 text-zinc-400", isDragging && "text-lime")} />
          <p className="mb-1 text-sm font-semibold text-white">
            {isDragging ? "Drop files here" : "Click or drag files to upload"}
          </p>
          <p className="text-xs text-zinc-400">
            {maxSize ? `Max file size: ${formatSize(maxSize)}` : "Any file type supported"}
          </p>
        </div>

        {files.length > 0 && (
          <div className="mt-4 space-y-2">
            {files.map((file, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border border-white/10 bg-bg-elevated p-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  {file.type.startsWith('image/') ? (
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-white/5">
                      <ImageIcon className="h-5 w-5 text-zinc-400" />
                    </div>
                  ) : (
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-white/5">
                      <FileIcon className="h-5 w-5 text-zinc-400" />
                    </div>
                  )}
                  <div className="overflow-hidden">
                    <p className="truncate text-sm font-medium text-white">{file.name}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-zinc-400">{formatSize(file.size)}</p>
                      <div className="h-1 w-16 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-full bg-lime transition-all" />
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    removeFile(i)
                  }}
                  className="rounded p-1 text-zinc-400 hover:bg-white/10 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
)
FileUpload.displayName = "FileUpload"
export { FileUpload }
