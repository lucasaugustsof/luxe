import { Metadata } from "next";

import { ComponentsList } from "./_components/component-page/ComponentsList";
import { CommandMenu } from "./_components/command-menu";
import { CommandMenuProvider } from "./_context/CommandMenuProvider";

export const metadata: Metadata = {
  title: "Browse Components",
  description:
    "Navigate to all the components that will make your application sophisticated and luxurious.",
  openGraph: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "/open-graphs/og-browse-components.png",
        alt: "Luxe website cover",
      },
    ],
    locale: "en",
    siteName: "Gustavo Rodrigues",
    title: "Luxe — Browse Components",
    description:
      "Navigate to all the components that will make your application sophisticated and luxurious.",
    type: "website",
    url: "https://luxe.guhrodrigues.com/ui",
  },
  twitter: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "/open-graphs/og-browse-components.png",
        alt: "Luxe website cover",
      },
    ],
    card: "summary_large_image",
    title: "Luxe — Browse Components",
    description:
      "Navigate to all the components that will make your application sophisticated and luxurious.",
    site: "@guhrodrrigues",
    creator: "Gustavo Rodrigues",
  },
};

type ComponentPageLayout = {
  children: React.ReactNode;
};

export default function ComponentPageLayout({ children }: ComponentPageLayout) {
  return (
    <CommandMenuProvider>
      <ComponentsList />
      <div className="xl:pl-[300px]">{children}</div>
      <CommandMenu />
    </CommandMenuProvider>
  );
}
