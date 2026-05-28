import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aestilith 潮汐基石 — Strategic Management Consulting",
  description:
    "潮汐基石企业管理咨询有限公司 — Aestilith is a strategic management consulting firm empowering organizations through insight, structure, and transformation.",
  keywords: [
    "management consulting",
    "战略管理咨询",
    "企业管理咨询",
    "Aestilith",
    "潮汐基石",
  ],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Aestilith 潮汐基石 — Strategic Management Consulting",
    description:
      "Empowering organizations through insight, structure, and transformation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
