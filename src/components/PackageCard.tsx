import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface PackageProps {
  title: string;
  description: string;
  sessions: number;
  duration: string;
  pricePerSession: string;
  totalPrice: string;
  installments?: string;
  badge?: string;
  icon: string;
  whatsappMessage?: string;
}

export const PackageCard = ({ 
  title, 
  description, 
  sessions, 
  duration, 
  pricePerSession, 
  totalPrice, 
  installments,
  badge,
  icon,
  whatsappMessage 
}: PackageProps) => {
  const handleWhatsAppClick = () => {
    // IMPORTANTE: Substitua pelo seu número do WhatsApp no formato: 55 + DDD + número
    // Exemplo: 5511999999999 (55 + 11 + 999999999)
    const phoneNumber = "5511999999999"; 
    const message = whatsappMessage || `Olá! Gostaria de saber mais sobre o ${title}.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <Card className="relative h-full bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105 mx-auto w-full max-w-sm sm:max-w-none">
      {badge && (
        <Badge className="absolute -top-2 -right-2 bg-gradient-primary text-primary-foreground px-2 sm:px-3 py-1 font-semibold text-xs sm:text-sm">
          {badge}
        </Badge>
      )}
      <CardHeader className="text-center pb-3 sm:pb-4 p-4 sm:p-6">
        <div className="text-3xl sm:text-4xl mb-2">{icon}</div>
        <CardTitle className="text-lg sm:text-xl font-bold text-foreground leading-tight">{title}</CardTitle>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{description}</p>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {totalPrice}
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground">
            {pricePerSession} por aula
          </div>
        </div>
        
        <div className="space-y-2 text-xs sm:text-sm">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Duração:</span>
            <span className="font-medium text-foreground text-right">{duration}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Sessões:</span>
            <span className="font-medium text-foreground text-right">{sessions} (1h cada)</span>
          </div>
          {installments && (
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Parcelamento:</span>
              <span className="font-medium text-confidence text-right">{installments}</span>
            </div>
          )}
        </div>
        
        <Button 
          onClick={handleWhatsAppClick}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <MessageCircle className="h-4 w-4" />
          Contratar via WhatsApp
        </Button>
      </CardContent>
    </Card>
  );
};