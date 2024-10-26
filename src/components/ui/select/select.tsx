import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TGiftCard } from '../../../utils/types';

type TSelectProps = {
  label: string;
  gifts: TGiftCard[];
  nominal: string;
  setNominal: React.Dispatch<React.SetStateAction<string>>;
};

export const SelectInput = (props: TSelectProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    props.setNominal(event.target.value);
  };

  return (
    <>
      <Box sx={{ width: '100%', background: '#fff' }}>
        <FormControl fullWidth>
          <InputLabel
            id='select-label'
            sx={{
              fontSize: 'clamp(0.875rem, 0.7452rem + 0.5769vw, 1.25rem)',
              background: '#fff',
              fontFamily: 'IBM PLex Mono',
              transition: 'all 0.3s ease'
            }}
          >
            {props.label}
          </InputLabel>
          <Select
            labelId='select-label'
            id='select'
            value={props.nominal}
            label={props.nominal}
            onChange={handleChange}
            sx={{
              fontSize: 'clamp(0.875rem, 0.7452rem + 0.5769vw, 1.25rem)',
              color: '#1976D2',
              fontFamily: 'IBM PLex Mono',
              transition: 'all 0.3s ease'
            }}
          >
            {props.gifts.map((gift, index) => (
              <MenuItem
                key={index}
                sx={{ fontFamily: 'IBM PLex Mono' }}
                value={gift.ID}
              >
                {gift.NAME}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};
