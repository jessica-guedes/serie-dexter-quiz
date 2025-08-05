import Image from "next/image";
import Quiz from "@/components/Quiz";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 flex flex-col items-center justify-center p-4 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/assets/dexter03.jpg')"}}>
      <main className="container mx-auto flex flex-col items-center justify-center text-center bg-black/80 p-8 rounded-lg">
        <Image 
          src="/assets/Dexter_Logo.svg" 
          alt="Logo da série Dexter na cor vermelha" 
          width={200} 
          height={100} 
          className="mb-8"
        />
        <p className="max-w-2xl mb-8 text-lg text-zinc-300">
          Dexter é um analista forense de padrões de sangue que trabalha para o Departamento da Polícia. No seu tempo livre, ele é um assassino em série vigilante que tem por alvo outros assassinos que fugiram ao sistema judiciário. Ele segue um código de ética que lhe foi ensinado na sua infância pelo seu pai adotivo, Harry.
        </p>
        <h2 className="text-5xl font-normal text-red-600 mb-8 leading-tight font-stranger">
          Teste o quanto você sabe sobre o <br/>Passageiro Sombrio
        </h2>
        <div className="font-high"><Quiz /></div>
      </main>
    </div>
  );
}
