import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";

interface DownloadSectionProps {
  onDownloadPDF: () => void;
}

export const DownloadSection = ({ onDownloadPDF }: DownloadSectionProps) => {
  return (
    <Card className="w-full bg-card/50 backdrop-blur-sm border-border/50 mt-8">
      <CardContent className="p-6 text-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-gradient-primary rounded-full p-4">
            <FileText className="h-8 w-8 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Leve nossos preços sempre com você
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
              Baixe nossa tabela completa de preços em PDF para consultar quando quiser ou compartilhar com amigos
            </p>
          </div>
          <Button 
            onClick={onDownloadPDF}
            size="lg"
            className="bg-gradient-primary text-primary-foreground hover:opacity-90 font-semibold px-6 py-3 rounded-lg shadow-glow flex items-center gap-2"
          >
            <Download className="h-5 w-5" />
            Baixar Tabela de Preços (PDF)
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
