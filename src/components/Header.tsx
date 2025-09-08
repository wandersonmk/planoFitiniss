import { Button } from "@/components/ui/button";

interface HeaderProps {
  onDownloadPDF?: () => void;
}

export const Header = ({ onDownloadPDF }: HeaderProps) => {
  return (
    <header className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      <div className="relative max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Personal Trainer
          <span className="block text-accent">Profissional</span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
          Transforme seu corpo e sua vida com acompanhamento personalizado. 
          Escolha o pacote ideal para seus objetivos.
        </p>
      </div>
    </header>
  );
};