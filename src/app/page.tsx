import Image from "next/image";
import Header from "./_components/header";
import Bottom from "./_components/bottom";

export default function Home() {
  return (
    <div className="h-screen grid grid-rows-[1fr,auto] md:grid-rows-2 ">
      <div className="bg-[#F6F7EB] text-[#2C2A4A]">
        <Header />
        <div className="flex flex-col items-center px-4 py-4 md:flex-row md:px-44">
          <div className="w-full text-center md:text-left md:w-1/2">
            <h1 className="font-bold text-2xl w-full mt-5">
              Bem-vindo à solução definitiva para gerenciamento de entregas em tempo real!
            </h1>
            <p className="whitespace-pre-line text-sm opacity-60 w-full mt-5 ">
              Sabemos que para sua empresa, cada entrega é crucial. É por isso
              que desenvolvemos uma plataforma inovadora que oferece
              visibilidade completa do processo de entrega, do armazém até o
              destino final, em tempo real.
            </p>
          </div>
          <Image src="/motosembg.png" alt="Logo" width={200} height={200} className="mt-5 md:mt-0 md:ml-5 lg:ml-auto" />
        </div>
      </div>
      <div className="bg-[#2C2A4A] text-[#F6F7EB] rounded-t-3xl">
        <div className="px-4 py-4 flex flex-col justify-between h-full md:flex-row md:px-44">
          <div className="flex flex-col items-center text-center md:flex-row md:justify-center md:text-left">
            <p className="whitespace-pre-line text-sm opacity-60 w-full md:w-[20rem]">
              Ofereça aos seus clientes a experiência de compra mais completa e
              segura. Proporcione visibilidade em tempo real do processo de
              entrega, garantindo também a segurança e tranquilidade do seu
              entregador.
            </p>
          </div>
          <div className="flex justify-center md:justify-end items-center md:w-1/2">
            <Image
              src="/mapa.svg"
              alt="Mapa"
              width={250}
              height={250}
              className="rounded-3xl mt-5 md:mt-0 md:ml-5 lg:ml-auto"
            />
          </div>
        </div>
      </div>
      </div>
  );
}
