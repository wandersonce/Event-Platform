import React from 'react'
import Header from '../components/Header'
import PlayerComponent from '../components/PlayerComponent'
import Sidebar from '../components/Sidebar'

export default function Event() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className='flex flex-1'>
        <PlayerComponent />
        <Sidebar />
      </main>
    </div>
  )
}
