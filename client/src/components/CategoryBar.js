import React, {useState} from 'react'

export default function CategoryBar({getGenreId}) {
  const [active, setActive] = useState(0);
  return (
      // <div className='flex flex-row pb-1 justify-evenly items-center h-12 bg-gradient-to-b  from-slate-500 via-slate-100 to-slate-50 font-semibold shadow-xl shadow-slate-600'>
      //   <div onClick={() => getGenreId(28)} className='text-stone-600 hover:text-black hover:underline underline-offset-4 text-lg'><a href="#">  Aksiyon  </a></div>
      //   <div onClick={() => getGenreId(35)} className='text-stone-600 hover:text-black hover:underline underline-offset-4 text-lg'><a href="#">  Komedi  </a></div>
      //   <div onClick={() => getGenreId(18)} className='text-stone-600 hover:text-black hover:underline underline-offset-4 text-lg'><a href="#">  Drama  </a></div>
      //   <div onClick={() => getGenreId(27)} className='text-stone-600 hover:text-black hover:underline underline-offset-4 text-lg'><a href="#">  Korku  </a></div>
      //   <div onClick={() => getGenreId(878)} className='text-stone-600 hover:text-black hover:underline underline-offset-4 text-lg'><a href="#">  Bilim-Kurgu  </a></div>
      //   <div onClick={() => getGenreId(36)} className='text-stone-600 hover:text-black hover:underline underline-offset-4 text-lg'><a href="#">  Tarih  </a></div>
      <>
      <div class="sm:hidden">
          <label for="tabs" class="sr-only">Tür Seçiniz</label>
          <select id="tabs" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>Aksiyon</option>
              <option>Komedi</option>
              <option>Drama</option>
              <option>Korku</option>
              <option>Bilim-Kurgu</option>
              <option>Tarih</option>
          </select>
        </div>
      <ul class=" hidden rounded-lg divide-x-4 divide-gray-700 shadow sm:flex dark:divide-gray-700">
          <li class="w-full">
              <a onClick={function(event){ getGenreId(28); setActive(1)}} href="#" className={`inline-block relative py-4 px-4 w-full text-sm font-medium text-center text-gray-900 hover:text-gray-50 dark:hover:bg-gray-700 ${active === 1 ? 'dark:text-white dark:bg-gray-700 ' : 'dark:bg-gray-800 dark:text-gray-400 '}`} aria-current="page">Aksiyon</a>
          </li>
          <li class="w-full">
              <a onClick={function(event){ getGenreId(35); setActive(2)}} href="#" className={`inline-block relative py-4 px-4 w-full text-sm font-medium text-center text-gray-900 hover:text-gray-50 dark:hover:bg-gray-700 ${active === 2 ? 'dark:text-white dark:bg-gray-700 ' : 'dark:bg-gray-800 dark:text-gray-400 '}`}>Komedi</a>
          </li>
          <li class="w-full">
              <a onClick={function(event){ getGenreId(18); setActive(3)}} href="#" className={`inline-block relative py-4 px-4 w-full text-sm font-medium text-center text-gray-900 hover:text-gray-50 dark:hover:bg-gray-700 ${active === 3 ? 'dark:text-white dark:bg-gray-700 ' : 'dark:bg-gray-800 dark:text-gray-400 '}`}>Drama</a>
          </li>
          <li class="w-full">
              <a onClick={function(event){ getGenreId(27); setActive(4)}} href="#" className={`inline-block relative py-4 px-4 w-full text-sm font-medium text-center text-gray-900 hover:text-gray-50 dark:hover:bg-gray-700 ${active === 4 ? 'dark:text-white dark:bg-gray-700 ' : 'dark:bg-gray-800 dark:text-gray-400 '}`}>Korku</a>
          </li>
          <li class="w-full">
              <a onClick={function(event){ getGenreId(878); setActive(5)}} href="#" className={`inline-block relative py-4 px-4 w-full text-sm font-medium text-center text-gray-900 hover:text-gray-50 dark:hover:bg-gray-700 ${active === 5 ? 'dark:text-white dark:bg-gray-700 ' : 'dark:bg-gray-800 dark:text-gray-400 '}`}>Bilim-Kurgu</a>
          </li>
          <li class="w-full">
              <a onClick={function(event){ getGenreId(36); setActive(6)}} href="#" className={` inline-block relative py-4 px-4 w-full text-sm font-medium text-center text-gray-900 hover:text-gray-50 dark:hover:bg-gray-700 ${active === 6 ? 'dark:text-white dark:bg-gray-700 ' : 'dark:bg-gray-800 dark:text-gray-400 '}`}>Tarih</a>
          </li>
      </ul>
      
      </>
      // </div>
  )
}
