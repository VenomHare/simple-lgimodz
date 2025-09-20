"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const deluxe = () => {
  
  const router = useRouter();

  useEffect(() => {
    
    router.push("/deluxe");
    
    return () => {
      
    }
  }, [])
  

  return (
    <div></div>
  )
}

export default deluxe
