import React from 'react'

const Cart = () => {
  return (
    <>
          <div className='flex'>
            <div style={{width:'500px'}} className='border rounded p-2 flex justify-between'>
              <div className='flex'>
                   <img className='w-40' src="https://images.jdmagicbox.com/rep/b2b/tablets/tablets-25.jpg" alt="" />
                   <div>
                       <h1 className='mt-5 ms-3'>paracetamol</h1> <br />
                       <h1 className=' ms-3'>$20</h1>
                   </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                 <div>
                     <i className='fa-solid fa-minus '></i>
                     <input value={2} className='w-14 text-center border mx-2' type="text" readOnly />
                     <i className='fa-solid fa-plus'></i>
                 </div>
                 <i className='fa-solid fa-trash-can mt-10'></i>
              </div>
            </div>
          </div>
    </>
  )
}

export default Cart