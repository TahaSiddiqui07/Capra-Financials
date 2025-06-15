"use client";

import { useEffect, useState } from "react";
import { Portal } from "./portal";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { Button } from "./button";

interface ModalPortalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  className?: string;
  overlayClassName?: string;
  contentClassName?: string;
}

export function ModalPortal({
  children,
  isOpen,
  onClose,
  title,
  className,
  overlayClassName,
  contentClassName,
}: ModalPortalProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Add body scroll lock when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isMounted) return null;
  if (!isOpen) return null;

  return (
    <Portal>
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm",
          overlayClassName
        )}
        onClick={handleOverlayClick}
      >
        <div
          className={cn(
            "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg",
            className
          )}
        >
          <div className="flex flex-col space-y-1.5">
            {title && (
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold leading-none tracking-tight">
                  {title}
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={onClose}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>
            )}
            <div className={cn("mt-2", contentClassName)}>{children}</div>
          </div>
        </div>
      </div>
    </Portal>
  );
} 