"use client"
import Image from "next/image"
import * as S from "./page.styles"
import { InputSearch } from "@/components/InputSearch"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const [value, setValue] = useState<string>("");

  const onClickSearch = () => {
    if (value) {
      router.push(`/profile/${value}`)
    }
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

      <S.ContainerSearch>
        <InputSearch
          onChange={(value) => { setValue(value) }}
        />

        <button
          className="btn-search"
          onClick={() => onClickSearch()}
        >Search</button>
      </S.ContainerSearch>
    </S.Container>
  )
}
