import { Header } from "@/components/Header";
import { PackageCard } from "@/components/PackageCard";
import { ComparisonTable } from "@/components/ComparisonTable";
import { PlanComparison } from "@/components/PlanComparison";
import { DownloadSection } from "@/components/DownloadSection";
import { PlanSuggestion } from "@/components/PlanSuggestion";
import { Footer } from "@/components/Footer";
import { generatePDF } from "@/utils/pdfGenerator";
import { useToast } from "@/hooks/use-toast";
import fitnessHero from "@/assets/fitness-hero.jpg";

const Index = () => {
  const { toast } = useToast();

  const handleDownloadPDF = () => {
    generatePDF();
    toast({
      title: "Download iniciado!",
      description: "O arquivo com os pacotes está sendo baixado.",
    });
  };

  const packages = [
    {
      title: "Aula Avulsa",
      description: "Para quem quer experimentar antes de fechar o pacote",
      sessions: 1,
      duration: "1 sessão",
      pricePerSession: "R$ 100",
      totalPrice: "R$ 100",
      installments: "PIX ou cartão",
      icon: "🔥",
      badge: "Aula Avulsa",
      whatsappMessage: "Olá! Gostaria de agendar uma Aula Avulsa (R$ 100) para experimentar o Personal Training. Quando podemos conversar sobre disponibilidade?"
    },
    {
      title: "Pacote Mensal",  
      description: "Ideal para quem busca regularidade e disciplina",
      sessions: 8,
      duration: "1 mês",
      pricePerSession: "R$ 65",
      totalPrice: "R$ 520",
      installments: "até 3x no cartão",
      icon: "💪",
      badge: "Consistência",
      whatsappMessage: "Olá! Tenho interesse no Pacote Mensal (8 sessões por R$ 520) com parcelamento em até 3x no cartão. Podemos conversar sobre como começar?"
    },
    {
      title: "Pacote Trimestral",
      description: "Para quem quer compromisso e economia",
      sessions: 24,
      duration: "3 meses", 
      pricePerSession: "R$ 62,50",
      totalPrice: "R$ 1.500",
      installments: "até 8x sem juros",
      icon: "🚀",
      badge: "Evolução",
      whatsappMessage: "Olá! Gostaria de contratar o Pacote Trimestral (24 sessões por R$ 1.500) com parcelamento em até 8x sem juros. Vamos conversar sobre os detalhes?"
    },
    {
      title: "Pacote Semestral",
      description: "Foco total em mudança de vida e resultados duradouros",
      sessions: 48,
      duration: "6 meses",
      pricePerSession: "R$ 60", 
      totalPrice: "R$ 2.880",
      installments: "até 10x sem juros",
      icon: "🏆",
      badge: "Transformação",
      whatsappMessage: "Olá! Quero investir na minha transformação com o Pacote Semestral (48 sessões por R$ 2.880) com parcelamento em até 10x sem juros. Quando podemos conversar?"
    }
  ];

  return (
    <div className="min-h-screen bg-background mobile-container">
      {/* Hero Section with Background Image */}
      <div 
        className="relative bg-cover bg-center bg-fixed mobile-hero"
        style={{ backgroundImage: `url(${fitnessHero})` }}
      >
        <Header />
      </div>

      {/* Plan Suggestion Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-muted/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Não Sabe Qual Plano Escolher?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Responda nossa avaliação rápida e receba uma recomendação personalizada baseada no seu perfil
            </p>
          </div>
          
          <PlanSuggestion />
        </div>
      </section>

      {/* Packages Section */ }
      <section data-section="packages" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Escolha Seu Pacote
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Oferecemos diferentes opções para atender suas necessidades e objetivos específicos
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {packages.map((pkg, index) => (
              <PackageCard key={index} {...pkg} />
            ))}
          </div>

          <div className="mb-12 sm:mb-16">
            <PlanComparison />
          </div>

          <ComparisonTable />

          <DownloadSection onDownloadPDF={handleDownloadPDF} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;