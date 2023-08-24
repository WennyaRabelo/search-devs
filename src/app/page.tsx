"use client"
import Image from "next/image"
import * as S from "./page.styles"
import { InputSearch } from "@/components/InputSearch"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FormSearch } from "@/components/FormSearch";

export default function Home() {

  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);


  const onClickSearch = (value: string) => {
    setLoading(true)
    router.push(`/profile/${value}`)
  }


  return (
    <S.Container>
      <Image
        src="/images/logo-home.svg"
        alt="Logotipo search devs"
        width={478}
        height={64}
        className="logo"
      />

      <FormSearch
        bordercolor="#E2E8F0"
        borderwidth={1}
        loading={loading}
        onChange={value => onClickSearch(value)} />
    </S.Container>
  )
}
