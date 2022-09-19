import * as React from 'react';
import Button from '@material-ui/core/Button';
import { Box, Popover, Theme, Typography } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { alpha, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { forwardRef, useEffect, useImperativeHandle } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
    filterButton: {
        height: 40,
        '&.active, &.open, &:hover': {
            '& .MuiSvgIcon-root': {
                color: theme.palette.primary.main,
            },
        },
        '&.open, &.active': {
            backgroundColor: alpha(theme.palette.primary.main, 0.12),
            color: theme.palette.primary.main,
        },
        '&:hover': {
            backgroundColor: alpha(theme.palette.grey[500], 0.1),
        },
        '& .MuiButton-endIcon': {
            marginRight: theme.spacing(0.5),
        },
        '& .MuiButton-label': {
            marginLeft: theme.spacing(2),
        },
    },
}));

export interface FilterButtonProps {
    children: React.ReactNode;
    filterName: string;
    selectedFilterText: string;
    filterNameSuffix?: string;
    isActive?: boolean;
    onBackdropClick?: () => void;
    onFilterOpen?: () => void;
    onFilterClosed?: () => void;
    disabled: boolean;
}

const FilterButton = forwardRef(
    (
        {
            children,
            filterName,
            selectedFilterText = '',
            filterNameSuffix = ':',
            onBackdropClick,
            onFilterOpen = () => {},
            onFilterClosed = () => {},
            isActive = false,
            disabled = false,
        }: Partial<FilterButtonProps>,
        ref
    ) => {
        const classes = useStyles();
        const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
        const handleClose = () => {
            setAnchorEl(null);
        };
        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
        };

        const open = Boolean(anchorEl);

        useImperativeHandle(ref, () => ({
            handleClose,
        }));

        useEffect(() => {
            if (open) {
                onFilterOpen();
            } else {
                onFilterClosed();
            }
        }, [open]);

        return (
            <>
                <Button
                    disabled={disabled}
                    data-testid="filter-button"
                    buttonRef={ref}
                    className={clsx(classes.filterButton, open && 'open', isActive && 'active')}
                    color="inherit"
                    variant="text"
                    endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    onClick={handleClick}
                >
                    <Typography variant="body1" data-testid="name-filter">
                        {filterName}
                        {filterNameSuffix}
                    </Typography>
                    <Typography variant="subtitle1" color="primary" data-testid="selected-filter-text">
                        {`\u00a0${selectedFilterText}`}
                    </Typography>
                </Button>
                <Popover
                    open={open}
                    anchorEl={anchorEl}
                    keepMounted
                    onBackdropClick={onBackdropClick}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <Box sx={{ p: 1 }}>{children}</Box>
                </Popover>
            </>
        );
    }
);

export default FilterButton;
