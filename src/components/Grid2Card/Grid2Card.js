import React from 'react';
import PropTypes from 'prop-types';
import { Button, Divider } from 'antd';
import GridCardWrapper, {
  ImageWrapper,
  FavoriteIcon,
  ContentWrapper,
  LocationArea,
  TitleArea,
  PriceArea,
  RatingArea,
  MetaWrapper,
  ButtonGroup,
  ActionButton,
  RightContent,
  LeftContent
} from './Grid2Card.style';

const Grid2Card = ({
  startDate,
  endDate,
  route,
  id,
  flightCode,
  totalDays,
  airline,
  travelName,
  className,
  favorite,
  location,
  title,
  price,
  rating,
  editBtn,
  viewDetailsBtn,
  children,
}) => {
  let classes = viewDetailsBtn || editBtn ? `has_btn ${className}` : className;
  return (
    <GridCardWrapper className={`grid_card ${classes}`.trim()}>
      <ContentWrapper className="content_wrapper">
        {travelName && <LocationArea>booked by - {travelName}</LocationArea>}
        <Divider />
        <LeftContent>
          <RatingArea>Date Range : </RatingArea>
          {startDate && <RatingArea>{startDate + ' - ' + endDate}</RatingArea>}
          {route && <RatingArea className="rating">Route : {route === 1 ? 'Jeddah - Jeddah' : 'Jeddah - Mecca'}</RatingArea>}
        </LeftContent>
        <RightContent>
          {flightCode && <RatingArea className="rating">Flight Code : {flightCode}</RatingArea>}
          {airline && <RatingArea className="rating"> Airline : {airline}</RatingArea>}
        </RightContent>
        <ActionButton>
          <a href={`/detail-reservation/${id}`}>
            <Button type="success">View Details</Button>
          </a>
          <Button type="primary" danger>Ignore</Button>
          <Button type="primary">Accept</Button>
        </ActionButton>
        <MetaWrapper className="meta_wrapper">
          {/* {viewDetailsBtn || editBtn ? (
            <ButtonGroup className="button_group">
              {viewDetailsBtn}
              {editBtn}
            </ButtonGroup>
          ) : null} */}
        </MetaWrapper>
      </ContentWrapper >

      {favorite && <FavoriteIcon>{favorite}</FavoriteIcon>}
    </GridCardWrapper >
  );
};

Grid2Card.propTypes = {
  className: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  price: PropTypes.string,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  location: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  editBtn: PropTypes.element,
  viewDetailsBtn: PropTypes.element,
};

export default Grid2Card;
