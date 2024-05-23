import Image from "next/image";
import { Hero } from "@/app/landing/Hero"

export default function Home() {
  return (
    <div className="overflow-x-hidden max-w-screen">
      <Hero />
    </div>
  );
}
