# 🏋️‍♂️ Personal Trainer - Sistema de Planos e Preços

Um sistema completo e moderno para apresentação de pacotes de Personal Training, com funcionalidades avançadas de comparação, avaliação personalizada e integração com WhatsApp.

## ✨ Funcionalidades

### 📊 **Apresentação de Pacotes**
- Cards responsivos com detalhes de cada plano
- Preços por sessão e valores totais
- Opções de parcelamento destacadas
- Badges personalizados para cada categoria

### ⚖️ **Comparador de Planos**
- Comparação lado a lado entre dois planos quaisquer
- Cálculo automático de economia
- Análise de custo-benefício
- Destaque do melhor plano

### 🎯 **Avaliação Personalizada**
- Quiz interativo de 5 perguntas
- Recomendação automática baseada no perfil
- Sugestão do plano ideal com justificativa
- Sistema de progressão visual

### 📱 **Integração WhatsApp**
- Botões diretos em cada plano
- Mensagens personalizadas por pacote
- Contato geral para dúvidas
- Links automáticos para conversa

### 📄 **Geração de PDF**
- Download completo da tabela de preços
- Formatação profissional
- Todas as informações organizadas
- Ideal para compartilhamento

### 📱 **Design Responsivo**
- Otimizado para mobile, tablet e desktop
- Interface moderna com Tailwind CSS
- Componentes da shadcn/ui
- Experiência fluida em todos os dispositivos

## 🛠️ Tecnologias Utilizadas

- **React** + **TypeScript** - Interface moderna e tipada
- **Vite** - Build tool ultra-rápido
- **Tailwind CSS** - Estilização utilitária
- **shadcn/ui** - Componentes premium
- **Lucide React** - Ícones modernos
- **html2pdf** - Geração de PDFs

## 📦 Pacotes Disponíveis

| Pacote | Sessões | Valor Total | Por Sessão | Parcelamento |
|--------|---------|-------------|------------|--------------|
| **Aula Avulsa** | 1 | R$ 100 | R$ 100 | PIX ou cartão |
| **Mensal** | 8 | R$ 520 | R$ 65 | até 3x no cartão |
| **Trimestral** | 24 | R$ 1.500 | R$ 62,50 | até 8x sem juros |
| **Semestral** | 48 | R$ 2.880 | R$ 60 | até 10x sem juros |

## 🚀 Como Usar

### Instalação
```bash
# Clone o repositório
git clone https://github.com/wandersonmk/planoFitiniss.git

# Entre na pasta
cd planoFitiniss

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

### Configuração do WhatsApp
⚠️ **IMPORTANTE**: Antes de usar, substitua o número do WhatsApp nos arquivos:

1. `src/components/PackageCard.tsx` - linha ~15
2. `src/components/Footer.tsx` - linha ~9
3. `src/components/PlanSuggestion.tsx` - linha ~105
4. `src/components/PlanComparison.tsx` - linha ~107

Substitua `5511999999999` pelo seu número no formato: `55 + DDD + número`

### Personalização
- **Cores**: Modifique as variáveis CSS em `src/index.css`
- **Planos**: Edite os dados em `src/pages/Index.tsx`
- **Textos**: Ajuste as mensagens e descrições nos componentes

## 📂 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/                 # Componentes base shadcn/ui
│   ├── Header.tsx          # Cabeçalho principal
│   ├── PackageCard.tsx     # Cards dos pacotes
│   ├── ComparisonTable.tsx # Tabela de resumo
│   ├── PlanComparison.tsx  # Comparador de planos
│   ├── PlanSuggestion.tsx  # Avaliação personalizada
│   ├── DownloadSection.tsx # Seção de download PDF
│   └── Footer.tsx          # Rodapé com observações
├── pages/
│   └── Index.tsx           # Página principal
├── utils/
│   └── pdfGenerator.ts     # Geração de PDFs
└── assets/
    └── fitness-hero.jpg    # Imagem de fundo
```

## 🎨 Componentes Principais

### PackageCard
Cards responsivos para apresentação individual dos planos com botão WhatsApp integrado.

### PlanComparison
Sistema inteligente de comparação entre dois planos com análise de economia automática.

### PlanSuggestion
Quiz de 5 perguntas que recomenda o plano ideal baseado no perfil do cliente.

### ComparisonTable
Tabela completa com todos os planos e informações para comparação rápida.

## 🌟 Diferenciais

- **Interface Profissional**: Design moderno e clean
- **UX Otimizada**: Fluxo intuitivo de decisão de compra
- **Conversão Focada**: Múltiplos pontos de contato via WhatsApp
- **Mobile First**: Experiência perfeita em dispositivos móveis
- **Performance**: Loading rápido e interações fluidas

## 📱 Preview

O sistema oferece uma experiência completa:

1. **Visualização** dos pacotes disponíveis
2. **Comparação** direta entre planos
3. **Avaliação** personalizada com recomendação
4. **Contato** direto via WhatsApp
5. **Download** de tabela em PDF

## 🤝 Contribuição

Sinta-se livre para contribuir com melhorias:

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com ❤️ para profissionais de Personal Training que querem otimizar suas vendas e oferecer uma experiência premium aos clientes.
