"use client";
import { useEffect } from "react";
import { useRouter } from 'next/navigation'
const fantasy = () => {
  
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

export default fantasy
