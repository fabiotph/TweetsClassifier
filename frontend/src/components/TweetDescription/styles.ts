import styled from "styled-components";
import { Typography } from "@mui/material";
import { COLOR_PRIMARY } from '../../config';
import { Twitter } from '@mui/icons-material';

export const Container = styled.div`
    margin-bottom: 30px !important;
`;

export const TitleContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px !important;
`;

export const TwitterIcon = styled(Twitter)`
    margin: 0px 5px;
    margin-top: -5px;
    font-size: 40px !important;
    color: rgba(33, 150, 243, 0.6) !important;
`;


export const Title = styled(Typography)`
    font-size: 24px !important;
    font-weight: bolder !important;
    color: ${COLOR_PRIMARY};
    overflow-wrap: break-word;
    text-align: center;
`;

export const ContentMessage = styled.div`
    display: flex;
    margin-bottom: 7px !important;
    background-color: rgba(33, 150, 243, 0.2);
    border: 2px dashed rgba(0, 0, 0, 0.3);
    justify-content: center;
    padding: 15px 10px;
    border-radius: 0px 25px 25px 25px;
`;

export const TweetMessage = styled(Typography)`
    font-size: 22px !important;
    color: ${COLOR_PRIMARY};
    overflow-wrap: break-word;
    text-align: justify;
    width: fit-content;
`;

export const TextChip = styled(Typography)`
    margin-right: 5px !important;
    font-size: 13px !important;
`;

export const ContentChip = styled.div`
    display: flex;
    align-items: center;
`;
