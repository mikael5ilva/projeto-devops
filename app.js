const http = require('http');

// As configurações do host e da porta
const hostname = '0.0.0.0'; // Essencial para Docker
const port = 5001;

// --- Conteúdo da página HTML com CSS embutido ---
const htmlContent = `
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Servidor Online!</title>
    <style>
        /* Estilos gerais para a página */
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: #f0f2f5;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            color: #333;
        }

        /* O contêiner principal com efeito de "cartão" */
        .container {
            text-align: center;
            background-color: #ffffff;
            padding: 40px 50px;
            border-radius: 12px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            transform: translateY(-20px);
            transition: all 0.3s ease;
        }

        .container:hover {
            transform: translateY(-25px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }

        /* Estilo do título principal */
        h1 {
            color: #1877f2;
            font-size: 2.5rem;
            margin-bottom: 10px;
        }

        /* Estilo do parágrafo */
        p {
            font-size: 1.1rem;
            color: #666;
            line-height: 1.6;
        }
        
        /* Estilo para a mensagem original, como uma nota de rodapé */
        .footer-note {
            margin-top: 30px;
            font-size: 0.9rem;
            color: #aaa;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>Servidor Node.js no Ar!</h1>
        <p>Professor... preciso da sua compreensão nesse momento.</p>
        <p>Este servidor, rodando em um container Docker na AWS EC2.</p>
        <p class="footer-note">Preciso da sua ajuda pra não ser tão prejudicado</p>
    </div>

</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  
  res.end(htmlContent);
});

server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
  console.log('Acesse pelo IP público da sua EC2 na porta 5001.');
});
