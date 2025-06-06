export default function Presentation() {
  return (
    <section
      className="h-screen w-full bg-fixed flex items-center justify-center bg-center bg-cover px-4"
      style={{ backgroundImage: 'url("/img/MarcheNoel.webp")' }}
    >
      <h1 className="flex flex-col text-center max-w-4xl">
        <span className="text-5xl font-bold text-white">Bienvenue</span> 
        <span className="text-5xl font-bold text-white">au Marché de Noël🎄</span>
      </h1>
    </section>
  );
}
