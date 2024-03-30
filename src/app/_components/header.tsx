import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#F6F7EB] text-[#2C2A4A] flex justify-between items-center px-44 py-6">
      <div>
        <Link href="/">
          <Image src="/logo-azul.png" alt="Logo" width={200} height={200} />
        </Link>
      </div>
      <div>
        <Link href="/login">
          <Button className="bg-[#2C2A4A] text-[#F6F7EB] w-28">Login</Button>
        </Link>
      </div>
    </header>
  );
}
