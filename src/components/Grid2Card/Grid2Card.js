import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { Button, Divider } from 'antd';
import { AuthContext } from 'context/AuthProvider';
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
  status,
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

  const { editReservation } = useContext(AuthContext);

  const [disableBtn, setDisableBtn] = useState(false);

  let history = useHistory();


  const handleAccept = async () => {
    const res = await editReservation(id, 3);
    if (res.status === 200) {
      swal("Terima Kasih", 'Reservasi telah diterima', "success").then(() => {
        history.go('/dashboard');
      });
    } else {
      swal("Error !", "error").then(() => {
        history.go('/dashboard');
      });
    }
  };

  const handleCancel = async () => {
    const res = await editReservation(id, 4);
    if (res.status === 200) {
      swal("Terima Kasih", 'Reservasi telah dibatalkan', "warning").then(() => {
        history.go('/dashboard');
      });
    } else {
      swal("Error !", "error").then(() => {
        history.go('/dashboard');
      });
    }
  };

  const confirm = () => {
    swal({
      title: "Apakah anda yakin menerima reservasi ini ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDoIt) => {
      if (willDoIt) {
        handleAccept()
      }
    });
  };

  const cancel = () => {
    swal({
      title: "Apakah anda yakin menolak reservasi ini?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDoIt) => {
      if (willDoIt) {
        handleCancel()
      }
    });
  };

  useEffect(() => {
    if (status > 2) {
      setDisableBtn(true);
    }
  }, [status])

  return (
    <GridCardWrapper className={`grid_card ${classes}`.trim()}>
      <ContentWrapper className="content_wrapper">
        {travelName && <LocationArea>Booked by - {travelName}</LocationArea>}
        {id && <LocationArea>Reservation ID : {id}</LocationArea>}
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
          <Button type="primary" disabled={disableBtn} danger onClick={() => cancel()}>Ignore</Button>
          <Button type="primary" disabled={disableBtn} onClick={() => confirm()}>Accept</Button>
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
