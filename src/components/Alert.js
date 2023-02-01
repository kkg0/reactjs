import React from 'react';

const propTypes = {};

const defaultProps = {};


const Alert = (props) => {
    return props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{props.alert.msg}</strong>
  </div>;
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
// #endregion

export default Alert;