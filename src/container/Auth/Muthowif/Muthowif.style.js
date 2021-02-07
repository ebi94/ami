import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding-bottom: 30px;

  @media only screen and (max-width: 1200px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media only screen and (max-width: 480px) {
    padding: 0 25px;
  }
`;

export const Header = styled.div`
  text-align: center;
  padding: 60px 0;
  @media only screen and (max-width: 480px) {
    padding: 40px 0;
  }
`;

export const FormWrapper = styled.div`
  box-shadow: 1px 1px 5px -1px #a3a3a3;
  padding: 10% 20%;
  border-radius: 7px;
}
`;

export const Title = styled.h2`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const TitleInfo = styled.p`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 25px;
  line-height: 18px;
  margin-bottom: 30px;
`;

export default Wrapper;

