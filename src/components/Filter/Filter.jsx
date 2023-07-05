import { useDispatch } from 'react-redux';
import { TextField, InputAdornment } from '@mui/material';
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';
import { setFilter } from 'redux/contacts/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <ContentPasteSearchOutlinedIcon />
            </InputAdornment>
          ),
        }}
        onChange={e => dispatch(setFilter(e))}
        fullWidth
        id="input-with-icon-textfield"
        placeholder="Search by name"
        type="text"
        variant="standard"
        name="filter"
      />
    </>
  );
};

export default Filter;
