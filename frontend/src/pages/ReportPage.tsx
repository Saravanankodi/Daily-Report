import React from 'react'
import ReportForm from '../components/forms/ReportForm';
import desflyer from '../assets/desflyer.png';
function ReportPage() {
  return (
    <>
     <div className="w-full h-full min-h-screen bg-gray-100">
      <header className="w-full h-auto m-auto">
        <img src={desflyer} alt="" className='w-auto m-auto' />
        <h2 className="text-2xl tittle text-center">
            Daily Report System
        </h2>
      </header>
      <div className="w-full min-w-md rounded-lg  p-8">
        <main className="w-full h-fit flex items-center justify-center transition duration-300 ">
            <ReportForm/>
        </main>
      </div>
    </div>
    </>
  )
}

export default ReportPage