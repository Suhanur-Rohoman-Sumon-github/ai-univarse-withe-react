import React from 'react';

const Button = (props) => {
    const {children}= props
    return (
        <div>
           <div className='text-center'>
           <button className="btn btn-active btn-success text-base-100">{children}</button> 
           </div>
        </div>
    );
};

export default Button;