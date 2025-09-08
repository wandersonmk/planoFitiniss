import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, RotateCcw, Target } from "lucide-react";

interface SuggestionResult {
  recommendedPlan: string;
  reason: string;
  planDetails: {
    title: string;
    price: string;
    sessions: number;
    duration: string;
    badge: string;
    icon: string;
    whatsappMessage: string;
    paymentInfo: string;
    pricePerSession: string;
  };
}

export const PlanSuggestion = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [suggestion, setSuggestion] = useState<SuggestionResult | null>(null);

  const questions = [
    {
      id: "experience",
      title: "Qual é sua experiência com exercícios físicos?",
      options: [
        { value: "beginner", label: "Iniciante - Pouca ou nenhuma experiência" },
        { value: "intermediate", label: "Intermediário - Pratico ocasionalmente" },
        { value: "advanced", label: "Avançado - Pratico regularmente há mais de 1 ano" }
      ]
    },
    {
      id: "goal",
      title: "Qual é seu principal objetivo?",
      options: [
        { value: "weight_loss", label: "Perder peso e definir o corpo" },
        { value: "muscle_gain", label: "Ganhar massa muscular" },
        { value: "fitness", label: "Melhorar condicionamento físico" },
        { value: "health", label: "Cuidar da saúde e bem-estar" }
      ]
    },
    {
      id: "commitment",
      title: "Quanto tempo você pode se comprometer?",
      options: [
        { value: "short", label: "Quero apenas experimentar primeiro" },
        { value: "medium", label: "1-3 meses para ver se me adapto" },
        { value: "long", label: "3-6 meses para resultados consistentes" },
        { value: "very_long", label: "6+ meses para transformação completa" }
      ]
    },
    {
      id: "frequency",
      title: "Quantas vezes por semana você pode treinar?",
      options: [
        { value: "1", label: "1 vez por semana" },
        { value: "2", label: "2 vezes por semana" },
        { value: "3", label: "3 vezes por semana" },
        { value: "4+", label: "4 ou mais vezes por semana" }
      ]
    },
    {
      id: "budget",
      title: "Qual sua disponibilidade de investimento mensal?",
      options: [
        { value: "low", label: "Até R$ 200" },
        { value: "medium", label: "R$ 200 - R$ 600" },
        { value: "high", label: "R$ 600 - R$ 1000" },
        { value: "premium", label: "Acima de R$ 1000" }
      ]
    }
  ];

  const calculateSuggestion = (): SuggestionResult => {
    const { experience, goal, commitment, frequency, budget } = answers;

    // Lógica de recomendação baseada nas respostas
    if (commitment === "short" || budget === "low") {
      return {
        recommendedPlan: "avulsa",
        reason: "Baseado no seu perfil, recomendamos começar com uma aula experimental para você conhecer nossa metodologia sem compromisso.",
        planDetails: {
          title: "Aula Avulsa",
          price: "R$ 100",
          sessions: 1,
          duration: "1 sessão",
          badge: "Aula Avulsa",
          icon: "🔥",
          whatsappMessage: "Olá! Vi a recomendação da avaliação online e gostaria de agendar uma Aula Avulsa (R$ 100) para experimentar. Quando podemos conversar?",
          paymentInfo: "Pagamento: PIX ou cartão à vista",
          pricePerSession: "R$ 100"
        }
      };
    }

    if (commitment === "medium" || (budget === "medium" && frequency === "2")) {
      return {
        recommendedPlan: "mensal",
        reason: "Seu perfil indica que você está pronto para um compromisso inicial de 1 mês, perfeito para criar o hábito do exercício.",
        planDetails: {
          title: "Pacote Mensal",
          price: "R$ 520",
          sessions: 8,
          duration: "1 mês",
          badge: "Consistência",
          icon: "💪",
          whatsappMessage: "Olá! Fiz a avaliação online e recebi a recomendação do Pacote Mensal (8 sessões por R$ 520). Gostaria de começar!",
          paymentInfo: "Facilite: até 3x de R$ 173 no cartão ou PIX à vista",
          pricePerSession: "R$ 65"
        }
      };
    }

    if (commitment === "long" || (experience === "intermediate" && budget === "high")) {
      return {
        recommendedPlan: "trimestral",
        reason: "Você demonstra estar pronto para um compromisso sério de 3 meses, ideal para ver resultados consistentes e desenvolver uma rotina sólida.",
        planDetails: {
          title: "Pacote Trimestral",
          price: "R$ 1.500",
          sessions: 24,
          duration: "3 meses",
          badge: "Evolução",
          icon: "🚀",
          whatsappMessage: "Olá! Fiz sua avaliação online e foi recomendado o Pacote Trimestral (24 sessões por R$ 1.500). Estou pronto para começar minha evolução!",
          paymentInfo: "Super facilidade: até 8x de R$ 187,50 sem juros",
          pricePerSession: "R$ 62,50"
        }
      };
    }

    return {
      recommendedPlan: "semestral",
      reason: "Seu perfil mostra que você está comprometido com uma transformação completa. O pacote semestral oferece o melhor custo-benefício e tempo necessário para mudanças duradouras.",
      planDetails: {
        title: "Pacote Semestral",
        price: "R$ 2.880",
        sessions: 48,
        duration: "6 meses",
        badge: "Transformação",
        icon: "🏆",
        whatsappMessage: "Olá! Completei sua avaliação online e foi recomendado o Pacote Semestral (48 sessões por R$ 2.880). Estou pronto para minha transformação completa!",
        paymentInfo: "Máxima facilidade: até 10x de R$ 288 sem juros",
        pricePerSession: "R$ 60"
      }
    };
  };

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({ ...prev, [questions[currentStep].id]: value }));
  };

  const nextQuestion = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const result = calculateSuggestion();
      setSuggestion(result);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setSuggestion(null);
  };

  const handleWhatsAppClick = () => {
    if (!suggestion) return;
    
    const phoneNumber = "5511999999999"; // IMPORTANTE: Substitua pelo seu número
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(suggestion.planDetails.whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToPackages = () => {
    const packagesSection = document.querySelector('[data-section="packages"]');
    if (packagesSection) {
      packagesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  if (suggestion) {
    return (
      <Card className="w-full max-w-2xl mx-auto bg-card/80 backdrop-blur-sm border-border/50">
        <CardHeader className="text-center">
          <div className="text-6xl mb-4">{suggestion.planDetails.icon}</div>
          <CardTitle className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
            <Target className="h-6 w-6 text-success" />
            Recomendação Personalizada
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <Badge className="bg-gradient-primary text-primary-foreground px-4 py-2 text-lg font-semibold mb-4">
              {suggestion.planDetails.badge}
            </Badge>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {suggestion.planDetails.title}
            </h3>
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1">
              {suggestion.planDetails.price}
            </div>
            <div className="text-sm text-muted-foreground mb-3">
              Apenas {suggestion.planDetails.pricePerSession} por aula
            </div>
            <div className="bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg p-3 mb-4">
              <p className="text-green-800 dark:text-green-200 font-medium text-sm">
                💳 {suggestion.planDetails.paymentInfo}
              </p>
            </div>
          </div>

          <div className="bg-muted/30 p-4 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">Por que essa recomendação?</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {suggestion.reason}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="text-center">
              <div className="font-semibold text-foreground">Sessões</div>
              <div className="text-muted-foreground">{suggestion.planDetails.sessions}</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-foreground">Duração</div>
              <div className="text-muted-foreground">{suggestion.planDetails.duration}</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={handleWhatsAppClick}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Contratar via WhatsApp
            </Button>
            <Button 
              onClick={resetQuiz}
              variant="outline"
              className="flex items-center justify-center gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Refazer Avaliação
            </Button>
          </div>

          <div className="mt-4 pt-4 border-t border-border/50">
            <p className="text-center text-sm text-muted-foreground mb-3">
              Esta recomendação não é ideal para você?
            </p>
            <Button 
              onClick={scrollToPackages}
              variant="ghost"
              className="w-full text-confidence hover:text-confidence/80 hover:bg-confidence/10"
            >
              Ver todos os planos disponíveis
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <Card className="w-full max-w-2xl mx-auto bg-card/80 backdrop-blur-sm border-border/50">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-foreground flex items-center justify-center gap-2">
          <Target className="h-6 w-6 text-confidence" />
          Encontre Seu Plano Ideal
        </CardTitle>
        <div className="w-full bg-muted rounded-full h-2 mt-4">
          <div 
            className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-2">
          Pergunta {currentStep + 1} de {questions.length}
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">
            {currentQuestion.title}
          </h3>
          <RadioGroup
            value={answers[currentQuestion.id] || ""}
            onValueChange={handleAnswer}
            className="space-y-3"
          >
            {currentQuestion.options.map((option) => (
              <div key={option.value} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                <Label 
                  htmlFor={option.value} 
                  className="text-sm leading-relaxed cursor-pointer flex-1"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        
        <div className="flex justify-between items-center pt-4">
          <Button 
            variant="outline" 
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
          >
            Voltar
          </Button>
          <Button 
            onClick={nextQuestion}
            disabled={!answers[currentQuestion.id]}
            className="bg-gradient-primary text-primary-foreground hover:opacity-90"
          >
            {currentStep === questions.length - 1 ? "Ver Recomendação" : "Próxima"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
