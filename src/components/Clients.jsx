import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
    return (
        <section className={`${styles.flexCenter} my-4 flex-wrap w-full gap-16`}>
            {clients.map(client => {
                return (
                    <div key={client.id}
                    className='w-[192.25px] h-[60px] flex justify-center items-center'>
                        <img src={client.logo}
                            alt='client'
                            className="object-contain"    
                        />
                    </div>
                )
            })}
        </section>
    )
}

export default Clients