import React from 'react'
import Table from './Table'
import Calendarr from './Calendar'

const Stats = () => {
  return (
    <div className="flex flex-wrap w-full items-center justify-center px-10 gap-4 overflow-y-auto">
        <Table />
        <Calendarr />
        
    </div>
  )
}

export default Stats
