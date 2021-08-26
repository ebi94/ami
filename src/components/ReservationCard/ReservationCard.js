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
  travelName,
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
      case 1:
        return {
          color: "#17a2b8",
          text: "Booked"
        };
        break;
      case 2:
        return {
          color: "#0779fb",
          text: "Paid"
        };
        break;
      case 3:
        return {
          color: "#41a846",
          text: "Confirmed"
        };
        break;
      case 4:
        return {
          color: "#ffc107",
          text: "Canceled"
        };
        break;
      case 5:
        return {
          color: "#17a2b8",
          text: "On the way"
        };
        break;
      case 6:
        return {
          color: "#0779fb",
          text: "Finish"
        }
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
        id={id}
        isCarousel={true}
        status={status}
        favorite={<Tag color={badgeStatus() && badgeStatus().color}>{badgeStatus() && badgeStatus().text}</Tag>}
        travelName={travelName}
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
