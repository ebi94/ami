/* eslint-disable no-unreachable */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { Row, Col, Divider, Tag } from 'antd';
import { useLocation } from 'library/hooks/useLocation';
import Card from 'components/UI/Card/Card';
import Container from 'components/UI/Container/Container';
import SinglePageWrapper from './SinglePageView.style';
import { AuthContext } from 'context/AuthProvider';

const SinglePage = ({ match }) => {
  const { id } = useParams();
  const { href } = useLocation();

  const { detailTravel, detailReservation } = useContext(AuthContext);

  const [dataDetail, setDataDetail] = useState({});
  const [dataTravel, setDataTravel] = useState({});

  const badgeStatus = () => {
    switch (dataDetail && dataDetail.status) {
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

  const getDataTravel = async (id) => {
    const res = await detailTravel(id);
    const data = res && res.data && res.data.data;
    setDataTravel(data);
  }

  const getDataReservation = async (id) => {
    const res = await detailReservation(id);
    const data = res && res.data && res.data.data;
    const travelId = data && data.travelId;
    if (travelId) {
      getDataTravel(travelId);
    }
    setDataDetail(data);
  };

  useEffect(() => {
    getDataReservation(id);
  }, [id]);


  return (
    <SinglePageWrapper>
      <Container>
        <Row style={{ marginTop: 25, marginBottom: 25 }}>
          <Col span="18"><h3>Reservasi ID : {id} <br /> Jadwal : {dataDetail && dataDetail.startDate} - {dataDetail && dataDetail.endDate}</h3></Col>
          <Col span="6"><Tag color={badgeStatus() && badgeStatus().color}>{badgeStatus() && badgeStatus().text}</Tag></Col>
        </Row>
        <Card title="Data Travel" style={{ width: 300 }}>
          <Divider />
          <Row>
            <Col span="12">
              <p style={{ marginBottom: 0 }}>Nama Travel</p>
              <h3 style={{ fontWeight: 600 }}>{dataTravel && dataTravel.travelName ? dataTravel.travelName : '-'}</h3>
            </Col>
            <Col span="12">
              <p style={{ marginBottom: 0 }}>Kontak Travel</p>
              <h3 style={{ fontWeight: 600 }}>{dataTravel && dataTravel.phone ? dataTravel.phone : '-'} / {dataTravel && dataTravel.email ? dataTravel.email : '-'}</h3>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <p style={{ marginBottom: 0 }}>Nama PIC Travel</p>
              <h3 style={{ fontWeight: 600 }}>{dataDetail && dataDetail.picName ? dataDetail.picName : '-'}</h3>
            </Col>
            <Col span="12">
              <p style={{ marginBottom: 0 }}>Kontak PIC Travel</p>
              <h3 style={{ fontWeight: 600 }}>{dataDetail && dataDetail.picContact ? dataDetail.picContact : '-'}</h3>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <p style={{ marginBottom: 0 }}>Jumlah Jamaah</p>
              <h3 style={{ fontWeight: 600 }}>{dataDetail && dataDetail.jmlJamaah ? dataDetail.jmlJamaah : '-'}</h3>
            </Col>
          </Row>
        </Card>
        <br />
        <Card title="Data Penerbangan" style={{ width: 300 }}>
          <Divider />
          <Row>
            <Col span="12">
              <p style={{ marginBottom: 0 }}>Jam Keberangkatan</p>
              <h3 style={{ fontWeight: 600 }}>{dataDetail && dataDetail.departured ? dataDetail.departured : '-'}</h3>
            </Col>
            <Col span="12">
              <p style={{ marginBottom: 0 }}>Jam Tiba</p>
              <h3 style={{ fontWeight: 600 }}>{dataDetail && dataDetail.arrived ? dataDetail.arrived : '-'}</h3>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <p style={{ marginBottom: 0 }}>Kode Penerbangan</p>
              <h3 style={{ fontWeight: 600 }}>{dataDetail && dataDetail.flightCode ? dataDetail.flightCode : '-'}</h3>
            </Col>
            <Col span="12">
              <p style={{ marginBottom: 0 }}>Maskapai</p>
              <h3 style={{ fontWeight: 600 }}>{dataDetail && dataDetail.airline ? dataDetail.airline : '-'}</h3>
            </Col>
          </Row>
        </Card>
      </Container>
    </SinglePageWrapper>
  );
};

export default SinglePage;
