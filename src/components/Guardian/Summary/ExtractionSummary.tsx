import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Card, Box, Typography, Skeleton, Avatar, SvgIconProps, CircularProgress } from '@material-ui/core';
import { JumbotronIcon, JumbotronSkeletonIcon, CallIcon, ChatIcon } from '../../../assets/icons';
import { MTheme } from '../../../theme';

// --------------------------------------------------------------

const icons: {
  [key: string]: (props: SvgIconProps) => JSX.Element;
} = {
  chats: ChatIcon,
  calls: CallIcon,
};

interface StyleProps {
  isLoading: boolean;
}

const useStyles = makeStyles((theme: MTheme) => ({
  root: (props: StyleProps) => {
    return {
      width: '67%',
      height: '100%',
      marginRight: theme.spacing(3),
      backgroundColor: props.isLoading ? theme.palette.grey[0] : theme.palette.primary.lighter,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      '& .MuiSkeleton-root': {
        backgroundColor: theme.palette.grey[1100],
        borderRadius: 0,
      },
    };
  },
  inner: {
    height: theme.spacing(34.875),
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',
  },
  textBlock: {
    marginLeft: theme.spacing(10),
    '& .MuiSkeleton-root:first-of-type': {
      marginBottom: theme.spacing(0.5),
    },
  },
  iconBlock: (props: StyleProps) => {
    return {
      display: 'flex',
      alignItems: 'center',
      marginTop: props.isLoading ? '50px' : theme.spacing(2.5),
      '& .css-1a8w37c': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: theme.spacing(4),
      },

      '& .MuiAvatar-root': {
        width: theme.spacing(6.75),
        height: theme.spacing(6.75),
        background: 'transparent',
        marginBottom: theme.spacing(1),
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: `${theme.palette.primary.main}14`,
        },
        '&:hover  + .MuiTypography-root': {
          opacity: 1,
        },

        '& > svg': {
          width: theme.spacing(3.4375),
          height: theme.spacing(3.4375),
        },
      },

      '& .MuiTypography-root': {
        fontWeight: 500,
        fontSize: theme.spacing(1.75),
      },
    };
  },
  hide: {
    opacity: 0,
  },
  noHover: {
    pointerEvents: 'none',
  },
}));

interface ModelCategory {
  name: string;
  count: number;
}

export interface ExtractionSummaryProps {
  data: ModelCategory[];
  isLoading: boolean;
}

export function ExtractionSummary({ data, isLoading }: ExtractionSummaryProps): JSX.Element {
  const classes = useStyles({ isLoading });
  const theme: MTheme = useTheme();

  return (
    <Card className={classes.root}>
      <Box className={classes.inner}>
        {isLoading ? <JumbotronSkeletonIcon /> : <JumbotronIcon />}
        <Box className={classes.textBlock}>
          {isLoading ? (
            <>
              <Skeleton variant="text" width="100px" height="11.7px" />
              <Skeleton variant="text" width="289px" height="11.7px" />
            </>
          ) : (
            <>
              <Typography color="primary" variant="subtitle1">
                Welcome to
              </Typography>
              <Typography color="initial" variant="h3">
                Extraction summary
              </Typography>
            </>
          )}

          <Box className={classes.iconBlock}>
            {data.map((category) => {
              const Icon = icons[`${category.name}`];
              return (
                <Box key={category.name}>
                  {isLoading ? (
                    <Avatar data-testid="summary-circular-spinner" className={classes.noHover}>
                      <CircularProgress />
                    </Avatar>
                  ) : (
                    <>
                      <Avatar data-testid="summary-icon" className={clsx(!category.count && classes.noHover)}>
                        <Icon fill={!category.count ? theme.palette.grey[1000] : theme.palette.primary.main} />
                      </Avatar>
                      <Typography className={classes.hide} variant="subtitle2">
                        {!category.count ? <>&nbsp;</> : category.count}
                      </Typography>
                    </>
                  )}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
export default ExtractionSummary;
