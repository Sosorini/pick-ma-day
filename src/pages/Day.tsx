import React, { FC } from 'react';
import { nanoid } from 'nanoid';
// import { Link } from 'react-router-dom';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Hour from 'components/Hour';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// interface Props {
//   show: boolean;
//   onCloseModal: () => void;
//   setShowInviteWorkspaceModal: (flag: boolean) => void;
// }

const Day: FC = () => (
  <Container maxWidth="lg">
    <Box sx={{
      bgcolor: '#cfe8fc',
      height: '90vh',
      flexGrow: 1,
    }}
    >
      <Grid
        container
        sx={{
          border: '1px solid black',
        }}
      >
        {Array(7).map(() => (
          <Grid item xs={2} key={nanoid()}>
            {Array.from(Array(9)).map((_, index) => (
              <Hour key={nanoid()} hourNumber={10 + index} />
            ))}
          </Grid>
        ))}

      </Grid>
    </Box>
  </Container>
);

export default Day;
