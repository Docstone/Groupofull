import React from 'react';


export function DateFormat( props ) { 
    const date = props.split('T')[0]
    return date
  
}

export function TimeFormat( props ) {
    const time = []
    time.push(props.split('T')[1].split(':')[0]) 
    time.push(props.split('T')[1].split(':')[1]) 

    return time.join(':')
}
