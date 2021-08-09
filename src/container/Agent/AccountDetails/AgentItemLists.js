import React, { useEffect, useState } from 'react';
import SectionGrid from 'components/SectionGrid/SectionGrid';
import { ReservationPlaceholder } from 'components/UI/ContentLoader/ContentLoader';
import useDataApi from 'library/hooks/useDataApi';
import { SINGLE_POST_PAGE } from 'settings/constant';
import { getReservationListbyMuthowif } from 'services/reservation';

const AgentItemLists = () => {
  const { data, loadMoreData, loading, total } = useDataApi('/data/agent.json');
  const dataList = useDataApi('/data/reservation.json');
  const listed_post = data[0] && data[0].listed_post ? data[0].listed_post : [];
  // const dataReservation = dataList && dataList.data ? dataList.data : [];

  const [dataReservation, setDataReservation] = useState([]);

  const getDataReservation = async () => {
    const res = await getReservationListbyMuthowif();
    if (res && res.status === 200) {
      const data = res && res.data  && res.data.data;
      setDataReservation(data);
    };
  };

  useEffect(() => {
    getDataReservation();
  }, [])

  return (
    <SectionGrid
      link={SINGLE_POST_PAGE}
      data={dataReservation}
      loading={loading}
      limit={8}
      totalItem={total.length}
      columnWidth={[1 / 1]}
      placeholder={<ReservationPlaceholder />}
      handleLoadMore={loadMoreData}
    />
  );
};

export default AgentItemLists;
