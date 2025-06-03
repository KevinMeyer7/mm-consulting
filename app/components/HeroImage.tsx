// app/components/HeroImage.tsx
import Image from "next/image";

export default function HeroImage() {
  return (
    <Image
      src="/hero.jpg"
      alt="Live AI workshop in action"
      width={1920} // real pixel width
      height={1080} // real pixel height
      priority // pre-loads + disables lazy-load
      fetchPriority="high" // high priority in browsers that support it
      sizes="(min-width:1280px) 75vw, 100vw"
      placeholder="blur" // optional: generate blurDataURL at build
      className="rounded-3xl shadow-xl"
    />
  );
}
