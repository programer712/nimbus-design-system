import React from 'react';
import { Legend } from 'recharts';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { MTheme } from '../../../theme';
import { colors, Category } from '../DonutRechart';
import { OverflowTooltip } from '../../index';

// ----------------------------------------------------------------------
interface StyleProps {
  isLoading: boolean;
}

const useStyles = makeStyles((theme: MTheme) => ({
  ulStyle: {
    padding: theme.spacing(3, 4, 1.5, 4),
    borderTop: `1px solid ${theme.palette.grey[500]}33`,
    listStyle: 'none',
    display: 'flex',
    flex: '1 1 0px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  liStyle: (props: StyleProps) => {
    return {
      position: 'relative',
      boxSizing: 'content-box',
      display: 'flex',
      alignItems: 'center',
      maxWidth: theme.spacing(10),
      marginRight: theme.spacing(3),
      marginBottom: theme.spacing(1.5),
    };
  },
  liBullet: (props: StyleProps) => {
    return {
      position: 'absolute',
      display: props.isLoading ? 'none' : 'inline-block',
      width: theme.spacing(1.5),
      height: theme.spacing(1.5),
      background: 'purple',
      borderRadius: theme.spacing(12.5),
      transform: 'translateY(-1.5px)',
      marginRight: theme.spacing(1.125),
    };
  },
  liText: (props: StyleProps) => {
    return {
      fontSize: theme.spacing(1.75),
      fontStyle: 'normal',
      fontFamily: theme.typography.fontFamily,
      lineHeight: theme.spacing(3),
      color: theme.palette.grey[1300],
      marginLeft: props.isLoading ? 0 : theme.spacing(2.625),
    };
  },
}));
interface CustomizedLegendProps {
  external: {
    payload: Category[];
    onClick: (index: number) => void;
    onMouseEnter: (index: number) => void;
    onMouseLeave: (index: number) => void;
    activeIndex: number;
  };
  classes: ClassNameMap<'ulStyle' | 'liStyle' | 'liBullet' | 'liText'>;
}

const CustomizedLegend = ({ external, classes }: CustomizedLegendProps): JSX.Element => {
  const { payload, onClick, onMouseEnter, onMouseLeave, activeIndex } = external;

  return (
    <ul className={classes.ulStyle}>
      {payload.map((entry, index) => (
        <li
          key={`item-${index}`}
          className={classes.liStyle}
          onClick={() => onClick(index)}
          onMouseEnter={() => onMouseEnter(index)}
          onMouseLeave={() => onMouseLeave(index)}
        >
          <div className={classes.liBullet} style={{ backgroundColor: colors[index] }}>
            &nbsp;
          </div>
          <OverflowTooltip title={entry.name} arrow>
            <Typography
              className={classes.liText}
              noWrap
              display="inline"
              style={{ fontWeight: index === activeIndex ? 500 : 400 }}
            >
              {entry.name}
            </Typography>
          </OverflowTooltip>
        </li>
      ))}
    </ul>
  );
};

function LegendRecharts({ ...other }): JSX.Element {
  const { isLoading, payload, activeIndex, onClick, onMouseEnter, onMouseLeave } = other;

  const classes = useStyles({ isLoading });
  return (
    <Legend
      content={
        <CustomizedLegend external={{ payload, activeIndex, onClick, onMouseEnter, onMouseLeave }} classes={classes} />
      }
      {...other}
    />
  );
}

export default LegendRecharts;
