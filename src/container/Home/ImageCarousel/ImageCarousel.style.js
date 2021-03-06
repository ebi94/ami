import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const LocationWrapper = styled.div`
  padding: 52px 0;
  @media only screen and (max-width: 480px) {
    padding: 30px 0;
  }
`;

export const CarouselSection = styled.div`
  .glide__slide {
    transition: transform 0.3s ease;

    .image_card {
      > a {
        @media only screen and (max-width: 1600px) {
          height: 310px;
        }
        @media only screen and (max-width: 991px) {
          height: 280px;
        }
      }
    }
  }

  .glide__controls {
    margin: 0;
    padding: 0;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease;
    @media only screen and (max-width: 480px) {
      opacity: 1;
      visibility: visible;
    }
  }

  .glide__prev--area,
  .glide__next--area {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${themeGet('color.1', '#ffffff')};
    box-shadow: 0 3px 6px ${themeGet('boxShadow.1', 'rgba(0, 0, 0, 0.16)')};
    transition: background-color 0.2s ease;
    position: absolute;
    top: calc(50% - 36px / 2);

    svg {
      height: 22px;
      width: auto;
      fill: ${themeGet('primary.0', '#008489')};
    }

    &:hover {
      background-color: ${themeGet('primary.0', '#008489')};
      svg {
        fill: ${themeGet('color.1', '#ffffff')};
      }
    }
  }

  .glide__prev--area {
    left: -18px;
  }

  .glide__next--area {
    right: -18px;
  }

  &:hover {
    .glide__controls {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const Title = styled.h2`
    letter-spacing: 2px;
    margin-bottom: 0px;
    padding-bottom: 1rem;
    line-height: 1;
    font-size: 1.75rem;
    font-weight: 700;
    text-align: center;
`;

export const Border = styled.div`
    background-color: ${themeGet('primary.0', '#008489')};
    width: 150px;
    height: 2px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 50px;
`;

export default LocationWrapper;
