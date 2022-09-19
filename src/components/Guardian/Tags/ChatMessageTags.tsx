import React, { useRef, useState } from 'react';
import Popover from '@material-ui/core/Popover';
import { makeStyles, Theme } from '@material-ui/core';
import { Box, Typography } from '@material-ui/core';
import TagList, { TagItem } from './TagList';
import MLabel from '../../Label/MLabel';
import clsx from 'clsx';
import OverflowTooltip from '../../Tooltip/OverflowTooltip';

export interface ChatMessageTagsProps {
  tags: TagItem[];
  openFrom?: 'left' | 'right' | 'center';
}

const MAX_WIDTH = 97;

const useStyles = makeStyles((theme: Theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  tag: {
    maxWidth: MAX_WIDTH,
  },
  paper: {
    marginTop: 0,
    padding: theme.spacing(2),
    minWidth: 144,
    maxWidth: 400,
    pointerEvents: 'auto',
  },
  list: {
    overflow: 'auto',
    maxHeight: 109,
  },
  dot: {
    height: 12,
    width: 12,
    minWidth: theme.spacing(1.5),
    borderRadius: '50%',
    display: 'inline-block',
  },
  otherTags: {
    paddingRight: 3,
    paddingLeft: 3,
  },
}));

function ChatMessageTags({ tags, openFrom = 'left' }: ChatMessageTagsProps) {
  const classes = useStyles();

  const [firstTag, ...otherTags] = tags;
  const [openedPopover, setOpenedPopover] = useState(false);
  const popoverAnchor = useRef(null);

  const popoverEnter = () => {
    setOpenedPopover(true);
  };

  const popoverLeave = () => {
    setOpenedPopover(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ mr: otherTags.length > 0 ? 0.5 : 0 }}>
        <MLabel className={classes.tag} backgroundColor={firstTag.color}>
          <OverflowTooltip placement="top" title={firstTag.name} arrow>
            <Typography variant="caption" data-testid="tag-content">
              {firstTag.name}
            </Typography>
          </OverflowTooltip>
        </MLabel>
      </Box>
      {otherTags.length > 0 && (
        <>
          <Box ref={popoverAnchor} onMouseEnter={popoverEnter} onMouseLeave={popoverLeave}>
            <MLabel className={clsx(classes.tag, classes.otherTags)} backgroundColor={'black'}>
              <Typography variant="caption">+{otherTags.length}</Typography>
            </MLabel>
          </Box>
          <Popover
            id="mouse-over-popover"
            className={classes.popover}
            classes={{
              paper: classes.paper,
            }}
            open={openedPopover}
            anchorEl={popoverAnchor.current}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: openFrom,
            }}
            PaperProps={{
              onMouseEnter: popoverEnter,
              onMouseLeave: popoverLeave,
            }}
          >
            <TagList className={classes.list} tags={otherTags} />
          </Popover>
        </>
      )}
    </Box>
  );
}

export default ChatMessageTags;
