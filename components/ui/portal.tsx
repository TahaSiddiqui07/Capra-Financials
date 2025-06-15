"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

interface PortalProps {
  children: React.ReactNode;
  className?: string;
  container?: HTMLElement;
}

export function Portal({
  children,
  className,
  container,
}: PortalProps) {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Use the provided container or default to document.body
    const targetElement = container || document.body;
    setMountNode(targetElement);
    
    return () => {
      // Cleanup is handled automatically by createPortal
    };
  }, [container]);

  if (!mountNode) return null;
  
  return createPortal(
    <div className={cn("portal-container", className)}>
      {children}
    </div>,
    mountNode
  );
} 