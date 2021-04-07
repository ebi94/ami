import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Wrapper = styled.div`
    width: 100%;
    background-color: ${themeGet('color.1', '#ffffff')};
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100%;
    padding: 47px 0 66px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    @media only screen and (max-width: 480px) {
        padding: 60px 0 50px;
    }
`;

export const Title = styled.h2`
    letter-spacing: 2px;
    margin-bottom: 0px;
    padding-bottom: 1rem;
    line-height: 1;
    font-size: 1.75rem;
    font-weight: 700;
`;

export const Description = styled.p`
    color: #858d96 !important;
    padding-top: 30px;
    font-size: 20px;
    max-width: 1100px;
`;

export const Border = styled.div`
    background-color: ${themeGet('primary.0', '#008489')};
    width: 150px;
    height: 2px;
    margin-right: auto;
    margin-left: auto;
`;

export default Wrapper;