import React from 'react'
import { Input } from '../base/Input'
import { Button } from '../base/Button'

function AttendanceForm() {
  return (
    <>
    <section className="w-[450px] h-[520px] rounded-2xl bg-white border-[rgba(0, 0, 0, 0.1)] px-5 border ">
      <header className="w-full h-auto m-auto">
        <h1 className="heading text-2xl my-2.5 text-center">
          Welcome Back Admin
        </h1>
        <p className="text text-xl mb-2.5 mt-1 text-center">
          Enter your Details
        </p>
      </header>
      <form action="" className="w-full h-auto m-auto flex items-center justify-center flex-col gap-2.5">
        <Input type='text' label='Employee ID'/>
        <Input type='date' label='Date'/>
        <Input type='time' label='In Time'/>
        <Input type='time' label='Out Time'/>
        <Button variant={'primary'} className=' rounded-lg'>Mark Attendance</Button>
      </form>
    </section>
    </>
  )
}

export default AttendanceForm