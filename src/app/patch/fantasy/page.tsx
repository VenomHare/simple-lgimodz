"use client";
import { useEffect } from "react";
import { useRouter } from 'next/navigation'
const Fantasy = () => {
  
  const router = useRouter();

  useEffect(() => {
    router.push("/router")
  }, [router])
  

  return (
    <div></div>
  )
}

export default Fantasy
