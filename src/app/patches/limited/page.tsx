"use client";
import { useEffect } from "react";
import { useRouter } from 'next/navigation'
const Limited = () => {
  
  const router = useRouter();

  useEffect(() => {
    
    router.push("/limited")
    return () => {
      
    }
  }, [])
  

  return (
    <div></div>
  )
}

export default Limited
