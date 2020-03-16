import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { AiOutlineShopping } from 'react-icons/ai';

import logo from '~/assets/imgs/logo.png';

import {
  Container,
  UpperHeader,
  MainHeader,
  Content,
  InputControl,
  LowerNav,
} from './styles';

export default function Header() {
  return (
    <Container>
      <UpperHeader>
        <ul>
          <li>
            <button type="button">Meus pedidos</button>
          </li>
          <li>
            <button type="button">Entrar/Cadastre-se</button>
          </li>
        </ul>
      </UpperHeader>
      <MainHeader>
        <Content>
          <InputControl action="/#">
            <input
              type="text"
              name="searchProduct"
              placeholder="Digite o que você procura..."
            />
            <button type="submit">
              <FiSearch size={20} color="#636363" />
            </button>
          </InputControl>
          <a href="/">
            <img src={logo} alt="" />
          </a>
          <ul>
            <li>
              <button type="button">
                <FaHeart size={18} color="#b3b3b3" />
                <span>LISTA DE DESEJOS</span>
              </button>
            </li>
            <li>
              <button type="button">
                <AiOutlineShopping size={25} color="#b3b3b3" />
                <span>Itens</span>
              </button>
            </li>
          </ul>
        </Content>
        <LowerNav>
          <a href="/#">Novidades</a>
          <a href="/#">Anéis</a>
          <a href="/#">Brincos</a>
          <a href="/#">Colares</a>
          <a href="/#">Conjuntos</a>
          <a href="/#">Sales</a>
        </LowerNav>
      </MainHeader>
    </Container>
  );
}
