"use client";
import { useEffect } from "react";
import { useRouter } from 'next/navigation'
const Fantasy = () => {
  
  const router = useRouter();

  useEffect(() => {
    
    router.push("/fantasy")
    return () => {
      
    }
  }, [])
  

  return (
    <div></div>
  )
}

export default Fantasy
