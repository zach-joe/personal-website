import type { SvgComponent } from "astro/types";
import Email from "@/assets/icons/email.svg";
import GitHub from "@/assets/icons/github.svg";

export const SITE = {
  title: "Zach Joe",
  description: "Personal Website.",
  locale: "en-US",
  dir: "ltr",
  defaultPageImage: "/static/opengraph-image.png",
  defaultPostImage: "/static/1200x630.png",
} as const;

export const NAVIGATION = [
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export const SOCIALS: { href: string; label: string; icon: SvgComponent }[] = [
  { href: "https://github.com/zach-joe", label: "GitHub", icon: GitHub },
  { href: "mailto:zach.jl@proton.me", label: "Email", icon: Email },
];
