import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <section>
        <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                {/* ======== About Image ======== */}
                <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                    <img src={aboutImg} alt="" />
                    <div className="absolute Z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:righ-[-7%] lg:right-[22%]">
                        <img src={aboutCardImg} alt="" />
                    </div>
                </div>
                {/* ======== about content ======== */}
                <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                    <h2 className='heading'>Proud to be one of the best nations.</h2>
                    <p className="para_text text-justify">For 30 years in a row, U.S. news & World report has organized us one of the best public hospitals in the Nations and #1 in Texas. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className="text_para mt-[30px] text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus perferendis optio quam illum tempore numquam reiciendis laborum nam maxime harum! Ipsa perspiciatis alias dolores! Quisquam ea corrupti recusandae molestiae modi!</p>
                    <Link to='/'><button className='btn'>Learn more</button></Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About