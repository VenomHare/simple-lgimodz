"use client";
import { useEffect } from "react";
import { useRouter } from 'next/navigation'
const Limited = () => {
  
  const router = useRouter();

  useEffect(() => {
    router.push("/limited")
  }, [router])
  

  return (
    <div></div>
  )
}

export default Limited
