import Image from 'next/image'
import Send from '../../public/Send.svg'
const Welcome = () => {
  return (
    <div className='absolute z-30'>
        <p className='text-3xl font-semibold'>Explore the world with us</p>
        <div>
           <p>Learn more</p>
            <Image src={Send} alt='send' height={50} width={50} className='rounded-full'/>
        </div>
    </div>
  )
}

export default Welcome
