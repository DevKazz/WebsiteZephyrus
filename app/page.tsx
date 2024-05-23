import Image from "next/image";
import { Hero } from "@/app/landing/Hero"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zephyrus",
  description: "Team Of Developers",
  // ... (other metadata properties like icons, Open Graph tags, etc.)
};


export default function Home() {
  return (
    <div className="overflow-x-hidden max-w-screen">
      <Hero />
    </div>
  );
}
