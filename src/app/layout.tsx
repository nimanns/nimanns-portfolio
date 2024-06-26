import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nima Niazi - Portfolio",
  description:
    "A creative portfolio designed as a complimentary piece to my main landing website: nimaniazi.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " overflow-x-hidden "}>
				<div className="absolute z-10 w-[170px] drop-shadow-sm"><a href="https://nimaniazi.com/"><img width="100%" src="/logo.png" alt="Logo depicting my name."/></a></div>
        {children}
      </body>
    </html>
  );
}
