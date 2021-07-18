/* eslint-disable no-unreachable */
import React from 'react';
import Rating from 'components/UI/Rating/Rating';
import 'react-multi-carousel/lib/styles.css';
import Grid3Card from '../Grid3Card/Grid3Card';

const PostGrid = ({
  id, 
  name,
  rating, 
  review
}) => {

  return (
    <>
      <Grid3Card
        isCarousel={true}
        // favorite={<Tag color={badgeStatus() && badgeStatus().color}>{badgeStatus() && badgeStatus().text}</Tag>}
        name={name}
        // rating={rating}
        review={review}
        rating={<Rating rating={rating} ratingCount={rating} type="bulk" />}
      />
    </>
  );
};

export default PostGrid;
