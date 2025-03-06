import React from 'react';
import PortfolioBlock from './PortfolioBlock';
import { Box, Grid, Button } from '@mui/material';
import { info } from '../../info/info';

export default function Portfolio() {
  return (
    <Box>
      <Grid container display="flex" justifyContent="center">
        {info.portfolio.map((project, index) => (
          <Grid item xs={12} md={4} key={index}>
            <PortfolioBlock live={project.live} source={project.source} title={project.title} />
          </Grid>
        ))}
      </Grid>
      {/* CV Download Button at the Bottom */}
      <Box textAlign="center" py={4}>
        <Button
          variant="contained"
          color="secondary"
          href={info.cv}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download My CV
        </Button>
      </Box>
    </Box>
  );
}
