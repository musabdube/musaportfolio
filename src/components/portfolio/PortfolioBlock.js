import React from 'react';
import IconLink from './IconLink';
import { Box, Button } from '@mui/material';
import { info } from '../../info/info';

function PortfolioBlock(props) {
  const { live, source, title } = props;
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <h1 style={{ fontSize: '2rem' }}>{title}</h1>
      <Box
        className="portfolio"
        display="flex"
        flexDirection="column"
        gap="0.5rem"
        alignItems="center"
        fontSize="1.5rem"
        py="2rem"
      >
        {live && (
          <Box p={1} border="2px solid black" borderRadius="25px">
            <IconLink link={live} title="Live Demo" icon="fa fa-safari" />
          </Box>
        )}
        {source && (
          <Box p={1} border="2px solid black" borderRadius="25px">
            <IconLink link={source} title="Source Code" icon="fa fa-code" />
          </Box>
        )}
      </Box>
      {/* CV Download Button */}
      <Button
        variant="contained"
        color="primary"
        href={info.cv}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ mt: 2 }}
      >
        Download My CV
      </Button>
    </Box>
  );
}

export default PortfolioBlock;
