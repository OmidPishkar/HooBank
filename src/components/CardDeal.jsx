import React from 'react'
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
    return (
        <section className={`${layout.section}`}>
            <div className='w-full md:w-1/2 flex flex-col justify-center mb-6 md:mb-0'>

                <h1 className={`${styles.heading2} text-center sm:text-left`}>
                    Find a better card deal<br/>in few easy steps.
                </h1>

                <p className={`${styles.paragraph} my-8 text-center sm:text-left`}>
                    Arcu tortor, purus in mattis at sed integer faucibus. Aliquet<br/>quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
                </p>


                <div className='w-full flex justify-center sm:justify-start'>
                    <Button/>
                </div>

            </div>

            <div className='flex justify-center items-center w-full md:w-1/2'>
                <img src={card} alt="card" />
            </div>
        </section>
    )
}

export default CardDeal