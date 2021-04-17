import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { defaults } from 'js-cookie';

const BenefitWrapper = styled.div`
    width: 30%;
    margin: 0 auto;
`;

export const Icon = styled.span`
    font-size: 35px;
    color: #198489;
`;

export const Description = styled.p`
    color: #858d96 !important;
    font-size: 20px;
`;

export default BenefitWrapper;