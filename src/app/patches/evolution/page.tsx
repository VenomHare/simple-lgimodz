"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Evolution = () => {

  const router = useRouter();

  useEffect(() => {
    router.push("/evolution");
  }, [router])


  return (
    <div></div>
  )
}

export default Evolution
