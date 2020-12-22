import React from 'react';

import { FiArrowRight } from 'react-icons/fi';
import { Content, Title, Subtitle, Card, Questions } from './styles';

const Faq: React.FC = () => {
  return (
    <>
      <Title>Como funcionam o Github Jobs?</Title>
      <Subtitle>
        Github Jobs é um ótimo lugar para atrair os melhores talentos técnicos
        para os cargos de desenvolvimento de software da sua empresa. Veja como:
      </Subtitle>
      <Content>
        <Card>
          <img
            src="https://jobs.github.com/images/modules/faq/screenshot-editor.jpg"
            alt="Listing editor"
          />
          <strong>Crie e visualize sua vaga</strong>
          <p>
            Veja exatamente como sua vaga ficará antes de publicá-la. Antes de
            criar uma vaga, você deve fazer login com sua conta GitHub e
            verificar seu endereço de e-mail.
          </p>
        </Card>
        <FiArrowRight size={30} />
        <Card>
          <img
            src="https://www.paymentscardsandmobile.com/wp-content/uploads/2015/01/Multi-Channel-Payments.jpg"
            alt="payment"
          />
          <strong>Pague com os principais cartões de crédito</strong>
          <p>
            Faturamento disponível mediante solicitação para pedidos em massa.
            Para mais informações envie um email para jobs@github.com.
          </p>
        </Card>
        <FiArrowRight size={30} />
        <Card>
          <img
            src="https://jobs.github.com/images/modules/faq/screenshot-listing.jpg"
            alt="Sample listing"
          />
          <strong>Sua listagem vai ao ar imediatamente</strong>
          <p>
            As vagas permaneceram no ar por 30 dias. Enviaremos a você um recibo
            e um link para editar a vaga.
          </p>
        </Card>
      </Content>
      <Questions>
        Dúvidas? Envie uma solicitação através do nosso
        <a
          rel="noreferrer"
          href="https://support.github.com/contact?tags=jobs-support"
          target="_blank"
        >
          formulário de contato
        </a>
        e vamos conversar.
      </Questions>
    </>
  );
};

export default Faq;
