"use client";
import { useEffect } from "react";
import { useRouter } from 'next/navigation'
const limited = () => {
  
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

export default limited
