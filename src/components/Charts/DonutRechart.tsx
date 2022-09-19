import React, { MouseEvent, useState } from 'react';
import { ResponsiveContainer, Pie, PieChart, Cell, Sector, Tooltip } from 'recharts';
import { Skeleton, Box, Typography, Card } from '@material-ui/core';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { LegendRecharts, CustomTooltip } from './Recharts';
import { MTheme } from '../../theme';

// ----------------------------------------------------------------------
const ToolTipOffset = -3;
export const colors = ['#DBC17F', '#D03639', '#FFAE09', '#44AF69', '#7FDBDB', '#FFC107', '#EC8BB3', '#56626C'];

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    width: theme.spacing(66.875),
    height: theme.spacing(65.25),
    position: 'relative',

    '& .MuiSkeleton-root': {
      backgroundColor: theme.palette.grey[1100],
      borderRadius: 0,
    }
  },
  titleWrapper: {
    width: 'auto',
    height: theme.spacing(5),
    display: 'flex',
    alignItems: 'center',
    fontSize: theme.spacing(2.25),
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(4),
  },
  chartBox: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  customChartWrapper: {
    position: 'relative',
    width: '100%',
    '& .css-1a8w37c': {
      position: 'absolute',
      top: '38%',
      left: '50%',
      transform: 'translate(-50%, -50%)',

      '& .MuiSkeleton-root:first-of-type': {
        marginBottom: theme.spacing(0.5),
      },
    },
  },
  toolTipWrapper: {
    padding: theme.spacing(0.875, 1),
    backgroundColor: theme.palette.grey[0],
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.spacing(1.5),
  },
  tooltipBullet: {
    display: 'inline-block',
    width: theme.spacing(1.5),
    height: theme.spacing(1.5),
    background: 'purple',
    borderRadius: theme.spacing(12.5),
    transform: 'translateY(-1.5px)',
    marginRight: theme.spacing(1),
  },
  tooltipLabelText: {
    fontSize: theme.spacing(1.5),
    lineHeight: theme.spacing(2.25),
    color: theme.palette.text.primary,
    fontWeight: 400,
    '&:not(:last-child)': {
      marginRight: theme.spacing(0.75),
    },
  },
}));

interface getCellFillColorArgs {
  index: number,
  activeIndex: number,
  selectedIndex: number,
  legendIndex: number,
  isLoading: boolean,
  theme: MTheme,
}

function getCellFillColor(args: getCellFillColorArgs): string {
  const {index, activeIndex, legendIndex, isLoading, selectedIndex, theme} = args;
  if ((activeIndex === index && selectedIndex !== index) || (legendIndex !== index && legendIndex !== -1))
    return `${colors[index]}4D`;

  if (isLoading) return theme.palette.grey[1100];

  return colors[index];
}

interface RenderActiveShapeProps {
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  selectedIndex: number;
}

const renderActiveShape = (props: RenderActiveShapeProps) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, selectedIndex } = props;
  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={selectedIndex === -1 ? outerRadius : outerRadius + 4}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

export interface Category {
  name: string | JSX.Element;
  value: number;
}

export interface DonutRechartProps {
  chartData: {
    count: number;
    categories: Category[];
  };
  isLoading: boolean;
}

export function DonutRechart({ chartData, isLoading }: DonutRechartProps): JSX.Element {
  const theme: MTheme = useTheme();
  const classes = useStyles();
  const { count, categories } = chartData;

  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [activeIndex, setActiveIndex] = useState<number>(selectedIndex);
  const [legendIndex, setLegendIndex] = useState<number>(-1);

  function onPieEnter(e: React.MouseEvent<MouseEvent, Element>, index: number): void {
    if (!isLoading) {
      setActiveIndex(index);
    }
  }

  function onPieLeave(e: React.MouseEvent<MouseEvent, Element>): void {
    if (!isLoading) {
      setActiveIndex(selectedIndex);
    }
  }

  function onPieClick(e: React.MouseEvent<MouseEvent, Element>, index: number): void {
    if (!isLoading) {
      setSelectedIndex((prev) => (prev === index ? -1 : index));
    }
  }

  function onLegendEnter(index: number): void {
    if (!isLoading) {
      setLegendIndex(index);
    }
  }

  function onLegendLeave(): void {
    if (!isLoading) {
      setLegendIndex(-1);
    }
  }

  function onLegendClick(index: number): void {
    if (!isLoading) {
      setActiveIndex((prev) => (prev === index ? -1 : index));
      setSelectedIndex((prev) => (prev === index ? -1 : index));
    }
  }

  const tempoArr: Category[] = [
    {
      name: <Skeleton variant="text" width="92px" height="11.7px" />,
      value: 40,
    },
    {
      name: <Skeleton variant="text" width="92px" height="11.7px" />,
      value: 50,
    },
    {
      name: <Skeleton variant="text" width="92px" height="11.7px" />,
      value: 90,
    },
    {
      name: <Skeleton variant="text" width="92px" height="11.7px" />,
      value: 344,
    },
    {
      name: <Skeleton variant="text" width="92px" height="11.7px" />,
      value: 110,
    },
    {
      name: <Skeleton variant="text" width="92px" height="11.7px" />,
      value: 15,
    },
    {
      name: <Skeleton variant="text" width="92px" height="11.7px" />,
      value: 35,
    },
    {
      name: <Skeleton variant="text" width="92px" height="11.7px" />,
      value: 221,
    },
  ];

  return (
    <Card className={classes.root}>
      <Typography variant="subtitle2" className={classes.titleWrapper}>
        {isLoading ? <Skeleton variant="text" width="160px" height="11.7px" /> : 'Installed Apps'}
      </Typography>
      <Box className={classes.chartBox}>
        <div className={classes.customChartWrapper}>
          {isLoading ? (
            <Box>
              <Skeleton variant="text" width="86px" height="11.7px" />
              <Skeleton variant="text" width="86px" height="11.7px" />
            </Box>
          ) : null}
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              {isLoading ? null : (
                <Tooltip
                  offset={ToolTipOffset}
                  content={<CustomTooltip color={colors[activeIndex]} payload={categories} />}
                />
              )}

              {isLoading ? null : (
                <text
                  x="50%"
                  y="44%"
                  textAnchor="middle"
                  style={{
                    fill: theme.palette.text.primary,
                    fontWeight: 700,
                    fontSize: theme.spacing(4),
                  }}
                >
                  {activeIndex !== -1 ? categories[activeIndex].value : count}
                </text>
              )}
              {isLoading ? null : (
                <text
                  x="50%"
                  y="34%"
                  textAnchor="middle"
                  style={{
                    fill: colors[activeIndex],
                    fontSize: theme.spacing(2),
                    fontWeight: theme.typography.fontWeightBold,
                  }}
                >
                  {activeIndex !== -1 ? categories[activeIndex].name : 'All apps'}
                </text>
              )}

              {LegendRecharts({
                align: 'left',
                verticalAlign: 'bottom',
                layout: 'horizontal',
                onClick: onLegendClick,
                onMouseEnter: onLegendEnter,
                onMouseLeave: onLegendLeave,
                wrapperStyle: { width: '100%', left: 0, bottom: -50 },
                isLoading,
                activeIndex,
                payload: isLoading ? tempoArr : categories,
              })}

              <Pie
                id="pie-id"
                data={isLoading ? tempoArr : categories}
                dataKey="value"
                innerRadius={108}
                outerRadius={120}
                activeIndex={selectedIndex}
                activeShape={(props) => renderActiveShape({ ...props, selectedIndex })}
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
                onClick={onPieClick}
              >
                {(isLoading ? tempoArr : categories).map((entry, index) => {
                  const fill = getCellFillColor({index, activeIndex, selectedIndex, legendIndex, isLoading, theme});
                  return <Cell key={`cell-${entry.name}`} fill={fill} stroke={theme.palette.background.paper} />;
                })}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Box>
    </Card>
  );
}

export default DonutRechart;
