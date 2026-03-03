import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/layout/CustomCursor";
import OverlayUI from "@/components/layout/OverlayUI";
import Chatbot from "@/components/layout/Chatbot";

export const metadata: Metadata = {
  title: "Robin Lather - AI & ICT Educator",
  description: "Next-level interactive portfolio for Robin Lather, specializing in AI in Education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <OverlayUI />
        <Chatbot />
        {children}
      </body>
    </html>
  );
}
