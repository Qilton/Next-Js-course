"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const page = () => {
    const router=useRouter()
    const HandleClick=()=>{
            router.push("/")
    }
  return (
    <div>
      <button onClick={HandleClick}>Place Order</button>
    </div>
  )
}

export default page
