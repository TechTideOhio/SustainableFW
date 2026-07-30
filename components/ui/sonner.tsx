import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      position="top-center"
      offset={80}
      closeButton
      visibleToasts={3}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[#0e0e10] group-[.toaster]:text-white group-[.toaster]:border-white/10 group-[.toaster]:shadow-2xl group-[.toaster]:shadow-black/50 group-[.toaster]:backdrop-blur-xl",
          description: "group-[.toast]:text-white/50",
          actionButton:
            "group-[.toast]:bg-lime group-[.toast]:text-black group-[.toast]:font-semibold",
          cancelButton:
            "group-[.toast]:bg-white/5 group-[.toast]:text-white/60 group-[.toast]:border-white/10",
          success:
            "group-[.toaster]:border-lime/30 group-[.toaster]:text-lime [&>svg]:text-lime",
          error:
            "group-[.toaster]:border-red-500/30 group-[.toaster]:text-red-400 [&>svg]:text-red-400",
          info: "group-[.toaster]:border-white/20 group-[.toaster]:text-white/80 [&>svg]:text-white/60",
          warning:
            "group-[.toaster]:border-amber-500/30 group-[.toaster]:text-amber-400 [&>svg]:text-amber-400",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
