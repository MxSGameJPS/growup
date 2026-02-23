import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grow Up Tech | Consultoria de TI & Modernização Digital",
  description:
    "Especialistas em modernização de sistemas, automação de processos e arquitetura de software de alta performance.",
  keywords:
    "consultoria ti, automação de processos, modernização de sistemas, grow up tech, desenvolvimento de software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
