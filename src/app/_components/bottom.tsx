import Link from "next/link";

export default function Bottom() {
  return (
    <div className="bg-[#2C2A4A] text-[#F6F7EB] w-full flex justify-between items-center pt-16">
      <div className="w-[6rem]">
        <h1 className="w-[3rem]">Apoie</h1>
      </div>
      <div className="w-40 opacity-60">
        <h1 className="w-[3rem]">|</h1>
      </div>
      <div className="flex items-center">
        <h1 className="w-[8.5rem]">Desenvolvido por</h1>
        <div className="w-[6rem]">
          <Link
            href="https://www.linkedin.com/in/cleciokauetsilvadeara%C3%BAjo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 mr-2"
          >
            Kauet Silva
          </Link>
        </div>
        <h1 className="w-[1.5rem]">&</h1>
        <div className="w-[10rem]">
          <Link
            href="https://www.linkedin.com/in/luiz-carlos5/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            Luiz Carlos
          </Link>
        </div>
      </div>
    </div>
  );
}
