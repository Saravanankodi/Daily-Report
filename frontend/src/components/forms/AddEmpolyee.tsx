import React from 'react'
import { Input } from '../base/Input'
import { Button } from '../base/Button'

function AddEmpolyee() {
  return (
    <>
    <section className="w-3/4 transition duration-300 ">
          <header className="w-full h-auto m-auto">
            <h1 className="heading text-4xl my-2.5 text-center">
                Add Employees
            </h1>
          </header>
          <form action="" className="w-full h-auto m-auto flex items-center justify-center flex-col gap-2.5">
            <Input type='text' label='Create Employee ID' placeholder='Create Employee ID' />
            <Input type='text' label='Enter Employee Name' placeholder='Enter Employee Name' />
            <Input type='text' label='Enter Employee Position'placeholder='Enter Employee Position' />
            <Input type='text' label='Notes (Optional)' placeholder='Any additional notes...' />
            <Button variant={'primary'} className=' rounded-lg'>Add Employees</Button>
          </form>
        </section>
    </>
  )
}

export default AddEmpolyee