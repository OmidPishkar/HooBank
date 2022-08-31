import { quotes } from "../assets";

const FeedbackCard = ({id , content , name , title , img}) => {
    return (
        <div className="border border-[#13111a9b] hover:border-transparent
        flex justify-start flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
            
            <img src={quotes} alt="quotes" className="w-[42.6px] h-[27.6px] object-contain"/>
            
            <p className='text-center xs:text-left text-base max-w-[290px] leading-[32.4px] font-semibold text-white my-5'>
                {content}
            </p>

            <div className="flex  items-center gap-2 flex-col xs:flex-row">

                <img src={img} alt="img" className="w-[48px] h-[48px] object-contain"/>
                
                <div className="flex flex-col items-center gap-3 xs:items-end w-full">
                    <h5 className="font-semibold text-xl leading-[32px] text-white">{name}</h5>
                    <span className="font-semibold text-white opacity-50 text-[16px]">
                        {title}
                    </span>
                </div>
            </div>

        </div>
    )
}

export default FeedbackCard