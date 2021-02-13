import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/UI/Heading/Heading';
import Text from 'components/UI/Text/Text';
import Container from 'components/UI/Container/Container';
import GlideCarousel, {
  GlideSlide,
} from 'components/UI/GlideCarousel/GlideCarousel';
import SearchForm from './SearchForm';
import BannerWrapper, { SearchWrapper } from './Search.style';
// slider images
import bannerBg1 from 'assets/images/banner/bg1.jpg';
import bannerBg2 from 'assets/images/banner/bg2.jpg';
import bannerBg3 from 'assets/images/banner/bg4.jpg';

const SearchArea = ({ searchTitleStyle, searchDescriptionStyle, useSearch }) => {
  return (
    <BannerWrapper>
      <GlideCarousel
        controls={false}
        options={{ gap: 0, autoplay: 5000, animationDuration: 1000 }}
        bullets={true}
        numberOfBullets={3}
      >
        <>
          <GlideSlide>
            <img src={bannerBg1} alt="Banner 1" />
          </GlideSlide>
          <GlideSlide>
            <img src={bannerBg2} alt="Banner 2" />
          </GlideSlide>
          <GlideSlide>
            <img src={bannerBg3} alt="Banner 3" />
          </GlideSlide>
        </>
      </GlideCarousel>
      {useSearch && (
        <Container>
          <SearchWrapper>
            <Heading
              {...searchTitleStyle}
              content="AMI - Asosiasi Muthowif Indonesia"
            />
            <Text
              {...searchDescriptionStyle}
              content="compares prices to help you find the lowest
            price on the right Muthowif for you."
            />
            <SearchForm />
          </SearchWrapper>
        </Container>
      )}
    </BannerWrapper>
  );
};

SearchArea.propTypes = {
  searchTitleStyle: PropTypes.object,
  searchDescriptionStyle: PropTypes.object,
  useSearch: PropTypes.bool
};

SearchArea.defaultProps = {
  searchTitleStyle: {
    color: '#2C2C2C',
    fontSize: ['20px', '24px', '28px'],
    lineHeight: ['28px', '30px', '30px'],
    mb: '9px',
  },
  searchDescriptionStyle: {
    color: '#2C2C2C',
    fontSize: '15px',
    lineHeight: '24px',
    mb: '30px',
  },
  useSearch: false
};

export default SearchArea;
