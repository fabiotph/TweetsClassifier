import { RadioGroup, FormControlLabel, FormLabel, FormControl, Button, FormHelperText } from '@mui/material'
import { useState } from 'react';
import { RadioLabel, Radio } from './styles';
import { URL_BACKEND } from '../../config';
import axios from 'axios';

const sxRadio = {
  '& .MuiSvgIcon-root': {
    fontSize: 30,
  },
}

interface IFormGroup {
  currentTweetId: string;
  onSubmit: () => void;
}

export const FormGroup = (props: IFormGroup) => {
  const { currentTweetId, onSubmit } = props;

  const [classification, setClassification] = useState<string>('');

  const handleRadioChange = (event: any) => {
    if (event) setClassification(event.target.value);
  };

  const sendClassification = async ({skip} = {skip: false}) => {
    const { data, status } = await axios.post(`${URL_BACKEND}/classification`, {
      tweet_id: currentTweetId,
      classification: skip ? "" : classification,
    });

    if(status === 200)
      onSubmit();
  };

  return (
      <FormControl component="fieldset" required={true} sx={{'width': '100%'}}>
        <FormLabel component="legend">Classificação</FormLabel>
        <RadioGroup
          aria-label="classification"
          defaultValue={''}
          name="radio-group"
          onChange={handleRadioChange}
        >
          <FormControlLabel
            value={''}
            control={<Radio value="r" sx={sxRadio} />}
            label={<RadioLabel>Racismo</RadioLabel>}
          />
          <FormControlLabel
            value={''}
            control={<Radio value="h" sx={sxRadio} />}
            label={<RadioLabel>Homofobia</RadioLabel>}
          />
          <FormControlLabel
            value={''}
            control={<Radio value="o" sx={sxRadio} />}
            label={<RadioLabel>Ofensivo (apenas)</RadioLabel>}
          />
          <FormControlLabel
            value={''}
            control={<Radio value="n" sx={sxRadio} />}
            label={<RadioLabel>Não ofensivo</RadioLabel>}
          />
        </RadioGroup>
        <Button
          size='large'
          disableElevation={true}
          variant="contained"
          sx={{ 'marginTop': '20px' }}
          onClick={() => sendClassification()}
          disabled={(classification === "") ? true : false}>
          Confirmar
        </Button>

        <Button
          size='large'
          disableElevation={true}
          variant="text"
          sx={{ 'marginTop': '20px' }}
          onClick={() => sendClassification({skip: true})}>
          Pular
        </Button>
      </FormControl>
  );
}