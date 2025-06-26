import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        src="/logo.png"
        alt="Free Filing UK Logo"
        width={1024}
        height={1024}
        className="w-1/4"
      />
    </div>
  );
}
