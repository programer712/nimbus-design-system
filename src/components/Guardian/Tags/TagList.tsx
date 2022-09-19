import React from 'react';
import { Box, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import OverflowTooltip from '../../Tooltip/OverflowTooltip';

export interface TagListProp {
  tags: TagItem[];
  className?: string;
}
export interface TagItem {
  color: string;
  name: string;
}

const useStyles = makeStyles((theme) => ({
  dot: {
    height: 12,
    minWidth: 12,
    borderRadius: '50%',
    marginRight: theme.spacing(1),
  },
  tagItem: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(0.5),
    maxWidth: 400,
  },
  root: {
    '& .MuiListItemText-root:last-child': {
      '& $tagItem': {
        marginBottom: 0,
      },
    },
  },
}));

function TagList({ tags, className = '' }: TagListProp) {
  const classes = useStyles();

  return (
    <Box className={clsx(className, classes.root)}>
      {tags.map(({ name, color }) => {
        return (
          <ListItemText
            key={name}
            primary={
              <div className={classes.tagItem}>
                <span style={{ backgroundColor: color }} className={classes.dot} />
                <OverflowTooltip arrow placement="bottom" title={name}>
                  <Typography display="inline" variant="body2">
                    {name}
                  </Typography>
                </OverflowTooltip>
              </div>
            }
          />
        );
      })}
    </Box>
  );
}

export default TagList;
