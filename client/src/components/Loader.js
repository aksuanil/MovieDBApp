import React from 'react'

export default function Loader() {
  return (
    <div className="bg-gradient-to-tl from-gray-700 via-gray-900 to-black h-screen">
    <div className="flex flex-col items-center">
        <div className="w-40 h-40 mt-36 border-t-4 border-b-4 border-yellow-500 rounded-full animate-spin"></div>
        <div className="pt-5 text-white">Yükleniyor...</div>
    </div>
</div>  )
}
