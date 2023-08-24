"use client"
import Image from "next/image";
import * as S from "./styles";
import { Grid } from '@mui/material';
import { InputSearch } from "@/components/InputSearch";

interface IProfile {
  params: {
    username: string
  }
}

export default function Profile({ params }: IProfile) {

  return (
    <S.Container>
      <S.SubContainer>
        <Grid container>
          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
            <S.ContainerImage>
              <Image
                src="/images/logo-profile.svg"
                alt="Logotipo Search Devs"
                width={192}
                height={26}
              />
            </S.ContainerImage>
          </Grid>
          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
            <InputSearch
            onChange={() => { }} 
            borderColor="#8C19D2"
            borderWidth={2} />
          </Grid>
        </Grid>
      </S.SubContainer>
    </S.Container>
  )
}