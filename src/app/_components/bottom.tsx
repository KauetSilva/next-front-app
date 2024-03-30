import Link from "next/link";

export default function Bottom() {
  return (
    <div className="bg-[#2C2A4A] text-[#F6F7EB] w-full flex justify-between items-center py-2">
      <div>
        <h1>Apoie</h1>
      </div>
      <div className="mr-96 opacity-60">
        <h1>|</h1>
      </div>
      <div className="flex">
        <h1>
          Desenvolvido por{" "}
          <Link
            href="https://www.linkedin.com/in/cleciokauetsilvadeara%C3%BAjo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            Kauet Silva
          </Link>{" & "}
          <Link
            href="https://www.linkedin.com/in/luiz-carlos5/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
             Luiz Carlos
          </Link>
        </h1>
      </div>
    </div>
  );
}
