import Image from "next/image";
import Header from "./_components/header";
import Bottom from "./_components/bottom";

export default function Home() {
  return (
    <div className="h-screen grid grid-rows-[1fr,auto]">
      <div className="bg-[#F6F7EB] text-[#2C2A4A]">
        <Header />
        <div className="flex px-44 py-4">
          <div className="w-full text-center">
            <h1 className="font-bold text-2xl w-[38rem] mt-5">
              Bem-vindo à solução definitiva para gerenciamento de entregas em tempo real!
            </h1>
            <p className="whitespace-pre-line text-sm opacity-60 w-[38rem] mt-5">
              Sabemos que para sua empresa, cada entrega é crucial. É por isso
              que desenvolvemos uma plataforma inovadora que oferece
              visibilidade completa do processo de entrega, do armazém até o
              destino final, em tempo real.
            </p>
          </div>
          <Image src="/motosembg.png" alt="Logo" width={200} height={200} />
        </div>
      </div>
      <div className="bg-[#2C2A4A] text-[#F6F7EB] rounded-t-3xl">
        <div className="px-44 py-4 flex flex-col justify-between h-full">
          <div className="flex items-center justify-center text-center">
            <p className="whitespace-pre-line text-sm opacity-60 w-[20rem]">
              Ofereça aos seus clientes a experiência de compra mais completa e
              segura. Proporcione visibilidade em tempo real do processo de
              entrega, garantindo também a segurança e tranquilidade do seu
              entregador.
            </p>
            <Image
              src="/mapa.svg"
              alt="Mapa"
              width={250}
              height={250}
              className="rounded-3xl ml-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
