"use client";

import { GET_STARTED } from "@/data/get-started";
import { useState } from "react";

import { Drawer as VaulDrawer } from "vaul";

import { ComponentsListButton } from "./ComponentsListButton";

import { COMPONENTS } from "@/data/components";

export default function Drawer({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const orderedComponents = COMPONENTS.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  function handleCloseDrawer() {
    setIsOpen(false);
  }

  return (
    <VaulDrawer.Root open={isOpen} onOpenChange={setIsOpen} direction="right">
      <VaulDrawer.Trigger asChild>{children}</VaulDrawer.Trigger>
      <VaulDrawer.Portal>
        <VaulDrawer.Overlay className="fixed inset-0 z-[60] bg-black/60" />
        <VaulDrawer.Content
          className="fixed bottom-2 right-2 top-2 z-[70] flex w-[270px] outline-none"
          style={
            { "--initial-transform": "calc(100% + 8px)" } as React.CSSProperties
          }
        >
          <div className="relative flex h-full w-full grow flex-col rounded-[16px] border border-border/60 bg-background px-3 py-5">
            <div className="h-full overflow-y-auto px-3 pt-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="mb-8 flex flex-col gap-1.5">
                <span className="text-xs text-neutral-50">Get Started</span>
                <div className="flex flex-col">
                  {GET_STARTED.map((component) => (
                    <ComponentsListButton
                      key={component.slug}
                      name={component.name}
                      slug={component.slug}
                      onClick={handleCloseDrawer}
                    />
                  ))}
                </div>
              </div>
              <ul className="flex flex-col gap-1.5">
                <span className="relative z-[1] text-xs text-neutral-50">
                  Components
                </span>
                <div className="flex flex-col pb-3">
                  {orderedComponents.map((component) => (
                    <ComponentsListButton
                      key={component.name}
                      name={component.name}
                      slug={`/ui/${component.slug}`}
                      isNew={component.isNew}
                      isUpdated={component.isUpdated}
                      onClick={handleCloseDrawer}
                    />
                  ))}
                </div>
              </ul>
            </div>
          </div>
        </VaulDrawer.Content>
      </VaulDrawer.Portal>
    </VaulDrawer.Root>
  );
}