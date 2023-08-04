import {doctors} from '../../assets/data/doctors'
import DoctorCard from './DoctorCard.jsx'
const DoctorsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
        {doctors.map((item,index)=>(
            <DoctorCard key={index} doctor={item}/>
        ))}
    </div>
  )
}

export default DoctorsList