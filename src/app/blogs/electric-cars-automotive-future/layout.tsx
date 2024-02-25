import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Image from "next/image";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="w-full h-80 bg-green-500 relative">
        <Image
          src="/electric-car.jpg"
          alt="Electric Car Banner"
          fill
          className="object-cover"
        />
      </div>
      <div className="grow flex flex-col justify-center items-center py-16 px-10 dark:bg-zinc-950">
        {children}
      </div>
      <Footer />
    </main>
  );
}
