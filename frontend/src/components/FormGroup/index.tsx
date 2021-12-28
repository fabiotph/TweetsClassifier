import { RadioGroup, FormControlLabel, FormLabel, FormControl, Button, FormHelperText } from '@mui/material'
import { useState } from 'react';
import { RadioLabel, Radio } from './styles';

const sxRadio = {
  '& .MuiSvgIcon-root': {
    fontSize: 30,
  },
}

export const FormGroup = () => {
  const [value, setValue] = useState<string>('');

  const handleRadioChange = (event: any) => {
    if (event) setValue(event.target.value);
  };

  const sendRequest = () => {};

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
          type="submit"
          size='large'
          disableElevation={true}
          variant="contained"
          sx={{ 'marginTop': '20px' }}
          onClick={sendRequest}
          disabled={(value === "") ? true : false}>
          Confirmar
        </Button>
      </FormControl>
  );
}