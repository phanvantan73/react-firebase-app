import React from 'react';
import { range } from 'lodash';
import { Carousel, Image } from 'antd';

import { ImageWrapper, ImageContainer } from './style';

function ImageBlock() {
  const imageUrl = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';

  return (
    <ImageContainer>
      <Carousel autoplay effect="fade">
        {range(5).map((_, idx) => (<ImageWrapper key={idx}>
          <Image
            src={imageUrl}
          />
        </ImageWrapper>))}
      </Carousel>
    </ImageContainer>
  );
}

export default ImageBlock;
