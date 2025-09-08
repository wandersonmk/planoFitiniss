import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-2xl font-bold text-foreground mb-2">Página não encontrada</h2>
          <p className="text-muted-foreground">
            Ops! A página que você está procurando não existe.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button 
            onClick={() => window.history.back()}
            variant="outline"
            className="w-full"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
          
          <Button 
            onClick={() => window.location.href = '/'}
            className="w-full bg-gradient-primary text-white hover:opacity-90"
          >
            <Home className="mr-2 h-4 w-4" />
            Ir para Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
