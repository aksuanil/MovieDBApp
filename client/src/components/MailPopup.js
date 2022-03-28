import React from 'react'

export default function MailPopup() {
  return (
    <div>
    <div id="popup-modal" tabindex="-1" class="hidden justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
        <div class="relative p-4 w-full max-w-md h-full md:h-auto">
            <div class="relative bg-slate-700 rounded-lg shadow dark:bg-gray-700">
                <div class="flex justify-end p-2">
                    <button id='close' type="button" class="hidden" data-modal-toggle="popup-modal">
                    </button>
                </div>
                <div class="p-6 pt-0 text-center">
                    <svg class="mx-auto mb-4 w-14 h-14 text-green-500 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <h3 class="mb-5 text-lg font-normal text-gray-200 dark:text-gray-400">Mesajınız Gönderildi <br/> Teşekkürler !</h3>
                </div>
            </div>
        </div>
    </div></div>
  )
}
