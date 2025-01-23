import { Link } from "next-view-transitions";

import { ArrowUpRightIcon } from "lucide-react";

import { AnimateEnter } from "@/app/(home)/_components/AnimateEnter";
import { RequestComponentButton } from "./RequestComponentButton";
import { Icons } from "./Icons";

export const NAVIGATE = [
  {
    name: "Installation",
    slug: "/ui/installation",
  },
  {
    name: "Add Utilities",
    slug: "/ui/add-utilities",
  },
  {
    name: "Browse Components",
    slug: "/ui",
  },
];

export function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-border bg-background dark:border-[#262626]/50">
      <Blur />
      <div className="relative mx-auto w-full max-w-7xl px-8 py-16 md:px-3">
        <div className="flex gap-10 max-md:flex-col md:justify-between">
          <div className="flex flex-col gap-5">
            <AnimateEnter>
              <Icons.logo className="w-20" />
            </AnimateEnter>
            <AnimateEnter delay={0.1} className="flex flex-col gap-1">
              <p className="text-sm text-primary text-opacity-80">
                Elevating the web design.
              </p>
              <p className="text-sm text-black/60 dark:text-white/60">
                <a
                  href="https://guhrodrigues.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="duration-200 hover:text-neutral-600 dark:hover:text-neutral-200"
                >
                  Gustavo Rodrigues
                </a>{" "}
                &#169; {new Date().getFullYear()}
              </p>
            </AnimateEnter>
            <AnimateEnter delay={0.2}>
              <RequestComponentButton />
            </AnimateEnter>
          </div>
          <div className="flex items-start gap-10 max-sm:flex-col sm:gap-36">
            <AnimateEnter delay={0.3} className="space-y-4">
              <div className="flex flex-col gap-4 text-sm">
                <h1 className="font-medium text-primary">Explore</h1>
                {NAVIGATE.map(({ name, slug }, idx) => (
                  <Link
                    key={idx}
                    href={slug}
                    className="relative flex w-fit items-center gap-1 text-foreground duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-400 after:transition-transform after:duration-300 after:ease-in-out hover:text-primary hover:after:origin-bottom-left hover:after:scale-x-100"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </AnimateEnter>
            <AnimateEnter delay={0.4} className="space-y-4">
              <div className="flex flex-col gap-4 text-sm">
                <h1 className="font-medium text-primary">Connect</h1>
                <a
                  href="https://github.com/guhrodrrigues/luxe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex w-fit items-center gap-1 text-foreground duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-400 after:transition-transform after:duration-300 after:ease-in-out hover:text-primary hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  GitHub
                  <ArrowIconGlitch />
                </a>
                <a
                  href="https://twitter.com/guhrodrrigues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-1 text-foreground duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-400 after:transition-transform after:duration-300 after:ease-in-out hover:text-primary hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  Twitter
                  <ArrowIconGlitch />
                </a>
              </div>
            </AnimateEnter>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Blur() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-1 left-1/2 h-[200px] w-full max-w-[400px] -translate-x-1/2 -translate-y-1/2"
      style={{
        background:
          "conic-gradient(from 90deg at 50% 50%, #00000000 50%, #0a0a0a 50%),radial-gradient(rgba(134, 134, 134, 0.1) 0%, transparent 80%)",
      }}
    />
  );
}

function ArrowIconGlitch() {
  return (
    <div className="group relative overflow-hidden font-medium">
      <span className="invisible">
        <ArrowUpRightIcon size={10} />
      </span>
      <span className="absolute left-0 top-0 text-neutral-400 transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full group-hover:translate-x-full">
        <ArrowUpRightIcon size={10} />
      </span>
      <span className="absolute left-0 top-0 -translate-x-full translate-y-full text-neutral-400 transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-x-0 group-hover:translate-y-0">
        <ArrowUpRightIcon size={10} />
      </span>
    </div>
  );
}
