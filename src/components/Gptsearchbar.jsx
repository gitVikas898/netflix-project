import React from 'react'
import languages from '../utils/languages';
import { useSelector } from 'react-redux';

const Gptsearchbar = () => {
  const {language} = useSelector(store=>store.config);
  return (
    <div className=' flex items-center justify-center'>
        <form action="" >
            <div className='flex items-center justify-between w-[40rem]'>
                <input type="text" className='p-4 outline-none rounded-l-md w-full' placeholder={languages[language].placeholder} />
                <button className='bg-red-600 text-white rounded-r-md  p-4'>{languages[language].search}</button>
            </div>
        </form>
    </div>
  )
}

export default Gptsearchbar