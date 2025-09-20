"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const evolution = () => {
  
  const router = useRouter();

  useEffect(() => {
    
    router.push("/evolution");
    
    return () => {
      
    }
  }, [])
  

  return (
    <div></div>
  )
}

export default evolution
