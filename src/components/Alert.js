import React from 'react'
import PropTypes from 'prop-types';


export default function Alert(props){
    return(
          
            props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
            {props.alert.msg}
            </div>
        
    )
}