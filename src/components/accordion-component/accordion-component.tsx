'use client';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import React from 'react';

type AccordionRootProps = {
  children: React.ReactNode;
  type?: 'single' | 'multiple';
  collapsible?: boolean;
};

export const AccordionRoot: React.FC<AccordionRootProps> = ({
  children,
  type = 'single',
  collapsible = true,
}) => {
  return (
    <AccordionPrimitive.Root type={type} collapsible={collapsible} className={'w-full'}>
      {children}
    </AccordionPrimitive.Root>
  );
};

type AccordionItemProps = {
  value: string;
  children: React.ReactNode;
};

export const AccordionItem: React.FC<AccordionItemProps> = ({ value, children }) => (
  <AccordionPrimitive.Item value={value}>{children}</AccordionPrimitive.Item>
);

type AccordionTriggerProps = {
  children: React.ReactNode;
};

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ children }) => (
  <AccordionPrimitive.Header>
    <AccordionPrimitive.Trigger className=" flex w-full items-center gap-2 text-left text-lg font-semibold text-neutral-300 hover:text-white py-3 pl-4 bg-neutral4 rounded-sm border border-neutral3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
      >
        <path d="M12 16L6 10H18L12 16Z"></path>
      </svg>
      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);

type AccordionContentProps = {
  children: React.ReactNode;
};

export const AccordionContent: React.FC<AccordionContentProps> = ({ children }) => (
  <AccordionPrimitive.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp ">
    {children}
  </AccordionPrimitive.Content>
);
