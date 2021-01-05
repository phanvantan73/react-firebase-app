import React from 'react';
import { Carousel, Image } from 'antd';

import { ImageWrapper, ImageContainer } from './style';

function ImageBlock() {
  const imageUrl = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
  const numbers = [1, 2, 3, 4, 5];

  return (
    <ImageContainer>
      <Carousel autoplay effect="fade">
        {numbers.map((it, idx) => (<ImageWrapper key={idx}>
          <Image
            src={imageUrl}
          />
        </ImageWrapper>))}
      </Carousel>
    </ImageContainer>
  );
}

export default ImageBlock;
