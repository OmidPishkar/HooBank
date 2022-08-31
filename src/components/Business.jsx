import React from 'react'
import { features } from '../constants'
import styles , {layout} from '../style'
import Button from './Button'

const FeatureCard = ({icon , title , content , index}) => (
    <div className='flex sm:flex-row flex-col items-center p-6 rounded-[20px] feature-card'>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
            <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain'/>
        </div>

        <div className='flex-1 flex flex-col ml-3 gap-3'>
            <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] text-center sm:text-left my-5 sm:my-0'>
                {title}
            </h4>
            <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] text-center sm:text-left my-5 sm:my-0'>
                {content}
            </p>
        </div>
    </div>
)

const Business = () => {
    return (
        <section id='features' className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={`${styles.heading2} text-center sm:text-left`}>
                    You do the business,<br className='sm:block hidden'/> we’ll handle the money.
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center sm:text-left mx-auto sm:mx-0`}>
                    With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
                </p>

                <Button styles='mt-10 mx-auto sm:mx-0'/>
            </div>

            <div className={`${layout.sectionImg} flex-col gap-6`}>
                {features.map( (feature , index) => {
                    return(
                        <FeatureCard 
                            key={feature.id}
                            index={index}
                            {...feature}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Business