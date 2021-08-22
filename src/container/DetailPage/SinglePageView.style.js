import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import singlePostBgImg from 'assets/images/single-post-bg.jpg';

const SinglePageWrapper = styled.div`
  padding-bottom: 56px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 30px;
  }
`;

export default SinglePageWrapper;
