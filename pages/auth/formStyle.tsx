import { SxProps } from "@mui/material";

const formStyle: SxProps = {
    color: 'sucess',
    backgroundColor: '#1a1a1a',
    width: 350,
    '& label': {
        color: 'white',
    },
    '& label.Mui-focused': {
        color: 'white',
    },
    '& :hover fieldset': {
        borderColor: 'white'
    },
    '& .MuiOutlinedInput-root': {
        color:'white',
        backgroundColor: '#1a1a1a'
    }

}

export default formStyle;