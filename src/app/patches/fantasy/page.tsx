"use client";
import { useEffect } from "react";
import { useRouter } from 'next/navigation'
const Fantasy = () => {
  
  const router = useRouter();

  useEffect(() => {
    router.push("/fantasy")
  }, [router])
  

  return (
    <div></div>
  )
}

export default Fantasy
