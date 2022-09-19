import React, { useRef, useEffect, useState } from 'react';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';
import { Box } from '@material-ui/core';

export interface OverflowTooltipProps extends TooltipProps {}

const OverflowTooltip = ({ ...props }: OverflowTooltipProps) => {
  const [isOverflowed, setIsOverflow] = useState(false);
  const textElementRef = useRef<HTMLInputElement | null>(null);

  const compareSize = () => {
    const compare = textElementRef?.current
      ? textElementRef.current.scrollWidth > textElementRef.current.clientWidth
      : false;
    setIsOverflow(compare);
  };

  useEffect(() => {
    compareSize();
    window.addEventListener('resize', compareSize);
    return () => {
      window.removeEventListener('resize', compareSize);
    };
  }, [props.children]);

  return (
    <Tooltip {...props} disableHoverListener={!isOverflowed} enterDelay={300}>
      <Box
        ref={textElementRef}
        sx={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
        data-testid="content-container"
      >
        {props.children}
      </Box>
    </Tooltip>
  );
};

export default OverflowTooltip;
