import React from 'react'
import Table from './Table'
import Calendarr from './Calendar'

const Stats = () => {
  return (
    <div className="flex md:flex-row flex-col w-full items-center justify-center px-10 gap-4">
        <Table />
        <Calendarr />
        
    </div>
  )
}

export default Stats
