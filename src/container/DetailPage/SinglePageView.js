/* eslint-disable no-unreachable */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert'
import { Document, Page } from 'react-pdf';
import { Button, Row, Col, Divider, Tag } from 'antd';
import { useLocation } from 'library/hooks/useLocation';
import Card from 'components/UI/Card/Card';
import Container from 'components/UI/Container/Container';
import SinglePageWrapper from './SinglePageView.style';
import { AuthContext } from 'context/AuthProvider';

const SinglePage = ({ match }) => {
  const { id } = useParams();
  const { href } = useLocation();

  const { detailTravel, detailReservation, editReservation } = useContext(AuthContext);

  const [dataDetail, setDataDetail] = useState({});
  const [dataTravel, setDataTravel] = useState({});
  const [disableBtn, setDisableBtn] = useState(false);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };


  const changePage = (offset) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  const previousPage = () => {
    changePage(-1);
  }

  const nextPage = () => {
    changePage(1);
  }


  let history = useHistory();

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

  const handleAccept = async () => {
    const res = await editReservation(id, 3);
    if (res.status === 200) {
      swal("Terima Kasih", 'Reservasi telah diterima', "success").then(() => {
        history.go(`/detail-reservation/${id}`);
      });
    } else {
      swal("Error !", "error").then(() => {
        history.go(`/detail-reservation/${id}`);
      });
    }
  };

  const handleCancel = async () => {
    const res = await editReservation(id, 4);
    if (res.status === 200) {
      swal("Terima Kasih", 'Reservasi telah dibatalkan', "warning").then(() => {
        history.go(`/detail-reservation/${id}`);
      });
    } else {
      swal("Error !", "error").then(() => {
        history.go(`/detail-reservation/${id}`);
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
    getDataReservation(id);
  }, [id]);

  useEffect(() => {
    if (dataDetail.status > 2) {
      setDisableBtn(true);
    }
  }, [dataDetail.status])


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
        <br />
        <Card title="Jadwal Perjalanan / Itenary">
          <Divider />
          <Row>
            <Col style={{ textAlign: 'center', margin: '0 auto' }}>
              <Document
                file={`${process.env.REACT_APP_BACKEND_API}/files/itenary/${dataDetail.pdfItenaryUrl}`}
                onLoadSuccess={() => onDocumentLoadSuccess()}
              >
                <Page pageNumber={pageNumber} />
              </Document>
              <p>Page {pageNumber} of {numPages}</p>
              <div>
                <div>
                  <button
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={() => previousPage()}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={() => nextPage()}
                  >
                    Next
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
        <Row>
          <Col span="24" style={{ textAlign: 'end' }}>
            <Button type="primary" style={{ margin: 10 }} disabled={disableBtn} danger onClick={() => cancel()}>Ignore</Button>
            <Button type="primary" style={{ margin: 10 }} disabled={disableBtn} onClick={() => confirm()}>Accept</Button>
          </Col>
        </Row>
      </Container>
    </SinglePageWrapper>
  );
};

export default SinglePage;
