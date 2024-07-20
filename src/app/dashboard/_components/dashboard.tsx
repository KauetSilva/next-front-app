import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  // Dummy data for demonstration
  const deliveries = [
    { id: '12345', recipient: 'Meuca Cete', status: 'Entregue', estimatedTime: '10 min' },
    { id: '67890', recipient: 'Luisitoo Suarezzz', status: 'Em andamento', estimatedTime: '15 min' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 w-full">
      <header className="bg-[#2C2A4A] text-[#F6F7EB] p-4 flex justify-between items-center w-full">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <Image src="/logo-branca.png" alt="Logo" width={120} height={50} />
      </header>

      <main className="flex flex-1 flex-col p-4 space-y-4 md:flex-row md:space-y-0 md:space-x-4 w-full">
        <section className="bg-white p-4 rounded-lg shadow w-full md:w-1/4">
          <h2 className="text-lg font-semibold mb-2">Resumo</h2>
          <p className="text-sm text-gray-600">Informações gerais sobre entregas.</p>
        </section>

        <section className="bg-white p-4 rounded-lg shadow w-full md:w-3/4">
          <h2 className="text-lg font-semibold mb-2">Entregas em Tempo Real</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-center">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2">ID</th>
                  <th className="p-2">Destinatário</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Tempo Estimado</th>
                </tr>
              </thead>
              <tbody>
                {deliveries.map(delivery => (
                  <tr key={delivery.id} className="border-b hover:bg-gray-100">
                    <td className="p-2 md:p-5">
                      <Link href={`/map/${delivery.id}`} className="text-blue-500 hover:underline">
                        {delivery.id}
                      </Link>
                    </td>
                    <td className="p-2 md:p-5">{delivery.recipient}</td>
                    <td className="p-2 md:p-5 text-green-500">{delivery.status}</td>
                    <td className="p-2 md:p-5">{delivery.estimatedTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="bg-[#2C2A4A] text-[#F6F7EB] p-4 text-center w-full">
        <p>© 2024 Kauet Silva. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
