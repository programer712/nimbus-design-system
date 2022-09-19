import * as React from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FilterButton, MButton, OverflowTooltip } from '../index';
import { forwardRef, ReactElement, useEffect, useImperativeHandle, useRef, useState } from 'react';
import ClearAllButton from './ClearAllButton';

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    marginTop: theme.spacing(4),
    marginLeft: 'auto',
  },
  primaryButton: {
    marginLeft: theme.spacing(1),
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: 144,
    overflow: 'auto',
  },
  formGroup: {
    width: 228,
    margin: theme.spacing(1, 1, 1, 0),
  },
  label: {
    width: 165,
    display: 'flex',
    alignItems: 'center',
  },
  labelText: {
    width: 140,
  },
  labelCounter: {
    marginLeft: 'auto',
  },
  clearAllBtn: {
    margin: theme.spacing(0, 0, 1, -1),
  },
}));

interface MultiSelectFilterItem {
  id: string;
  value: string;
  count?: number;
  renderer?: ReactElement;
}

export interface MultiSelectFilterProps {
  items: MultiSelectFilterItem[];
  filterName: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  clearAllButtonText?: string;
  selectedText?: string;
  onApply: (state: { [p: string]: boolean }) => void;
  dataTestId?: string;
}

const MultiSelectFilter = forwardRef(
    (
        {
          items,
          filterName,
          primaryButtonText = 'Apply',
          secondaryButtonText = 'Cancel',
          clearAllButtonText = 'Clear all',
          selectedText = 'Selected',
          onApply,
          dataTestId = 'multiselect-filter',
        }: MultiSelectFilterProps,
        ref
    ) => {
      const classes = useStyles();
      const filterButtonRef = useRef<HTMLButtonElement & { handleClose: () => void }>();
      const [isTouched, setIsTouched] = useState(false);
      const [isActiveFilter, setIsActiveFilter] = useState(false);
      const [isVisible, setIsVisible] = useState(false);
      const initialState = items.reduce<{ [key: string]: boolean }>((acc, cur, i) => {
        acc[cur.id] = false;
        return acc;
      }, {});
      const [state, setState] = React.useState(initialState);
      const [previouslyAppliedState, setPreviouslyAppliedState] = useState(state);
      const [selectedFilterText, setSelectedFilterText] = useState('');
      const disabled = items.length === 0;
      const selectedKeys = Object.keys(state).filter((key) => state[key]);
      const isAtLeastOneItemSelected = selectedKeys.length > 0;
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsTouched(true);
        setState({ ...state, [event.target.name]: event.target.checked });
      };
      const onCancel = (): void => {
        setIsTouched(false);
        setState(previouslyAppliedState);
        filterButtonRef?.current?.handleClose();
      };

      const clearFilter = (): void => {
        setIsActiveFilter(false);
        setIsTouched(false);
        setState(initialState);
        setPreviouslyAppliedState(initialState);
        onApply(initialState);
      };

      useImperativeHandle(ref, () => ({
        clearFilter,
      }));

      useEffect(() => {
        if (isVisible) {
          setSelectedFilterText(`(${selectedKeys.length}/${items.length})`);
        } else {
          setSelectedFilterTextWhenClosed();
        }
      }, [isVisible, selectedKeys]);

      const onApplyClick = (): void => {
        setIsTouched(false);
        setPreviouslyAppliedState(state);
        onApply(state);

        setIsActiveFilter(isAtLeastOneItemSelected);
        filterButtonRef?.current?.handleClose();
      };

      const setSelectedFilterTextWhenClosed = (): void => {
        if (selectedKeys.length === 0) {
          setSelectedFilterText('');
          return;
        }
        if (selectedKeys.length === 1) {
          const selectedItem = items.find((item) => selectedKeys.find((key) => key === item.id));
          const value = selectedItem ? selectedItem.value : '';
          setSelectedFilterText(value);
          return;
        }
        setSelectedFilterText(`${selectedKeys.length} ${selectedText}`);
      };

      const clearAll = (): void => {
        setState(initialState);
        setIsTouched(true);
      };

      const onFilterOpen = (): void => {
        setIsVisible(true);
      };

      const onFilterClosed = (): void => {
        setIsVisible(false);
      };

      return (
          <FilterButton
              disabled={disabled}
              onFilterOpen={onFilterOpen}
              onFilterClosed={onFilterClosed}
              onBackdropClick={onCancel}
              ref={filterButtonRef}
              filterName={filterName}
              filterNameSuffix={selectedFilterText ? ':' : ''}
              isActive={isActiveFilter}
              selectedFilterText={selectedFilterText}
          >
            <FormGroup ref={ref} data-testid={dataTestId} className={classes.formGroup}>
              <Box className={classes.clearAllBtn}>
                <ClearAllButton
                    data-testid="clear-button"
                    disabled={!isAtLeastOneItemSelected}
                    onClearAll={clearAll}
                    clearAllButtonText={clearAllButtonText}
                />
              </Box>
              <Box className={classes.list}>
                {items.map((item) => {
                  return (
                      <FormControlLabel
                          data-testid="form-control-label"
                          key={item.id}
                          control={
                            <Checkbox
                                checked={state[item.id] ?? false}
                                onChange={handleChange}
                                name={item.id}
                                data-testid="checkbox-form-control"
                            />
                          }
                          label={
                            <Box className={classes.label}>
                              <Box className={classes.labelText}>
                                <OverflowTooltip title={item.value}>
                                  <Typography
                                      component="span"
                                      display="inline"
                                      variant="body2"
                                      data-testid="checkbox-description"
                                  >
                                    {item.renderer ? item.renderer : item.value}
                                  </Typography>
                                </OverflowTooltip>
                              </Box>
                              {item.count && (
                                  <Typography
                                      component="span"
                                      display="inline"
                                      className={classes.labelCounter}
                                      variant="body2"
                                      data-testid="count-selected-items"
                                  >
                                    {item.count}
                                  </Typography>
                              )}
                            </Box>
                          }
                      />
                  );
                })}
              </Box>
              <Box className={classes.footer}>
                <MButton
                    size="small"
                    onClick={() => onCancel()}
                    color="primary"
                    variant="outlined"
                    data-testid="cancel-button"
                >
                  {secondaryButtonText}
                </MButton>
                <MButton
                    size="small"
                    disabled={!isTouched}
                    className={classes.primaryButton}
                    onClick={() => onApplyClick()}
                    color="primary"
                    variant="contained"
                    data-testid="apply-button"
                >
                  {primaryButtonText}
                </MButton>
              </Box>
            </FormGroup>
          </FilterButton>
      );
    }
);

export default MultiSelectFilter;
