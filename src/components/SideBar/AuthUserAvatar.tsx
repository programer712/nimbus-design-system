import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Avatar, AvatarProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LogoutIcon } from '../../assets/icons';
import { Box, Link, Typography, SvgIconProps } from '@material-ui/core';
import { NimbusCustomTheme } from './SideBar';

const useStyles = makeStyles((theme: NimbusCustomTheme) => {
  const isLight = theme.palette.mode === 'light';

  return {
    account: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(2, 2.5),
      margin: theme.spacing(1, 2.5, 5),
      borderRadius: theme.shape.borderRadiusSm,
      background: theme.palette.grey[isLight ? 200 : 800],
    },
    secondaryTextWrapper: {
      display: 'flex',
      justifyContent: 'flex-start',
    },
  };
});

type identifier = string | number | undefined;

interface AuthUserAvatarProps {
  avatar: React.ReactElement;
  primaryText: identifier;
  secondaryText: identifier;
  icon: React.ComponentType;
  avatarProps: AvatarProps;
}

function AuthUserAvatar({
  avatarProps,
  primaryText,
  secondaryText = 'Logout',
  icon: Icon = LogoutIcon,
}: Partial<AuthUserAvatarProps>) {
  const classes = useStyles();

  return (
    <div>
      <Link underline="none" component={RouterLink} to="/">
        <div className={classes.account}>
          <Avatar {...avatarProps} />
          <Box sx={{ ml: 2 }}>
            <Typography variant="subtitle2" color="textPrimary" data-testid="textPrimary">
              {primaryText}
            </Typography>
            <div className={classes.secondaryTextWrapper}>
              <Icon />
              <Typography variant="body2" color="textSecondary" data-testid="textSecondary">
                {secondaryText}
              </Typography>
            </div>
          </Box>
        </div>
      </Link>
    </div>
  );
}

export default AuthUserAvatar;
