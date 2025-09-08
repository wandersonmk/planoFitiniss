import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const packages = [
  {
    name: "Avulsa",
    sessions: 1,
    pricePerSession: "R$ 100",
    totalPrice: "R$ 100",
    installments: "PIX ou cartão",
    profile: "Testar antes de decidir"
  },
  {
    name: "Mensal",
    sessions: 8,
    pricePerSession: "R$ 65",
    totalPrice: "R$ 520",
    installments: "até 3x no cartão",
    profile: "Regularidade e disciplina"
  },
  {
    name: "Trimestral",
    sessions: 24,
    pricePerSession: "R$ 62,50",
    totalPrice: "R$ 1.500",
    installments: "até 8x sem juros",
    profile: "Compromisso e economia"
  },
  {
    name: "Semestral",
    sessions: 48,
    pricePerSession: "R$ 60",
    totalPrice: "R$ 2.880",
    installments: "até 10x sem juros",
    profile: "Transformação e resultados duradouros"
  }
];

export const ComparisonTable = () => {
  return (
    <Card className="w-full bg-card/50 backdrop-blur-sm border-border/50">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-xl sm:text-2xl font-bold text-center mb-2">
          Resumo dos Valores
        </CardTitle>
        <p className="text-muted-foreground text-center text-sm sm:text-base">
          Compare todos os pacotes e escolha o melhor para você
        </p>
      </CardHeader>
      <CardContent className="p-2 sm:p-6">
        <div className="overflow-x-auto -mx-2 sm:mx-0">
          <Table className="min-w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold text-xs sm:text-sm whitespace-nowrap">Pacote</TableHead>
                <TableHead className="font-semibold text-xs sm:text-sm whitespace-nowrap">Sessões</TableHead>
                <TableHead className="font-semibold text-xs sm:text-sm whitespace-nowrap">Valor/aula</TableHead>
                <TableHead className="font-semibold text-xs sm:text-sm whitespace-nowrap">Total</TableHead>
                <TableHead className="font-semibold text-xs sm:text-sm whitespace-nowrap">Parcelamento</TableHead>
                <TableHead className="font-semibold text-xs sm:text-sm whitespace-nowrap hidden lg:table-cell">Perfil Ideal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {packages.map((pkg) => (
                <TableRow key={pkg.name} className="hover:bg-muted/50">
                  <TableCell className="font-medium text-primary text-xs sm:text-sm whitespace-nowrap">
                    {pkg.name}
                  </TableCell>
                  <TableCell className="text-xs sm:text-sm">{pkg.sessions}</TableCell>
                  <TableCell className="font-semibold text-confidence text-xs sm:text-sm whitespace-nowrap">
                    {pkg.pricePerSession}
                  </TableCell>
                  <TableCell className="font-bold text-energy text-sm sm:text-lg whitespace-nowrap">
                    {pkg.totalPrice}
                  </TableCell>
                  <TableCell className="text-muted-foreground text-xs sm:text-sm whitespace-nowrap">
                    {pkg.installments}
                  </TableCell>
                  <TableCell className="text-xs sm:text-sm hidden lg:table-cell">
                    {pkg.profile}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {/* Mobile-friendly profile info */}
        <div className="mt-4 lg:hidden">
          <h4 className="font-semibold text-sm mb-2">Perfil Ideal:</h4>
          <div className="space-y-2">
            {packages.map((pkg) => (
              <div key={pkg.name} className="text-xs">
                <span className="font-medium text-primary">{pkg.name}:</span>{" "}
                <span className="text-muted-foreground">{pkg.profile}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};