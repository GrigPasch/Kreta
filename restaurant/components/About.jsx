/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full h-screen text-center'>
        <div className ='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
              <h2 className='uppercase tracking-widest text-teal-500'>
                Herzlich willkommen!
              </h2>
              <p className='py-4 max-w-[70%] m-auto text-gray-800 text-lg'>
                Kreta, die sonnengebadete Insel im östlichen Mittelmeer gleicht einem Kontinent,riesengroß und voller Überraschungen!
                kristallklare Buchten , einsame Hochebenen , wilde Schluchten und versteckte Bergdörfer.
                "Insel der Götter" nennen die Kreter ihr Eiland , Zeus soll hier geboren sein.Sie glauben fest daran,
                das die größte griechische Insel voll positiver Energie steckt .
              </p>
            </div>
        </div>
    </div>
  )
}

export default About