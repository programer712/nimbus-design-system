import { last } from 'lodash';
import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Link, Breadcrumbs } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    '& $separator': {
      width: 4,
      height: 4,
      borderRadius: '50%',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      backgroundColor: theme.palette.text.disabled,
    },
  },
  link: {
    lineHeight: 2,
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.grey[500],
    '& > div': { display: 'inherit' },
    '& svg': { width: 20, height: 20 },
  },
  separator: {},
}));

// ----------------------------------------------------------------------

export interface LinkProp {
  href: string;
  name: string;
  icon?: React.ReactElement;
}

function LinkItem({ link }: { link: LinkProp }) {
  const classes = useStyles();
  const { href, name, icon } = link;
  return (
    <Link to={href} key={name} variant="body2" color="textPrimary" component={RouterLink} className={classes.link}>
      {icon && <Box sx={{ mr: 1 }}> {icon} </Box>}
      {name}
    </Link>
  );
}

MBreadcrumbs.propTypes = {
  links: PropTypes.array.isRequired,
  activeLast: PropTypes.bool,
  className: PropTypes.string,
};

interface MBreadCrumbsProp {
  links: LinkProp[];
  activeLast?: boolean;
  className?: string;
}

function MBreadcrumbs({ links, activeLast = false, className, ...other }: MBreadCrumbsProp) {
  const classes = useStyles();
  const currentLink = last(links)?.name;

  const listDefault = links.map((link, index) => <LinkItem key={index} link={link} />);
  const listActiveLast = links.map((link, index) => (
    <div key={link.name}>
      {link.name !== currentLink ? (
        <LinkItem key={index} link={link} />
      ) : (
        <Box
          component="p"
          sx={{
            maxWidth: 260,
            overflow: 'hidden',
            typography: 'body2',
            whiteSpace: 'nowrap',
            color: 'text.disabled',
            textOverflow: 'ellipsis',
          }}
        >
          {currentLink}
        </Box>
      )}
    </div>
  ));

  return (
    <Breadcrumbs
      separator={<span />}
      classes={{ separator: classes.separator }}
      className={clsx(classes.root, className)}
      {...other}
    >
      {activeLast ? listDefault : listActiveLast}
    </Breadcrumbs>
  );
}

export default MBreadcrumbs;
