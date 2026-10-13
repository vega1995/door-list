import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Door List | Noche de música en vivo",
  description: "Información del evento Noche de música en vivo.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
