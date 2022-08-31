import React from 'react'

const Button = ({styles}) => {
    return (
        <button type='button' className={` ${styles} py-4 px-6 bg-blue-gradient rounded-md font-poppins font-medium text-[18px] text-primary ouline-none`}>
            Get Started
        </button>
    )
}

export default Button