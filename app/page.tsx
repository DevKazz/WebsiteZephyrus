import Image from "next/image";
import { Hero } from "@/app/landing/Hero"
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"


export const metadata: Metadata = {
  title: 'Zephyrus',
  description: 'Team of developers',
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
}

export default function Home() {
  return (
    <div className="overflow-x-hidden max-w-screen">
      <Hero />
      <Analytics/>
    </div>
  );
}
