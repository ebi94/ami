import React from 'react';
import Section2Grid from 'components/Section2Grid/Section2Grid';
import { PostPlaceholder } from 'components/UI/ContentLoader/ContentLoader';
import useDataApi from 'library/hooks/useDataApi';
import { SINGLE_POST_PAGE } from 'settings/constant';

const AgentFavItemLists = () => {
  const { data, loadMoreData, loading } = useDataApi('/data/agent.json');
    const dataList = useDataApi('/data/review.json');
  const dataReview = dataList && dataList.data ? dataList.data : [];

  return (
    <Section2Grid
      link={SINGLE_POST_PAGE}
      data={dataReview}
      loading={loading}
      limit={6}
      totalItem={dataReview.length}
      columnWidth={[1 / 2, 1 / 2, 1 / 3, 1 / 4, 1 / 5, 1 / 6]}
      placeholder={<PostPlaceholder />}
      handleLoadMore={loadMoreData}
    />
  );
};

export default AgentFavItemLists;
