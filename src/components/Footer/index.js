import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FiPhone } from 'react-icons/fi';
import {
  FaChevronRight,
  FaFacebookF,
  FaGooglePlusG,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from 'react-icons/fa';

import {
  Container,
  NewsLetter,
  Main,
  HelpCenter,
  Attendence,
  Certificates,
  Institutional,
  PaymentMethods,
  Signature,
} from './styles';

export default function Footer() {
  return (
    <Container>
      <NewsLetter>
        <AiOutlineMail size={29} />
        <strong>Cadastre-se e receba ofertas exclusivas</strong>

        <form>
          <input type="text" placeholder="E-mail" />
          <button type="submit">
            <FaChevronRight />
          </button>
        </form>

        <ul>
          <a href="/#">
            <FaFacebookF size={28} />
          </a>
          <a href="/#">
            <FaGooglePlusG size={28} />
          </a>
          <a href="/#">
            <FaTwitter size={28} />
          </a>
          <a href="/#">
            <FaInstagram size={28} />
          </a>
          <a href="/#">
            <FaPinterestP size={28} />
          </a>
          <a href="/#">
            <FaYoutube size={28} />
          </a>
        </ul>
      </NewsLetter>

      <Main>
        <HelpCenter>
          <span>Central de ajuda</span>
          <a href="/#">Central de Atendimento</a>
          <a href="/#">Envio e Entrega</a>
          <a href="/#">Navegando e Comprando</a>
          <a href="/#">Trocas e Devoluções</a>
          <a href="/#">Fale Conosco</a>
          <a href="/#">Mapa do Site</a>
        </HelpCenter>
        <Institutional>
          <span>Institucional</span>
          <a href="/#">Quem somos</a>
          <a href="/#">Nossas lojas</a>
          <a href="/#">Política de Privacidade</a>
          <a href="/#">Afiliados</a>
        </Institutional>
        <Attendence>
          <span>Atendimento</span>
          <div>
            <FiPhone size={32} color="#563B32" />
            <div>
              <strong>TELEVENDAS 0800 - 0000 | SAC 0800 - 0000</strong>
              <span>Horário de Atendimento</span>
              <span>De segunda a sexta das 00 as 00</span>
            </div>
          </div>
        </Attendence>
        <Certificates>
          <span>Certificados</span>
          <img src="/assets/imgs/certificate.png" alt="" />
        </Certificates>
      </Main>

      <PaymentMethods>
        <div>
          <span>Formas de pagamento</span>
          <div>
            <img src="/assets/imgs/mastercard.png" alt="" />
          </div>
          <div>
            <img src="/assets/imgs/visa.png" alt="" />
          </div>
          <div>
            <img src="/assets/imgs/americanexpress.png" alt="" />
          </div>
          <div>
            <img src="/assets/imgs/dinners_club.png" alt="" />
          </div>
          <div>
            <img src="/assets/imgs/elo.png" alt="" />
          </div>
          <div>
            <img src="/assets/imgs/boleto.png" alt="" />
          </div>
        </div>
      </PaymentMethods>

      <Signature>
        <div>
          <div>
            <p>
              Lorem Ipsum Dolor Sit - CNPJ 60.306.289/0007-99 - Av. Lorem Ipsum,
              3103 – lj 74/74 a / Piso Campo Belo - CEP 04029-902 - Indianópolis
              - São Paulo - SP
            </p>
            <p>Nayara Marra. © 2018 - Todos os direitos reservados.</p>
          </div>
          <img src="/assets/imgs/rakuten_logo.png" alt="" />
        </div>
      </Signature>
    </Container>
  );
}
