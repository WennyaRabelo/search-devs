import Image from "next/image";
import * as S from "./styles";
import { Grid } from '@mui/material';
import Link from "next/link";
import { FormSearch } from "@/components/FormSearch";

interface IHeaderPageProfile {
  onChange(value: string): void
  loading?: boolean
}

export function HeaderPageProfile({ onChange, loading = false }: IHeaderPageProfile) {

  return (
    <Grid container>
      <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
        <S.ContainerImage>
          <Link href="/">
            <Image
              src="/images/logo-profile.svg"
              alt="Logotipo Search Devs"
              width={192}
              height={26}
            />
          </Link>
        </S.ContainerImage>
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
        <FormSearch
        borderwidth={2}
        bordercolor="#8C19D2"
          loading={loading}
          onChange={value => onChange(value)} />
      </Grid>
    </Grid>
  )
}