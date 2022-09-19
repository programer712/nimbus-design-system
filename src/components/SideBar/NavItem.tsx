import clsx from 'clsx';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { NavLink as RouterLink, NavLinkProps } from 'react-router-dom';
import arrowIosForwardFill from '@iconify-icons/eva/arrow-ios-forward-fill';
import arrowIosDownwardFill from '@iconify-icons/eva/arrow-ios-downward-fill';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Box, Collapse, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as H from 'history';

const useStyles = makeStyles((theme) => ({
  root: {},
  isExpandableListItemOpen: {
    '& .MuiSvgIcon-root': { color: theme.palette.primary.main },
    '& .MuiListItemText-root': { color: theme.palette.primary.main },
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
  },
  listItem: {
    ...theme.typography.body2,
    height: 48,
    textTransform: 'capitalize',
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(2.5),
    color: theme.palette.text.secondary,
  },
  subIcon: {
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:before': {
      width: 4,
      height: 4,
      content: "''",
      display: 'block',
      borderRadius: '50%',
      backgroundColor: theme.palette.text.disabled,
      transition: theme.transitions.create('transform'),
    },
  },
  isActiveListItem: {
    '& .MuiSvgIcon-root': { color: theme.palette.primary.main },
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    '&:before': {
      top: 0,
      left: 0,
      width: 3,
      bottom: 0,
      content: "''",
      position: 'absolute',
      backgroundColor: theme.palette.primary.main,
    },
  },
  isActiveListItemSub: {
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightMedium,
    '& $subIcon:before': {
      transform: 'scale(2)',
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

export interface NavItemProps {
  level: number;
  title: string;
  href: string;
  info: React.ComponentType | React.ReactElement | string | number | undefined;
  icon: React.ComponentType | any;
  open?: boolean;
  children?: React.ReactElement;
  className?: string;
}

export interface Match {
  isExact: boolean;
  path: string;
  url: string;
}

function NavItem({
  level = 0,
  title,
  href,
  info,
  icon: NavItemIcon,
  open = false,
  children,
  className = '',
  ...other
}: Partial<NavItemProps>) {
  const classes = useStyles();
  const [show, setShow] = useState(open);
  const [isHovering, setIsHovering] = useState(false);
  const isSubItem = level > 0;

  const handleShow = () => setShow(!show);

  if (children) {
    return (
      <>
        <ListItem
          button
          disableGutters
          onClick={handleShow}
          className={clsx(
            classes.listItem,
            {
              [classes.isActiveListItem]: open,
              [classes.isExpandableListItemOpen]: show,
            },
            className
          )}
          {...other}
        >
          <ListItemIcon>{NavItemIcon && <NavItemIcon />}</ListItemIcon>
          <ListItemText disableTypography primary={title} />
          {info && info}
          <Box
            component={Icon}
            icon={show ? arrowIosDownwardFill : arrowIosForwardFill}
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        </ListItem>

        <Collapse in={show}>{children}</Collapse>
      </>
    );
  }

  const ListItemLink: any = React.forwardRef((props, ref) => {
    const linkProps: any = { to: href, ref: ref, exact: open, ...props };

    return <RouterLink {...linkProps} />;
  });

  return (
    <ListItem
      button
      disableGutters
      component={ListItemLink}
      activeClassName={isSubItem ? classes.isActiveListItemSub : classes.isActiveListItem}
      className={clsx(classes.listItem, className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      isActive={(match: Match, location: H.Location) => {
        if (!match) {
          return false;
        }
        const { url } = match;
        const { pathname } = location;
        const isMatch = url === pathname;

        if (!isSubItem) {
          return url.length && pathname.includes(url);
        }

        return isMatch;
      }}
      {...other}
    >
      <ListItemIcon>{isSubItem ? <span className={classes.subIcon} /> : <NavItemIcon />}</ListItemIcon>
      <ListItemText disableTypography primary={title} />
      {info && isHovering && info}
    </ListItem>
  );
}

export default NavItem;
