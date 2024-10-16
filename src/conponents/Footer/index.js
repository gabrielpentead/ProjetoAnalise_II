// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-top--left">
          <a href="/">Contato</a>
          <a href="/">Termos de Serviço</a>
          <a href="/">Política de Privacidade</a>
          <a href="/">Cancelamento, Troca e Reembolso</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom--left">
          <a href="/">
            <img className="footer-image" src="/imagens/instagram.png" alt="Instagram" />
          </a>
          <a href="/">
            <img className="footer-image" src="/imagens/facebook.png" alt="Facebook" />
          </a>
        </div>
        <div>
          &copy; 2024 FeiraGreen. Todos os direitos reservados.
        </div>
        <div className="footer-bottom--right">
          <img className="footer-image" src="/imagens/mastercard.png" alt="MasterCard" />
          <img className="footer-image" src="/imagens/paypal.png" alt="PayPal" />
          <img className="footer-image" src="/imagens/visa.png" alt="Visa" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;