import React from 'react';


export function DateFormat( props ) { 
    const date = props.split('T')[0]
    return date
  
}

export function TimeFormat( props ) {
    const time = props.split('T')[1].split('.')[0]
    return time 
}


