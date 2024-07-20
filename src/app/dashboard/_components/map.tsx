import { useRouter } from 'next/router';
import Image from 'next/image';

export default function MapPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 w-full">
      <header className="bg-[#2C2A4A] text-[#F6F7EB] p-4 flex justify-between items-center w-full">
        <h1 className="text-xl font-bold">Mapa em Tempo Real</h1>
        <Image src="/logo-branca.png" alt="Logo" width={120} height={50} />
      </header>

      <main className="flex flex-1 flex-col p-4 w-full">
        <section className="bg-white p-4 rounded-lg shadow w-full">
          <h2 className="text-lg font-semibold mb-2">Entrega: {id}</h2>
          {/* Substitua pelo componente de mapa real */}
          <div className="w-full h-96 bg-gray-300 flex items-center justify-center">
            <p>Mapa em tempo real para a entrega {id} será exibido aqui.</p>
          </div>
        </section>
      </main>

      <footer className="bg-[#2C2A4A] text-[#F6F7EB] p-4 text-center w-full">
        <p>© 2024 Kauet Silva. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
