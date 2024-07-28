import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p>IT'S TIME TO MAKE SOME</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>big <span className='text-blue-400'>muscles</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>I hereby acknowledgement that I will come to the gym <span className='text-blue-400 font-medium'>Daily</span> and get in good shape, I promise i will have the <span className='text-blue-400 font-medium'>biggest muscles</span> in my Area.</p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
    )
}
