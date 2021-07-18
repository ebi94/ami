import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'antd';
import GridCardWrapper, {
  FavoriteIcon,
  ContentWrapper,
  LocationArea,
  TitleArea,
  RatingArea,
  LeftContent
} from './Grid3Card.style';

const Grid3Card = ({
  id,
  name,
  className,
  review,
  rating,
}) => {
  return (
    <GridCardWrapper className={`grid_card`.trim()}>
      <ContentWrapper className="content_wrapper">
        {name && <LocationArea>oleh - {name}</LocationArea>}
        <Divider />
        <LeftContent>
          {rating && <RatingArea className="rating">{rating}</RatingArea>}
          {review && <TitleArea>{review}</TitleArea>}
        </LeftContent>
      </ContentWrapper>
    </GridCardWrapper>
  );
};

Grid3Card.propTypes = {
  className: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  price: PropTypes.string,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  location: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  editBtn: PropTypes.element,
  viewDetailsBtn: PropTypes.element,
};

export default Grid3Card;
