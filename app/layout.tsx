import type { Metadata } from "next";
import { Nunito_Sans, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";

const nunito_sans = Nunito_Sans({
  variable: "--font-nunito_sans",
});

const mrs_saint_delafield = Mrs_Saint_Delafield({
  weight: "400",
  variable: "--font-mrs_saint_delafield",
});

export const metadata: Metadata = {
  title: "Happy Birthday, Alyssa!",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito_sans.variable} ${mrs_saint_delafield.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
