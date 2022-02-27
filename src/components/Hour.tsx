import React, { FC } from 'react';
// import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

interface Props {
  hourNumber: number;
}

const Hour: FC<Props> = ({ hourNumber }) => (
  <Item>
    {hourNumber}
  </Item>
);

export default Hour;
