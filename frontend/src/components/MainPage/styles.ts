import styled from 'styled-components';
import { BG_COLOR_PRIMARY } from '../../config';


export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: fit-content;
    display: flex;
    justify-content: center;
    background-color: ${BG_COLOR_PRIMARY};
`;

export const Content = styled.div`
    width: 510px;
    padding: 10px;
    height: fit-content;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;