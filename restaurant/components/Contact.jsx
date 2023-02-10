/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen p-2 flex items-center justify-center'>
        <div className='max-w-[1240px] mx-auto my-auto flex flex-col justify-center items-center h-full'>
          <h2>Unsere Öffnungszeiten :</h2>
          <h5>Montag -Samstag</h5>
          <p>17:30 - 22:00 Uhr</p>
          <p></p>
          <h5>Sonntag & Feiertage</h5>
          <p>11:30 - 14:30 & 17:30 - 22:00 Uhr</p>
          <p>Unsere Küche ist für Sie bis 21:30 Uhr geöffnet</p>

          <br></br>

          <h3>Restaurant Kreta</h3>
          <p>Stefania Chatzopoulou</p>
          <p>Leipziger Strasse 157</p>
          <p>36039 Fulda</p>
          <p>Tel.: +49 661 96218333</p>
          <p>info@restaurant-kreta-fulda.de</p>

          <br></br>

          <h3>Impressum</h3>
          <h5>Angaben gemäß § 5 TMG:</h5>
          <p>Stefanie Chatzopoulou</p>
          <p>Leipziger Strasse 157</p>
          <p>36039 Fulda</p>
          <p>Tel.: +49 661 96218333</p>
          <p>info@restaurant-kreta-fulda.de</p>

          <br></br>
          <span class="block text-sm text-gray-900 sm:text-center dark:text-gray-900">
            ©Restaurant Kreta 
          </span>
        </div>
    </div>
  )
}

export default Contact