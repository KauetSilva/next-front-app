"use client";
import { useParams } from 'next/navigation';
import Map from './_components/map';
import Image from 'next/image';

export default function MapPage() {
  const { id } = useParams();
  
  const location = { lat: -23.5505, lng: -46.6333 };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 w-full">
      <header className="bg-[#2C2A4A] text-[#F6F7EB] p-4 flex justify-between items-center w-full">
        <h1 className="text-xl font-bold">Mapa em Tempo Real</h1>
        <Image src="/logo-branca.png" alt="Logo" width={120} height={50} />
      </header>

      <main className="flex flex-1 flex-col p-4 w-full">
        <section className="bg-white p-4 rounded-lg shadow w-full h-96">
          <h2 className="text-lg font-semibold mb-2">Entrega: {id}</h2>
          <Map location={location} />
        </section>
      </main>

      <footer className="bg-[#2C2A4A] text-[#F6F7EB] p-4 text-center w-full">
        <p>© 2024 Kauet Silva. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
