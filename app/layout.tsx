import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dra. Cherida Bautista | Cirujana Dermatóloga",
  description:
    "Especialista en rejuvenecimiento facial quirúrgico, rinoplastia, lifting facial y más. Más de 20 años de experiencia en Santo Domingo, República Dominicana.",
};

export const viewport: Viewport = {
  themeColor: "#2c3638",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
