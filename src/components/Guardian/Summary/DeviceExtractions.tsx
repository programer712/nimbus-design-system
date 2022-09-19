import React, { useEffect } from 'react';
import { Card, CardContent, Box, Typography, Skeleton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TwoLineDescriptionAvatar, Scrollbars } from '../..';
import { MobileIcon } from '../../../assets/icons';
import { MTheme } from '../../../theme';

const AVATAR_SIZE = '90px';
const tempoArr = [
  { id: 1, startDate: '', endDate: '', deviceName: '', type: '' },
  { id: 2, startDate: '', endDate: '', deviceName: '', type: '' },
];

interface StyleProps {
  isLoading: boolean;
}

const useStyles = makeStyles((theme: MTheme) => ({
  root: (props: StyleProps) => {
    return {
      flex: 1,
      height: '100%',

      '& .MuiSkeleton-root': {
        backgroundColor: theme.palette.grey[1100],
        borderRadius: 0,
      },

      '& .MuiAvatar-root': {
        width: AVATAR_SIZE,
        height: AVATAR_SIZE,
        backgroundColor: `${theme.palette.primary.main}14`,
      },

      '& .MuiCardContent-root': {
        height: '50%',
        padding: `${theme.spacing(4)} 0 ${theme.spacing(4)} ${theme.spacing(4)}`,
        marginRight: theme.spacing(4),
        borderBottom: `1px solid ${theme.palette.grey[500]}1E`,

        '& > div:first-of-type': {
          marginBottom: theme.spacing(1.75),
        },
        '& .css-10ixvxx': {
          minWidth: props.isLoading ? '0px' : theme.spacing(24.75),
          marginLeft: theme.spacing(4),
          borderBottom: `1px solid ${theme.palette.grey[500]}1E`,
          paddingBottom: theme.spacing(2),
        },
      },
    };
  },
  mainHeaders: {
    '& h6.MuiTypography-root': {
      fontSize: theme.spacing(2.25),
      marginBottom: theme.spacing(1),
    },
    '& p.MuiTypography-root': {
      fontSize: theme.spacing(1.75),
      color: theme.palette.grey[600],
      fontWeight: 700,
    },
    '& > div': {
      marginBottom: theme.spacing(1.75),
    },
  },
  dateContent: {
    paddingLeft: theme.spacing(15.25),
    '& h6.MuiTypography-root': {
      fontWeight: 500,
      fontSize: theme.spacing(1.5),
      lineHeight: theme.spacing(3),
    },
    '& p.MuiTypography-root': {
      fontWeight: 400,
      fontSize: theme.spacing(2),
      color: theme.palette.grey[800],
      lineHeight: theme.spacing(3.125),
    },
  },
  dateBlock: (props: StyleProps) => {
    return {
      '&:not(:last-child)': {
        marginBottom: props.isLoading ? theme.spacing(4.5) : theme.spacing(1.25),
      },
      '& .MuiTypography-root:first-of-type': {
        marginBottom: props.isLoading ? theme.spacing(1) : 0,
      },
    };
  },
  scrollStyle: {
    marginRight: theme.spacing(1),
    '& .simplebar-scrollbar': {
      '&:before': {
        background: theme.palette.grey[500],
        width: theme.spacing(1),
      },
    },
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  textSkeletonBox: (props: StyleProps) => {
    return {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',

      width: theme.spacing(24.75),
      borderBottom: `1px solid ${theme.palette.grey[500]}1E`,
      paddingBottom: props.isLoading ? theme.spacing(4) : theme.spacing(2),

      '& .MuiSkeleton-root:first-of-type': {
        marginBottom: theme.spacing(1),
      },
    };
  },
}));

interface ExtractionModel {
  id: number;
  deviceName: string;
  type: string;
  startDate: string;
  endDate: string;
}

export interface DeviceExtractionsProps {
  extractions: ExtractionModel[];
  extractionText1: string;
  extractionText2: string;
  isLoading: boolean;
}

export function DeviceExtractions({
  extractions,
  extractionText1,
  extractionText2,
  isLoading,
}: DeviceExtractionsProps): JSX.Element {
  const classes = useStyles({ isLoading });

  return (
    <Card className={classes.root}>
      <Scrollbars className={classes.scrollStyle}>
        {(isLoading ? tempoArr : extractions).map((extraction) => (
          <CardContent key={extraction.id}>
            {isLoading ? (
              <Box className={classes.flexContainer}>
                <TwoLineDescriptionAvatar>
                  <Skeleton animation="wave" variant="circular" width={AVATAR_SIZE} height={AVATAR_SIZE} />
                </TwoLineDescriptionAvatar>
                <Box data-testid="extraction-skeleton-box" className={classes.textSkeletonBox}>
                  <Skeleton variant="text" width="172px" height="11.7px" />
                  <Skeleton variant="text" width="100px" height="11.7px" />
                </Box>
              </Box>
            ) : (
              <span className={classes.mainHeaders}>
                <TwoLineDescriptionAvatar primaryText={extraction.deviceName} secondaryText={extraction.type}>
                  <MobileIcon />
                </TwoLineDescriptionAvatar>
              </span>
            )}

            <Box className={classes.dateContent}>
              <Box className={classes.dateBlock}>
                <Typography variant="subtitle2" color="textSecondary">
                  {isLoading ? <Skeleton variant="text" width="86px" height="11.7px" /> : <>{extractionText1}</>}
                </Typography>
                <Typography color="textPrimary">
                  {isLoading ? <Skeleton variant="text" width="106px" height="11.7px" /> : <>{extraction.startDate}</>}
                </Typography>
              </Box>
              <Box className={classes.dateBlock}>
                <Typography variant="subtitle2" color="textSecondary">
                  {isLoading ? <Skeleton variant="text" width="86px" height="11.7px" /> : <>{extractionText2}</>}
                </Typography>
                <Typography color="textPrimary">
                  {isLoading ? <Skeleton variant="text" width="106px" height="11.7px" /> : <>{extraction.endDate}</>}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        ))}
      </Scrollbars>
    </Card>
  );
}
export default DeviceExtractions;
