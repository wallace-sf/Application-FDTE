import React from 'react';
import { FaTruck, FaCreditCard, FaInstagram } from 'react-icons/fa';
import { MdLock } from 'react-icons/md';

import DefaultLayout from '../_layouts/default';
import Carousel from '~/components/Carousel';
import Footer from '~/components/Footer';
import discount from '~/assets/icons/discount.svg';

import api from '~/api.json';

import {
  DeskPromoBanner,
  DeskSecondary,
  DeskBuyLook,
  DeskRings,
  DeskLaunch,
  CarouselContainer,
  Divider,
  DeskInstagram,
} from './styles';

export default function Home() {
  const {
    carousel: carouselImages,
    deskSecondary,
    deskBuyLook,
    deskRings,
    deskLaunch,
    deskCore,
    deskInstagram,
  } = api;

  return (
    <DefaultLayout>
      <>
        <Carousel
          carouselImages={carouselImages}
          numberOfCards={1}
          slidesToScroll={1}
        />

        <DeskPromoBanner>
          <FaTruck />
          <span>
            Frete grátis acima de <strong>R$ 200,00</strong>
          </span>
          <FaCreditCard />
          <span>Até 10x sem juros</span>
          <img src={discount} alt="discount" height="20" />
          <span>
            <strong>10% off</strong>
            <span>à vista no cartão ou boleto</span>
          </span>
          <MdLock />
          <span>
            <strong>Segurança</strong> em todas as etapas da compra
          </span>
        </DeskPromoBanner>

        <DeskSecondary>
          {deskSecondary.map(item => (
            <div key={item.image}>
              <span>{item.title}</span>
              <img key={item.image} src={item.image} alt="" />
            </div>
          ))}
        </DeskSecondary>

        <DeskBuyLook>
          <div>
            <span>{deskBuyLook.title}</span>
            <img src={deskBuyLook.image} alt="" />
          </div>
        </DeskBuyLook>

        <DeskRings>
          {deskRings.map(item => (
            <div key={item.title}>
              <img src={item.image} alt="" />
              <div>
                <span>{item.title}</span>
                <button type="button">Show now</button>
              </div>
            </div>
          ))}
        </DeskRings>

        <DeskLaunch>
          <header>
            <img src={deskLaunch.header.linesShape} alt="" />
            <span>Lançamentos</span>
          </header>

          <CarouselContainer>
            <Carousel
              carouselImages={deskLaunch.carousel}
              numberOfCards={3}
              slidesToScroll={3}
              isSecondary
              outsideChevron
            />
          </CarouselContainer>
        </DeskLaunch>

        <DeskSecondary numberOfCards>
          {deskCore.map(item => (
            <div
              key={item.image}
              style={
                item.grow
                  ? {
                      minWidth: '742px',
                      gridRowEnd: 'span 2',
                    }
                  : {
                      minWidth: '509px',
                    }
              }
            >
              <span>{item.title}</span>
              <img key={item.image} src={item.image} alt="" />
            </div>
          ))}
        </DeskSecondary>

        <Divider />

        <DeskInstagram>
          <button type="button">
            <FaInstagram size={27} color="#626161" />
          </button>
          <span>@NAYARAMARRA</span>

          <CarouselContainer>
            <Carousel
              carouselImages={deskInstagram}
              numberOfCards={6}
              slidesToScroll={6}
              outsideChevron
              gutter={21}
              general
            />
          </CarouselContainer>
        </DeskInstagram>

        <Divider />

        <Footer />
      </>
    </DefaultLayout>
  );
}
