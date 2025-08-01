import InstallPrompt from "@/components/InstallPrompt";

export default function Presentation() {
  return (
    <section
      className="h-screen w-full bg-fixed flex flex-col items-center justify-center bg-center bg-cover px-4"
      style={{ backgroundImage: 'url("/img/MarcheNoel.webp")' }}
    >
      <h1
        style={{ fontSize: "3rem" }}
        className="font-bold text-white flex flex-col text-center max-w-4xl"
      >
        <span>Bienvenue</span>
        <span>au Marché de Noël🎄</span>
      </h1>
      <InstallPrompt />
    </section>
  );
}
