import * as React from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FilterButton, MButton, OverflowTooltip } from '../index';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: 124,
    width: 252,
    paddingRight: theme.spacing(1),
  },
  formCheckBox: {
    marginLeft: theme.spacing(0.125),
    marginBottom: theme.spacing(5.125),
  },
  footer: {
    '& .MuiButton-root': {
      marginLeft: theme.spacing(1),
    },
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  primaryButton: {
    marginLeft: theme.spacing(1),
  },
}));

export interface ToggleCheckBoxFilterProps {
  filterName: string;
  checkBoxDescription: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onApply: (isChecked: boolean) => void;
}

const ToggleCheckBoxFilter = forwardRef(
  (
    {
      filterName,
      checkBoxDescription,
      primaryButtonText = 'Apply',
      secondaryButtonText = 'Cancel',
      onApply,
    }: ToggleCheckBoxFilterProps,
    ref
  ) => {
    const classes = useStyles();
    const filterButtonRef = useRef<HTMLButtonElement & { handleClose: () => void }>();
    const [isTouched, setIsTouched] = useState(false);
    const [isChecked, setIsChecked] = React.useState(false);
    const [previouslyAppliedState, setPreviouslyAppliedState] = useState(isChecked);
    const [isActiveFilter, setIsActiveFilter] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsTouched(true);
      setIsChecked(event.target.checked);
    };

    const onCancel = (): void => {
      setIsTouched(false);
      setIsChecked(previouslyAppliedState);
      filterButtonRef?.current?.handleClose();
    };

    const clearFilter = (): void => {
      setIsActiveFilter(false);
      setIsChecked(false);
      setPreviouslyAppliedState(false);
      onApply(false);
    };

    useImperativeHandle(ref, () => ({
      clearFilter,
    }));

    const onApplyClick = (): void => {
      setIsTouched(false);
      setPreviouslyAppliedState(isChecked);
      onApply(isChecked);
      setIsActiveFilter(isChecked);
      filterButtonRef?.current?.handleClose();
    };

    return (
      <FilterButton
        onBackdropClick={onCancel}
        ref={filterButtonRef}
        filterName={filterName}
        filterNameSuffix=""
        isActive={isActiveFilter}
      >
        <Box ref={ref} className={classes.root} data-testid="toggle-filter">
          <FormControlLabel
            control={<Checkbox color="primary" checked={isChecked} onChange={handleChange} />}
            label={
              <Box sx={{ maxWidth: 200 }}>
                <OverflowTooltip title={checkBoxDescription}>
                  <Typography display="inline" variant="body2">
                    {checkBoxDescription}
                  </Typography>
                </OverflowTooltip>
              </Box>
            }
            className={classes.formCheckBox}
          />
          <Box className={classes.footer}>
            <MButton
              disabled={!isTouched}
              className={classes.primaryButton}
              onClick={() => onApplyClick()}
              color="primary"
              variant="contained"
            >
              {primaryButtonText}
            </MButton>
            <MButton onClick={() => onCancel()} color="primary" variant="outlined">
              {secondaryButtonText}
            </MButton>
          </Box>
        </Box>
      </FilterButton>
    );
  }
);

export default ToggleCheckBoxFilter;
