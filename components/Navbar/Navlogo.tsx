import * as React from 'react';
import { Typography } from '@mui/material';
import Link from 'next/link';

interface INavlogoProps {
    label: string;
}
//TODO made the logo a Link and add an icon 

const Navlogo: React.FunctionComponent<INavlogoProps> = (props) => {
  return(
      <Link href="/">
        <Typography
        fontFamily={"Anton"}
        color="white"
        variant='h4'
        sx={{
          cursor:'pointer'
        }}
        >
          {props.label? props.label : "companyName"} 
        </Typography>
      </Link>
  ) ;
};

export default Navlogo;