"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Deluxe = () => {

  const router = useRouter();

  useEffect(() => {
    router.push("/deluxe");
  }, [router])


  return (
    <div></div>
  )
}

export default Deluxe
