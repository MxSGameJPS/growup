import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import StyledJsxRegistry from "@/lib/registry";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grow Up | Consultoria de TI & Modernização Digital",
  description:
    "Especialistas em modernização de sistemas, automação de processos e arquitetura de software de alta performance.",
  keywords:
    "consultoria ti, automação de processos, modernização de sistemas, grow up, desenvolvimento de software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={outfit.className}>
      <body>
        <StyledJsxRegistry>
          <main>{children}</main>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
