import Header from '@/components/header'

import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
    return (
        <div>
            <div className='grid-background'></div>
            <main className='min-h-screen p-5 px-10'>
                <Header />
                <Outlet />
            </main>
            <div className='p-10 bg-gray-800  text-center '>
                <p className=' font-bold text-2xl'>🙌 Made By Pankaj 🙌</p>
                <h2 className='mt-2'>Email : pgarg9355@gmail.com</h2>
            </div>
        </div>
    )
}

export default AppLayout
