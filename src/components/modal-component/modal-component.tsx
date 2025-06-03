'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ReactNode } from 'react';

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  children: ReactNode;
}

export function ModalComponent({ open, onOpenChange, title, children }: DialogProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-neutral3 p-6 shadow-lg focus:outline-none">
          <DialogPrimitive.Title className="text-xl font-semibold">{title}</DialogPrimitive.Title>
          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
