import { Avatar, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

interface BaseAvatarProps {
  primaryText?: string | null;
  secondaryText?: string | null;
}

interface AvatarWithChildren extends BaseAvatarProps {
  children: React.ReactNode;
  icon?: string;
}

interface AvatarWithIcon extends BaseAvatarProps {
  icon: string;
  children?: JSX.Element | string | null;
}

export type TwoLineAvatarProps = AvatarWithChildren | AvatarWithIcon;

export const useStyles = makeStyles((theme) => ({
  primaryText: {
    color: theme.palette.text.primary,
  },
  secondaryText: {
    color: theme.palette.text.secondary,

    // '&$body2': {
    //   color: theme.palette.text.secondary
    // }
  },
}));

function TwoLineDescriptionAvatar({ children, icon, primaryText, secondaryText }: TwoLineAvatarProps) {
  const classes = useStyles();

  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar data-testid="avatar" src={icon}>
          {children}
        </Avatar>
        <Box sx={{ ml: 2 }}>
          <Typography data-testid="primaryText" variant="subtitle2" className={classes.primaryText}>
            {primaryText}
          </Typography>
          <Typography data-testid="secondaryText" variant="body2" color={classes.secondaryText}>
            {secondaryText}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default TwoLineDescriptionAvatar;
