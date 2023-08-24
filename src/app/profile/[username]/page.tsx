"use client"
import * as S from "./styles";
import { Grid } from '@mui/material';
import { HeaderPageProfile } from "../components/HeaderPageProfile";
import { HeaderInfoUser } from "../components/HeaderInfoUser";
import { InfoSocialMediaUser } from "../components/InfoSocialMediaUser";
import { ListRepository } from "../components/ListRepository";

interface IProfile {
  params: {
    username: string
  }
}

export default function Profile({ params }: IProfile) {

  return (
    <S.Container>
      <S.SubContainer>
        <HeaderPageProfile />
        <Grid container className="gridContent">
          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
            <HeaderInfoUser />
            <InfoSocialMediaUser />
          </Grid>

          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
            <ListRepository />
          </Grid>
        </Grid>
      </S.SubContainer>
    </S.Container>
  )
}