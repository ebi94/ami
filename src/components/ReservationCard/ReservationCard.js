/* eslint-disable no-unreachable */
import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import TextLink from 'components/UI/TextLink/TextLink';
import Rating from 'components/UI/Rating/Rating';
import { Tag } from 'antd';
import Favourite from 'components/UI/Favorite/Favorite';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Grid2Card from '../Grid2Card/Grid2Card';

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
    paritialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    paritialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const PostGrid = ({
  travelId,
  startDate,
  endDate,
  route,
  id,
  flightCode,
  totalDays,
  airline,
  status,
  title,
  rating,
  location,
  price,
  ratingCount,
  gallery,
  slug,
  link,
}) => {
  const badgeStatus = () => {
    switch (status) {
      case null:
        return {
          color: "#2db7f5",
          text: "Booked"
        };
        break;
      case 0:
        return {
          color: "#2db7f5",
          text: "Booked"
        };
        break;
      case 1:
        return {
          color: "#2db7f5",
          text: "Booked"
        };
        break;
      case 2:
        return {
          color: "#f50",
          text: "Cancel"
        };
        break;
      case 3:
        return {
          color: "#87d068",
          text: "Accepted"
        };
        break;
      default:
        return {
          color: "#f50",
          text: "Not Found"
        };
    }
  };

  return (
    <>
      <Grid2Card
        isCarousel={true}
        favorite={<Tag color={badgeStatus() && badgeStatus().color}>{badgeStatus() && badgeStatus().text}</Tag>}
        travelName={travelId}
        startDate={startDate}
        endDate={endDate}
        route={route}
        flightCode={flightCode}
        airline={airline}
        title={<TextLink link={`${link}/${slug}`} content={title} />}
        price={`Rp ${price}/ Day - Free Cancellation`}
        rating={<Rating rating={rating} ratingCount={ratingCount} type="bulk" />}
        viewDetailsBtn={
          <TextLink
            link={`${link}/${slug}`}
            icon={<FiExternalLink />}
            content="View Details"
          />
        }
      />
    </>
  );
};

export default PostGrid;
