import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
    return (
        <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
            <div className="w-full flex flex-col lg:flex-row justify-between gap-5 lg:gap-0 items-center">
                <h2 className={`${styles.heading2} text-center xs:text-left xs:w-max`}>
                    What people are<br/>saying about us
                </h2>

                <p className={`${styles.paragraph} max-w-[450px] text-center`}>
                    Everything you need to accept card payments
                    <br/>and grow your business anywhere on the planet.
                </p>
            </div>

            <div className="flex flex-wrap justify-center items-center feedback-container relative z-[1]">
                {feedback.map(card => <FeedbackCard key={card.id} {...card}/>)}
            </div>
        </section>
    )
}

export default Testimonials