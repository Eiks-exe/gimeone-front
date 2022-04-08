import * as React from 'react';
import Link from 'next/link';
import { Box, Grid, Typography } from '@mui/material';
import { Link as SLink } from "react-scroll";
import { navLinksStyle } from "./navStyle"
interface INavLinkProps {
  name: string;
  to : string;
}

const NavLink: React.FunctionComponent<INavLinkProps> = (props) => {
  return(
    <Grid item xs sx={navLinksStyle}>
      <SLink to={props.to} smooth="true" duration={500}>
        <Typography >
          {props.name}
        </Typography>
      </SLink>
    </Grid>
  ) ;
};

export default NavLink;