import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ArrowRight, TrendingUp, Clock, CreditCard } from "lucide-react";

interface Plan {
  id: string;
  title: string;
  price: number;
  priceFormatted: string;
  sessions: number;
  duration: string;
  pricePerSession: number;
  pricePerSessionFormatted: string;
  installments: string;
  badge: string;
  icon: string;
  whatsappMessage: string;
}

const plans: Plan[] = [
  {
    id: "avulsa",
    title: "Aula Avulsa",
    price: 100,
    priceFormatted: "R$ 100",
    sessions: 1,
    duration: "1 sessão",
    pricePerSession: 100,
    pricePerSessionFormatted: "R$ 100",
    installments: "PIX ou cartão",
    badge: "Aula Avulsa",
    icon: "🔥",
    whatsappMessage: "Olá! Gostaria de contratar a Aula Avulsa (R$ 100) para experimentar. Quando podemos conversar?"
  },
  {
    id: "mensal",
    title: "Pacote Mensal",
    price: 520,
    priceFormatted: "R$ 520",
    sessions: 8,
    duration: "1 mês",
    pricePerSession: 65,
    pricePerSessionFormatted: "R$ 65",
    installments: "até 3x no cartão",
    badge: "Consistência",
    icon: "💪",
    whatsappMessage: "Olá! Quero contratar o Pacote Mensal (8 sessões por R$ 520) com parcelamento. Vamos conversar?"
  },
  {
    id: "trimestral",
    title: "Pacote Trimestral",
    price: 1500,
    priceFormatted: "R$ 1.500",
    sessions: 24,
    duration: "3 meses",
    pricePerSession: 62.5,
    pricePerSessionFormatted: "R$ 62,50",
    installments: "até 8x sem juros",
    badge: "Evolução",
    icon: "🚀",
    whatsappMessage: "Olá! Quero contratar o Pacote Trimestral (24 sessões por R$ 1.500) com parcelamento em até 8x. Podemos conversar?"
  },
  {
    id: "semestral",
    title: "Pacote Semestral",
    price: 2880,
    priceFormatted: "R$ 2.880",
    sessions: 48,
    duration: "6 meses",
    pricePerSession: 60,
    pricePerSessionFormatted: "R$ 60",
    installments: "até 10x sem juros",
    badge: "Transformação",
    icon: "🏆",
    whatsappMessage: "Olá! Quero contratar o Pacote Semestral (48 sessões por R$ 2.880) para minha transformação completa!"
  }
];

export const PlanComparison = () => {
  const [plan1, setPlan1] = useState<string>("");
  const [plan2, setPlan2] = useState<string>("");

  const selectedPlan1 = plans.find(p => p.id === plan1);
  const selectedPlan2 = plans.find(p => p.id === plan2);

  const calculateSavings = () => {
    if (!selectedPlan1 || !selectedPlan2) return null;
    
    const savings = (selectedPlan1.pricePerSession - selectedPlan2.pricePerSession) * Math.min(selectedPlan1.sessions, selectedPlan2.sessions);
    const betterPlan = selectedPlan1.pricePerSession < selectedPlan2.pricePerSession ? selectedPlan1 : selectedPlan2;
    const worsePrice = selectedPlan1.pricePerSession > selectedPlan2.pricePerSession ? selectedPlan1.pricePerSession : selectedPlan2.pricePerSession;
    const betterPrice = selectedPlan1.pricePerSession < selectedPlan2.pricePerSession ? selectedPlan1.pricePerSession : selectedPlan2.pricePerSession;
    
    return {
      savings: Math.abs(savings),
      betterPlan,
      percentageSaved: ((worsePrice - betterPrice) / worsePrice * 100).toFixed(0)
    };
  };

  const handleWhatsAppClick = (plan: Plan) => {
    const phoneNumber = "5511999999999"; // IMPORTANTE: Substitua pelo seu número
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(plan.whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const savings = calculateSavings();

  const resetComparison = () => {
    setPlan1("");
    setPlan2("");
  };

  return (
    <Card className="w-full bg-card/50 backdrop-blur-sm border-border/50">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center mb-2 flex items-center justify-center gap-2">
          <TrendingUp className="h-6 w-6 text-confidence" />
          Compare Planos e Veja a Economia
        </CardTitle>
        <p className="text-muted-foreground text-center text-sm sm:text-base">
          Selecione dois planos para comparar preços, benefícios e ver quanto você pode economizar
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Primeiro Plano</label>
            <Select value={plan1} onValueChange={setPlan1}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione um plano..." />
              </SelectTrigger>
              <SelectContent>
                {plans.map((plan) => (
                  <SelectItem key={plan.id} value={plan.id} disabled={plan.id === plan2}>
                    <div className="flex items-center gap-2">
                      <span>{plan.icon}</span>
                      <span>{plan.title}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Segundo Plano</label>
            <Select value={plan2} onValueChange={setPlan2}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione um plano..." />
              </SelectTrigger>
              <SelectContent>
                {plans.map((plan) => (
                  <SelectItem key={plan.id} value={plan.id} disabled={plan.id === plan1}>
                    <div className="flex items-center gap-2">
                      <span>{plan.icon}</span>
                      <span>{plan.title}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {selectedPlan1 && selectedPlan2 && (
          <div className="space-y-6">
            {/* Comparação dos Planos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[selectedPlan1, selectedPlan2].map((plan, index) => (
                <div key={plan.id} className="bg-muted/30 rounded-lg p-4 relative">
                  {savings && plan.id === savings.betterPlan.id && (
                    <Badge className="absolute -top-2 -right-2 bg-green-600 text-white">
                      Melhor Preço
                    </Badge>
                  )}
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-2">{plan.icon}</div>
                    <Badge className="bg-gradient-primary text-primary-foreground mb-2">
                      {plan.badge}
                    </Badge>
                    <h3 className="font-bold text-lg">{plan.title}</h3>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Valor Total:</span>
                      <span className="font-bold text-lg text-energy">{plan.priceFormatted}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Por Sessão:</span>
                      <span className="font-semibold text-confidence">{plan.pricePerSessionFormatted}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sessões:</span>
                      <span className="font-medium">{plan.sessions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duração:</span>
                      <span className="font-medium">{plan.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Parcelamento:</span>
                      <span className="font-medium text-success">{plan.installments}</span>
                    </div>
                  </div>

                  <Button 
                    onClick={() => handleWhatsAppClick(plan)}
                    className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white"
                    size="sm"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contratar
                  </Button>
                </div>
              ))}
            </div>

            {/* Análise de Economia */}
            {savings && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700 dark:text-green-300 mb-2">
                    💰 Economia Identificada!
                  </div>
                  <p className="text-green-600 dark:text-green-400 font-medium">
                    O <strong>{savings.betterPlan.title}</strong> oferece <strong>{savings.percentageSaved}% de economia</strong> por sessão
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-green-700 dark:text-green-300">Economia por Aula</div>
                      <div className="text-lg font-bold text-green-800 dark:text-green-200">
                        R$ {(Math.max(selectedPlan1.pricePerSession, selectedPlan2.pricePerSession) - 
                             Math.min(selectedPlan1.pricePerSession, selectedPlan2.pricePerSession)).toFixed(2)}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-green-700 dark:text-green-300">Melhor Custo-Benefício</div>
                      <div className="text-lg font-bold text-green-800 dark:text-green-200">
                        {savings.betterPlan.pricePerSessionFormatted}/aula
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-green-700 dark:text-green-300">Facilidades</div>
                      <div className="text-sm font-medium text-green-800 dark:text-green-200">
                        {savings.betterPlan.installments}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-center">
              <Button 
                onClick={resetComparison}
                variant="outline"
                className="flex items-center gap-2"
              >
                <ArrowRight className="h-4 w-4" />
                Nova Comparação
              </Button>
            </div>
          </div>
        )}

        {(!selectedPlan1 || !selectedPlan2) && (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">⚖️</div>
            <p className="text-muted-foreground">
              Selecione dois planos acima para ver a comparação detalhada
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
