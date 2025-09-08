import html2pdf from 'html2pdf.js';

export const generatePDF = () => {
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Pacotes Personal Trainer</title>
  <style>
    body { 
      font-family: Arial, sans-serif; 
      margin: 30px; 
      color: #333; 
      line-height: 1.5;
    }
    h1 { 
      color: #e74c3c; 
      text-align: center; 
      margin-bottom: 30px; 
      font-size: 24px; 
      border-bottom: 2px solid #e74c3c;
      padding-bottom: 10px;
    }
    .package { 
      margin: 20px 0; 
      padding: 15px; 
      border: 1px solid #ddd; 
      border-radius: 5px;
    }
    .package h3 { 
      color: #e74c3c; 
      margin-top: 0; 
      font-size: 16px; 
    }
    .package p { 
      margin: 5px 0; 
      font-size: 14px;
    }
    table { 
      width: 100%; 
      border-collapse: collapse; 
      margin: 20px 0; 
      font-size: 12px;
    }
    th, td { 
      border: 1px solid #ddd; 
      padding: 8px; 
      text-align: left; 
    }
    th { 
      background-color: #3498db; 
      color: white; 
      font-weight: bold; 
    }
    tr:nth-child(even) { 
      background-color: #f9f9f9; 
    }
    .observations { 
      background: #f5f5f5; 
      padding: 15px; 
      margin: 20px 0; 
      border-radius: 5px; 
      font-size: 12px;
    }
    .observations ul { 
      margin-left: 15px; 
    }
    .price { 
      color: #e74c3c; 
      font-weight: bold; 
    }
  </style>
</head>
<body>
  <h1>Pacotes Personal Trainer</h1>
  
  <div class="package">
    <h3>Aula Avulsa - Experimental</h3>
    <p><strong>Duração:</strong> 1 sessão individual (1 hora)</p>
    <p><strong>Valor:</strong> <span class="price">R$ 100,00</span> (PIX ou cartão)</p>
  </div>

  <div class="package">
    <h3>Pacote Mensal - Consistência</h3>
    <p><strong>Duração:</strong> 1 mês - 8 sessões (2 por semana)</p>
    <p><strong>Valor por aula:</strong> <span class="price">R$ 65,00</span></p>
    <p><strong>Valor total:</strong> <span class="price">R$ 520,00</span> (até 3x no cartão)</p>
  </div>

  <div class="package">
    <h3>Pacote Trimestral - Evolução</h3>
    <p><strong>Duração:</strong> 3 meses - 24 sessões (2 por semana)</p>
    <p><strong>Valor por aula:</strong> <span class="price">R$ 62,50</span></p>
    <p><strong>Valor total:</strong> <span class="price">R$ 1.500,00</span> (até 8x sem juros)</p>
  </div>

  <div class="package">
    <h3>Pacote Semestral - Transformação</h3>
    <p><strong>Duração:</strong> 6 meses - 48 sessões (2 por semana)</p>
    <p><strong>Valor por aula:</strong> <span class="price">R$ 60,00</span></p>
    <p><strong>Valor total:</strong> <span class="price">R$ 2.880,00</span> (até 10x sem juros)</p>
  </div>

  <table>
    <tr>
      <th>Pacote</th>
      <th>Sessões</th>
      <th>Valor/aula</th>
      <th>Total</th>
      <th>Parcelamento</th>
    </tr>
    <tr>
      <td>Avulsa</td>
      <td>1</td>
      <td class="price">R$ 100</td>
      <td class="price">R$ 100</td>
      <td>PIX ou cartão</td>
    </tr>
    <tr>
      <td>Mensal</td>
      <td>8</td>
      <td class="price">R$ 65</td>
      <td class="price">R$ 520</td>
      <td>até 3x no cartão</td>
    </tr>
    <tr>
      <td>Trimestral</td>
      <td>24</td>
      <td class="price">R$ 62,50</td>
      <td class="price">R$ 1.500</td>
      <td>até 8x sem juros</td>
    </tr>
    <tr>
      <td>Semestral</td>
      <td>48</td>
      <td class="price">R$ 60</td>
      <td class="price">R$ 2.880</td>
      <td>até 10x sem juros</td>
    </tr>
  </table>

  <div class="observations">
    <strong>Informações importantes:</strong>
    <ul>
      <li>Sessões de 1 hora cada</li>
      <li>Pagamento antecipado (PIX ou cartão)</li>
      <li>Aulas na academia do aluno (com autorização). Recomendamos rede Movee</li>
      <li>Reagendamento: aviso 24h antecedência</li>
    </ul>
  </div>
</body>
</html>
  `;

  // Criar elemento temporário para renderizar o HTML
  const element = document.createElement('div');
  element.innerHTML = htmlContent;
  
  // Configurações do PDF
  const opt = {
    margin: 0.5,
    filename: 'pacotes-personal-trainer.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  // Gerar e baixar o PDF
  html2pdf().set(opt).from(element).save();
};