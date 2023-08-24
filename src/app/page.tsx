"use client"
import Image from "next/image"
import * as S from "./page.styles"
import { InputSearch } from "@/components/InputSearch"

export default function Home() {
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
        <InputSearch />
        <button className="btn-search">Search</button>
      </S.ContainerSearch>
    </S.Container>
  )
}
