import { Box, Button, IconButton } from '@material-ui/core';
import React from 'react';
import { ChatIcon } from '../../assets/icons';
import ButtonAnimate from './ButtonAnimate';

export default {
  title: 'Components/Animate',
};

export const ButtonAnimation = () => {
  return (
    <>
      <Box>
        <ButtonAnimate>
          <Button variant="contained">Animated Button</Button>
        </ButtonAnimate>
      </Box>
      <Box mt={1}>
        <ButtonAnimate>
          <IconButton>
            <ChatIcon />
          </IconButton>
        </ButtonAnimate>
      </Box>
    </>
  );
};
