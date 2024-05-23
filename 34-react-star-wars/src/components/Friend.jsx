import React from 'react';
//rsc
const Friend = ({friendPhoto,pos}) => { //friendPhoto and pos
    let styles = 'col-4 p-1';
    if(pos === 7) {
        styles+=" bottom-left"
    }
    if(pos === 9) {
        styles += " bottom-right"
    }
    return (
        <img className={styles} src={friendPhoto} alt='friend'/>
    );
};

export default Friend;