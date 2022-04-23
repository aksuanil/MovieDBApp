import React, { useState } from 'react'
import MailPopup from '../components/MailPopup';

export default function About() {
	return (
		<>
			<div class="text-center py-12 px-6 mt-12">
				<h1 class="font-display font-bold text-5xl mb-6">Bize Ulaşın</h1>
				<p class="max-w-lg mx-auto">test</p>
			</div>

			<div class="container mx-auto px-6 mb-12">

				<div class="flex flex-col gap-12 max-w-4xl mx-auto">
					<div className='flex'>
						<a href="mailto:{{ contact.address }}" class="flex items-center my-2">
							<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
							aksu.anil@outlook.com
						</a>
						<a href="https://www.google.com/maps/place/{{ contact.address }}" target="_blank" class="flex items-center my-2">
							<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
							İstanbul
						</a>
					</div>
					<div className='flex flex-col justify-center'>
						<div className='flex flex-row gap-8'>
							<div className='grow' >
								<label class="block text-base tracking-tight text-gray-600 bg-gradient-to-r from-slate-500 via-transparent to-transparent bg-[length:50%_2px] bg-no-repeat bg-left-bottom font-semibold pb-[6px]">İsim</label>
								<input name="name" type="text" placeholder="İsim" required class="w-full mt-2 border-none text-sm p-4 bg-gray-100 text-gray-700" />
							</div>
							<div className='grow' >
								<label class="block text-base tracking-tight text-gray-600 bg-gradient-to-r from-slate-500 via-transparent to-transparent bg-[length:70%_2px] bg-no-repeat bg-left-bottom font-semibold pb-[6px]">Email Adresi</label>
								<input name="email" type="email" placeholder="email@adresiniz.com" required class="w-full mt-2 border-none text-sm p-4 bg-gray-100 text-gray-700" />
							</div>
						</div>

						<div class="mt-6">
							<label class="block text-base tracking-tight text-gray-600 bg-gradient-to-r from-slate-500 via-transparent to-transparent bg-[length:30%_2px] bg-no-repeat bg-left-bottom font-semibold pb-[6px]">Mesaj</label>
							<textarea name="message" placeholder="Mesajınız" required class="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-gray-700"></textarea>
						</div>
						<button onClick={() => {setTimeout(() => document.getElementById("close").click(), 2500)}} id='mailPopup' data-modal-toggle="popup-modal" class=" inline-block mx-auto bg-slate-600 hover:bg-slate-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4 mt-6">
							Gönder
						</button>
						<MailPopup/>
					</div>
				</div>
			</div>
		</>
	)
}
