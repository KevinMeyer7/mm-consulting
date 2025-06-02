import "./globals.css"; // your Tailwind + custom CSS
import Providers from "./providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "M&M Consulting",
  description: "Transforming Your Company with AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-brand-bg text-brand-text">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
