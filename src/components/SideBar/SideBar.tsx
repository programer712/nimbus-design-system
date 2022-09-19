import React, { ReactElement, useEffect } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import { alpha, makeStyles, Theme, Palette } from '@material-ui/core/styles';
import { List, Drawer, Hidden, ListSubheader, SvgIcon, SvgIconTypeMap } from '@material-ui/core';
import Scrollbars from '../Scrollbar/Scrollbars';
import NavItem from './NavItem';
import { ShapeOptions } from '../../theme/borderRadius';
import { PaletteColorOptions } from '../../theme/palette';
import { Pathname } from 'history';

const DRAWER_WIDTH = 280;

export interface NimbusPalette extends Palette {
  primary: PaletteColorOptions;
}

export interface NimbusCustomTheme extends Theme {
  shape: ShapeOptions;
  palette: NimbusPalette;
}

const useStyles = makeStyles((theme: NimbusCustomTheme) => {
  const isLight = theme.palette.mode === 'light';

  return {
    drawer: {
      [theme.breakpoints.up('lg')]: {
        flexShrink: 0,
        width: DRAWER_WIDTH,
      },
    },
    drawerPaper: {
      width: DRAWER_WIDTH,
      background: theme.palette.background.default,
    },
    subHeader: {
      ...theme.typography.overline,
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
      paddingLeft: theme.spacing(5),
      color: theme.palette.text.primary,
    },
    doc: {
      padding: theme.spacing(2.5),
      borderRadius: theme.shape.borderRadiusMd,
      backgroundColor: isLight ? alpha(theme.palette.primary.main, 0.08) : theme.palette.primary.lighter,
    },
  };
});

export function reduceChild({ array, item, pathname, level }: NavItemsReducerArgs) {
  const key = item.href + level;
  let outputArray: React.ReactElement[];

  if (item.items) {
    const match = matchPath(pathname, {
      path: item.href,
      exact: false,
    });

    outputArray = [
      ...array,
      <NavItem
        key={key}
        level={level}
        icon={item.icon}
        info={item.info}
        href={item.href}
        title={item.title}
        open={Boolean(match)}
      >
        {renderNavItems({
          pathname,
          level: level + 1,
          items: item.items,
        })}
      </NavItem>,
    ];
  } else {
    outputArray = [
      ...array,
      <NavItem key={key} level={level} href={item.href} icon={item.icon} info={item.info} title={item.title} />,
    ];
  }
  return outputArray;
}

interface NavItemsRendererProps {
  items?: MenuLinkItem[];
  pathname: Pathname;
  level?: number;
}

interface NavItemsReducerArgs {
  array: Array<JSX.Element>;
  item: MenuLinkItem;
  pathname: Pathname;
  level: number;
}

function renderNavItems({ items, pathname, level = 0 }: NavItemsRendererProps) {
  return (
    <List>{items?.reduce((array: JSX.Element[], item) => reduceChild({ array, item, pathname, level }), [])}</List>
  );
}

interface SideBarProps {
  logo: typeof SvgIcon;
  userAvatar?: React.ReactElement;
  isOpenNav?: boolean;
  onCloseNav?: () => void;
  menuLinks: MenuLink[];
  displayName: string;
  activeUser: {};
  topContent: React.ReactElement | undefined;
  bottomContent: React.ReactElement | undefined;
}

interface MenuLink {
  subheader?: string;
  items?: MenuLinkItem[];
}

interface MenuLinkItem {
  title: string;
  href: string;
  info?: string | number | React.ComponentType;
  icon?: React.ComponentType | any;
  items?: SubMenuLinkItem[] | MenuLinkItem[];
}

interface SubMenuLinkItem {
  title: string;
  href: string;
  items?: MenuLinkItem[];
}

function SideBar({ menuLinks, isOpenNav, onCloseNav = () => null, topContent, bottomContent }: Partial<SideBarProps>) {
  const classes = useStyles();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isOpenNav && onCloseNav) {
      onCloseNav();
    }
    // eslint-disable-next-line
  }, [pathname]);

  const renderContent = (
    <Scrollbars>
      {topContent}
      {menuLinks?.map((list) => (
        <List
          disablePadding
          key={list.subheader}
          subheader={
            <ListSubheader disableSticky disableGutters className={classes.subHeader}>
              {list.subheader}
            </ListSubheader>
          }
        >
          {renderNavItems({
            items: list.items,
            pathname,
          })}
        </List>
      ))}
      {bottomContent}
    </Scrollbars>
  );

  return (
    <nav className={classes.drawer}>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          open={isOpenNav}
          variant="temporary"
          onClose={onCloseNav}
          classes={{ paper: classes.drawerPaper }}
        >
          {renderContent}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer open anchor="left" variant="persistent" classes={{ paper: classes.drawerPaper }}>
          {renderContent}
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default SideBar;
