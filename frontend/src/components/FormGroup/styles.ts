import styled from "styled-components";
import { Radio as RadioDefault, Typography } from '@mui/material';
import { COLOR_PRIMARY } from '../../config';

export const Radio = styled(RadioDefault)`
    color: ${COLOR_PRIMARY};
`;

export const RadioLabel = styled(Typography)`
    font-size: 24px !important;
    color: ${COLOR_PRIMARY};
    height: 31px;
`;