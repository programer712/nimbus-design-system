import * as React from 'react';
import { isFragment } from 'react-is';
import clsx from 'clsx';
import { deepmerge } from '@material-ui/utils';
import { unstable_composeClasses as composeClasses } from '@material-ui/unstyled';
import { experimentalStyled } from '@material-ui/core/styles';
import useThemeProps from '@material-ui/core/styles/useThemeProps';
import { Avatar } from '@material-ui/core';
import avatarGroupClasses, { getAvatarGroupUtilityClass } from '@material-ui/core/AvatarGroup/avatarGroupClasses';

const SPACINGS = {
  small: -16,
  medium: -8,
};

const overridesResolver = (_props: any, styles: any) =>
  deepmerge(
    {
      [`& .${avatarGroupClasses.avatar}`]: styles.avatar,
    },
    styles.root || {}
  );

const useUtilityClasses = (styleProps: any) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    avatar: ['avatar'],
  };

  return composeClasses(slots, getAvatarGroupUtilityClass, classes);
};

const AvatarGroupRoot = experimentalStyled(
  'div',
  {},
  {
    name: 'MuiAvatarGroup',
    slot: 'Root',
    overridesResolver,
  }
)(({ theme }: any) => ({
  [`& .MuiAvatar-root`]: {
    border: `2px solid ${theme.palette.background.default}`,
    boxSizing: 'content-box',
    marginLeft: -8,
    '&:last-child': {
      marginLeft: 0,
    },
  },
  /* Styles applied to the root element. */
  display: 'flex',
  flexDirection: 'row-reverse',
}));
interface CustomThemeProps {
  className: string;
  max: number;
  spacing: 'small' | 'medium';
  variant: 'square' | 'circular' | 'rounded' | undefined;
  other: unknown;
  children: React.ReactNode;
  handleClickOnExtraAvatars?: () => void;
}

const AvatarGroup = React.forwardRef(function AvatarGroup(
  inProps: Partial<CustomThemeProps>,
  ref: React.Ref<HTMLDivElement> | null
) {
  const props: Partial<CustomThemeProps> = useThemeProps({
    props: inProps,
    name: 'MuiAvatarGroup',
  });
  const {
    children: childrenProp,
    className,
    max = 5,
    spacing = 'medium',
    variant = 'circular',
    handleClickOnExtraAvatars,
    ...other
  } = props;

  const GroupAvatar = experimentalStyled(
    Avatar,
    {},
    {
      name: 'MuiAvatarGroup',
      slot: 'Avatar',
    }
  )(({ theme }: any) => ({
    border: `2px solid ${theme.palette.background.default}`,
    boxSizing: 'content-box',
    marginLeft: -8,
    '&:last-child': {
      marginLeft: 0,
    },
    cursor: handleClickOnExtraAvatars ? 'pointer' : 'default',
  }));

  const clampedMax = max < 2 ? 2 : max;

  const styleProps = {
    ...props,
    max,
    spacing,
    variant,
  };

  const classes = useUtilityClasses(styleProps);

  const children = React.Children.toArray(childrenProp).filter((child) => {
    if (process.env.NODE_ENV !== 'production') {
      if (isFragment(child)) {
        console.error(
          [
            "Material-UI: The AvatarGroup component doesn't accept a Fragment as a child.",
            'Consider providing an array instead.',
          ].join('\n')
        );
      }
    }

    return React.isValidElement(child);
  });

  const extraAvatars = children.length > clampedMax ? children.length - clampedMax + 1 : 0;

  const marginLeft = spacing && SPACINGS[spacing] !== undefined ? SPACINGS[spacing] : -spacing;

  return (
    <AvatarGroupRoot styleProps={styleProps} className={clsx(classes.root, className)} ref={ref} {...other}>
      {extraAvatars ? (
        <GroupAvatar
          data-testid="group-extra-avatar"
          styleProps={styleProps}
          className={`${classes.avatar} MuiAvatarGroup-extra-avatar`}
          style={{
            marginLeft,
          }}
          variant={variant}
          onClick={handleClickOnExtraAvatars}
        >
          {extraAvatars}
        </GroupAvatar>
      ) : null}
      {children
        .slice(0, children.length - extraAvatars)
        .reverse()
        .map((child: any) =>
          React.cloneElement(child, {
            className: clsx(child.props.className, classes.avatar),
            style: {
              marginLeft,
              ...child.props.style,
            },
            variant: child.props.variant || variant,
          })
        )}
    </AvatarGroupRoot>
  );
});

export default AvatarGroup;
