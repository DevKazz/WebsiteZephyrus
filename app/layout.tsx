import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

  export const metadata: Metadata = {
    title: 'Zephyrus',
    description: 'Team of developers',
    icons: { 
      icon: '/favicon.ico'
    },
    openGraph: {
        title: 'Zephyrus',
        description: 'Team of developers',
        url: 'https://zephyrusdev.com/',
        siteName: 'Zephyrus',
        images: [
            {
                url: 'https://zephyrusdev.com/opengraph-image.jpg', // Replace with your image path
                width: 800,
                height: 600,
                alt: 'Zephyrus Logo',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
