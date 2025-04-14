import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import "rsuite/dist/rsuite.min.css";
import "rsuite/dist/rsuite-no-reset.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "White Horse World | Event Managment in Ranchi",
  description: "White Horse World is Event Managment in Ranchi",
  icons: {
    icon: "/images/favicon/android-chrome-192x192.png",
    apple: "/images/favicon/android-chrome-192x192.png",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
  },
  other: {
    "mobile-web-app-capable": "yes", // extra meta tag
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
