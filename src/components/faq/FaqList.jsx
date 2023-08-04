import {faqs} from '../../assets/data/faqs'
import FaqCard from './FaqItem'
const FaqLists = () => {
  return (
    <ul className='mt-[38px]'>
      {faqs.map((item,index)=>(
        <FaqCard item={item} key={index}/>
      ))}
    </ul>
  )
}

export default FaqLists