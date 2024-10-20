import Quiz from "@/components/Quiz";
import Image from "next/image";
import logo from "@/../public/images/logo.webp";

export default function Home() {
  return (
    <main className="h-screen bg-[#98C6C4]">
      <div className="flex flex-col items-center justify-center">
        <Image src={logo} alt="logo" width={300} height={200} />
        <Quiz />
      </div>
    </main>
  );
}
