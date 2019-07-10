import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './sidebar.css';

export const Sidebar = props => {
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
      {children.map((child, i) => {
        console.log(child)
       return <div key={i} className="link"> {child} </div>
      })}
    </div>
  );
};

Sidebar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};