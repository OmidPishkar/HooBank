import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
    return (
        <section className={`${layout.sectionReverse}`}>
            <div className="flex items-center justify-center w-full md:w-1/2">
                <img src={bill} alt="bill"  className="w-full h-full"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 w-full md:w-1/2">
                <h1 className={`text-center sm:text-left ${styles.heading2}`}>
                    Easily control your<br/> billing & invoicing.
                </h1>

                <p className={`${styles.paragraph} text-center sm:text-left`}>
                    Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
                </p>

                <div className="w-full flex justify-center sm:justify-start gap-5 mb-10 sm:mb-0">
                    <img src={apple} alt="apple" className="cursor-pointer"/>
                    <img src={google} alt="google" className="cursor-pointer"/>
                </div>
            </div>
        </section>
    )
}

export default Billing