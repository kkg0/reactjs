import React from 'react';

const propTypes = {};

const defaultProps = {};


const Alert = (props) => {
    return <div style={{height: '50px'}} className='container my-3'>
              {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
              <strong>{props.alert.msg}</strong>
            </div>}
          </div>;
      
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
// #endregion

export default Alert;