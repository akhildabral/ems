import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './container.css';

export const Container = props => {
  const { children, className, ...attrs } = props;

  if (!children) {
    return null;
  }

  const classes = classnames({
    [styles.container]: !className,
    [className]: !!className
  });

  return (
    <div className={classes} {...attrs}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};