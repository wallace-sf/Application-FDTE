import React, { useState, useEffect } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { FaChevronRight, FaChevronLeft, FaEye } from 'react-icons/fa';
import PropTypes from 'prop-types';

import { Container, ItemImage, DiscountSeal } from './styles';

export default function Carousel({
  carouselImages,
  numberOfCards,
  slidesToScroll,
  outsideChevron,
  gutter,
  isSecondary,
  general,
}) {
  const [images, setImages] = useState([]);
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  useEffect(() => {
    async function loadCarouselImages() {
      setImages(carouselImages);
    }

    loadCarouselImages();
  }, [carouselImages]);

  return (
    <Container isSecondary>
      <ItemsCarousel
        infiniteLoop
        gutter={gutter}
        activePosition="center"
        chevronWidth={60}
        disableSwipe={false}
        alwaysShowChevrons
        numberOfCards={numberOfCards}
        slidesToScroll={slidesToScroll}
        outsideChevron={outsideChevron}
        showSlither={false}
        firstAndLastGutter={false}
        activeItemIndex={activeItemIndex}
        requestToChangeActive={value => setActiveItemIndex(value)}
        rightChevron={
          <FaChevronRight color={!isSecondary && !general ? '#fff' : '#000'} />
        }
        leftChevron={
          <FaChevronLeft color={!isSecondary && !general ? '#fff' : '#000'} />
        }
      >
        {images.map(item => (
          <ItemImage key={item.image} isSecondary={isSecondary}>
            {isSecondary ? (
              <>
                <DiscountSeal>
                  {item.discount && (
                    <strong>
                      50% <br />
                      OFF
                    </strong>
                  )}
                  <div>
                    <button type="button">
                      <FaEye size={18} />
                      <span>Espiar</span>
                    </button>
                    <div />
                    <img src={item.image} alt="" />
                  </div>
                </DiscountSeal>
                <p>LOREM IPSUM DOLOR SIT AMET CLARITAS ADHEMAS</p>
                <p>
                  <s>R$ 1040,00</s>
                  <strong>R$ 900,00</strong>
                </p>
                <p>2x de R$ 450,00 sem juros</p>
                <button type="button">Comprar</button>
              </>
            ) : (
              <img src={item.image} alt="" />
            )}
          </ItemImage>
        ))}
      </ItemsCarousel>
    </Container>
  );
}

Carousel.propTypes = {
  carouselImages: PropTypes.array.isRequired,
  outsideChevron: PropTypes.bool,
  isSecondary: PropTypes.bool,
  gutter: PropTypes.number,
};

Carousel.defaultProps = {
  outsideChevron: false,
  isSecondary: false,
  gutter: 0,
};
