import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Clock, CreditCard, FileText, MapPin, MessageCircle } from "lucide-react";

export const Footer = () => {
  const handleWhatsAppClick = () => {
    // IMPORTANTE: Substitua pelo seu número do WhatsApp no formato: 55 + DDD + número
    // Exemplo: 5511999999999 (55 + 11 + 999999999)
    const phoneNumber = "5511999999999"; 
    const message = "Olá! Gostaria de saber mais sobre os pacotes de Personal Training e agendar uma avaliação.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const observations = [
    {
      icon: <Clock className="h-5 w-5 text-confidence" />,
      text: "Todas as sessões têm duração de 1 hora."
    },
    {
      icon: <CreditCard className="h-5 w-5 text-confidence" />,
      text: "Pagamento antecipado via PIX ou cartão (parcelamento sem juros disponível)."
    },
    {
      icon: <MapPin className="h-5 w-5 text-success" />,
      text: "Aulas podem ser ministradas na academia onde você treina (com autorização da academia). Recomendamos a rede Movee para novos alunos ou consulte se sua academia permite personal externo."
    },
    {
      icon: <AlertCircle className="h-5 w-5 text-warning" />,
      text: "Para reagendamento, solicitamos aviso com 24h de antecedência."
    },
    {
      icon: <FileText className="h-5 w-5 text-confidence" />,
      text: "Contrato simples e recibo disponível para todos os clientes."
    }
  ];

  return (
    <footer className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-foreground">
              Observações Importantes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {observations.map((obs, index) => (
                <div key={index} className="flex items-start gap-3">
                  {obs.icon}
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{obs.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-primary rounded-lg text-center">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                Pronto para começar sua transformação?
              </h4>
              <p className="text-white/90 text-sm sm:text-base mb-4">
                Entre em contato para agendar sua avaliação e começar sua jornada fitness!
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 mx-auto"
              >
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </footer>
  );
};