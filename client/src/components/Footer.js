import React from 'react'

export default function Footer() {
  return (
<footer class="p-4 bg-white rounded-t-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="#" class="hover:underline">The Other Cinema™</a>
    </span>
    <p className='text-gray-500'> What good films are made of..</p>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
    <li>
    <a href="/about" class="mr-4 hover:underline md:mr-6 ">Hakkında</a>
    </li>
    <li>
    <a href="/about" class="hover:underline">İletişim</a>
    </li>
    </ul>
</footer>
  )
}
