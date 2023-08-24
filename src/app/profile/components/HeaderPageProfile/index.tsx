import Image from "next/image";
import * as S from "./styles";
import { Grid } from '@mui/material';
import { InputSearch } from "@/components/InputSearch";

export function HeaderPageProfile() {
  return (
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
      <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
        <InputSearch
          onChange={() => { }}
          borderColor="#8C19D2"
          borderWidth={2} />
      </Grid>
    </Grid>
  )
}