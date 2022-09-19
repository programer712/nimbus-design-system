import React, { useEffect } from 'react';
import { Box, Typography, Table, TableBody, TableRow, TableCell, Skeleton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NoDeviceInfoIcon, NoResultsIcon } from '../../../assets/icons';
import { MTheme } from '../../../theme';

const N = 3;

interface Item {
  key: string;
  value: string;
}

interface StyleProps {
  isLoading: boolean;
}

export interface DeviceTableProps {
  deviceInfo: {
    category: string | null;
    items: Item[];
    isAvailable: boolean;
  };
  isLoading: boolean;
}

const useStyles = makeStyles((theme: MTheme) => ({
  '@global': {
    '* .MuiSkeleton-root': {
      backgroundColor: theme.palette.grey[1100],
      borderRadius: 0,
    },
  },
  table: (props: StyleProps) => {
    return {
      width: '100%',
      '& .MuiTableCell-root': {
        width: '33.33%',
        padding: theme.spacing(1.25),

        '&:first-of-type': {
          paddingLeft: 0,
        },
        '&:last-child': {
          paddingRight: 0,
        },

        '& h6.MuiTypography-root': {
          fontWeight: 500,
          fontSize: theme.spacing(1.5),
          marginBottom: props.isLoading ? theme.spacing(0.5) : 0,
        },
        '& p.MuiTypography-root': {
          fontWeight: 400,
          fontSize: theme.spacing(2),
          color: theme.palette.grey[800],
        },
      },
      '& .MuiTableRow-root:not(:last-child)': {
        '& p.MuiTypography-root': {
          marginBottom: props.isLoading ? theme.spacing(2.5) : 0,
        },
      },
      '& .MuiTableRow-root:last-child': {
        '& .MuiTableCell-root': {
          paddingBottom: 0,
        },
      },
      '& .MuiTableRow-root:first-child': {
        '& .MuiTableCell-root': {
          paddingTop: 0,
        },
      },
    };
  },
  tableHeader: (props: StyleProps) => {
    return {
      padding: theme.spacing(2, 2.125),
      backgroundColor: props.isLoading ? theme.palette.grey[1100] : `${theme.palette.grey[500]}1E`,
      marginTop: theme.spacing(4),
      marginBottom: props.isLoading ? theme.spacing(3.875) : theme.spacing(2),
      borderRadius: theme.spacing(1),

      '& .MuiSkeleton-root': {
        backgroundColor: theme.palette.grey[1200]
      },

      '& p.MuiTypography-root': {
        fontSize: theme.spacing(1.75),
        color: theme.palette.grey[600],
        fontWeight: 700,
      },
    };
  },
  flexContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& h6.MuiTypography-root': {
      fontSize: theme.spacing(2),
      marginTop: theme.spacing(4.25),
    },
  },
}));

const renderRowBox = (items: Item[], isLoading: boolean): JSX.Element => (
  <TableRow>
    {items.slice(0, N).map((item) => {
      return (
        <TableCell key={Math.random() * 100}>
          <Box>
            <Typography variant="subtitle2" color="textSecondary">
              {isLoading ? <Skeleton variant="text" width="86px" height="11.7px" /> : item.key}
            </Typography>
            <Typography color="textPrimary">
              {isLoading ? <Skeleton variant="text" width="106px" height="11.7px" /> : item.value}
            </Typography>
          </Box>
        </TableCell>
      );
    })}
  </TableRow>
);

export function DeviceTable({ deviceInfo, isLoading }: DeviceTableProps): JSX.Element {
  const classes = useStyles({ isLoading });
  const { category, items, isAvailable } = deviceInfo;
  const primaryText = isAvailable ? 'No results found' : 'Device info is not avaliable';
  const Icon = isAvailable ? NoResultsIcon : NoDeviceInfoIcon;

  return items.length ? (
    <>
      <Box data-testid="device-table-header" className={classes.tableHeader}>
        <Typography variant="body2">
          {isLoading ? (
            <Skeleton data-testid="device-header-skeleton" variant="text" width="86px" height="11.7px" />
          ) : (
            'General info'
          )}
        </Typography>
      </Box>
      <Table className={classes.table}>
        <TableBody>
          {renderRowBox(items, isLoading)}
          {renderRowBox(items, isLoading)}
          {renderRowBox(items, isLoading)}
        </TableBody>
      </Table>
      <Box data-testid="device-table-header" className={classes.tableHeader}>
        <Typography variant="body2">
          {isLoading ? (
            <Skeleton data-testid="device-header-skeleton" variant="text" width="86px" height="11.7px" />
          ) : (
            category
          )}
        </Typography>
      </Box>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>{renderRowBox(items, isLoading)}</TableBody>
      </Table>
    </>
  ) : (
    <Box className={classes.flexContainer}>
      <Box className={classes.innerBox}>
        <Icon />
        <Typography variant="subtitle2">{primaryText}</Typography>
      </Box>
    </Box>
  );
}
export default DeviceTable;
