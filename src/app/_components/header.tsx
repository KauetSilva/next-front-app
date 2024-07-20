import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#F6F7EB] text-[#2C2A4A] flex justify-between items-center px-4 py-4 md:px-44 md:py-6">
      <div>
        <Link href="/">
          <Image src="/logo-azul.png" alt="Logo" width={100} height={100} className="w-24 md:w-48 " />
        </Link>
      </div>
      <div>
        <Link href="/login">
          <Button className="bg-[#2C2A4A] text-[#F6F7EB] w-20 md:w-28">Login</Button>
        </Link>
      </div>
    </header>
  );
}
