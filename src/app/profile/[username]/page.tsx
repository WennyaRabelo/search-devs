"use client"
import * as S from "./styles";
import { Grid } from '@mui/material';
import { HeaderPageProfile } from "../components/HeaderPageProfile";
import { HeaderInfoUser } from "../components/HeaderInfoUser";
import { InfoSocialMediaUser } from "../components/InfoSocialMediaUser";
import { ListRepository } from "../components/ListRepository";
import * as userService from "@/service/user/user.service"
import { useEffect, useState } from "react";
import { IUser } from "@/interface/user";
import { IRepository } from "@/interface/repository";
import { useRouter } from "next/navigation";

interface IProfile {
  params: {
    username: string
  }
}

export default function Profile({ params }: IProfile) {

  const router = useRouter();

  const [search, setSearch] = useState<string>('')
  const [user, setUser] = useState<IUser>()
  const [repositories, setRepositories] = useState<IRepository[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const getUserRepos = async (username: string) => {
    try {
      setLoading(true)
      const user = await userService.getUsers(username)
      const repositories = await userService.getRepos(username)
      setLoading(false)
      setUser(user)
      setRepositories(repositories)
    } catch (error: any) {
      const statusError = error?.response?.status
      if (statusError === 404) {
        alert("Usuário não encontrado")
      }
      router.push("/")
    }

  }

  useEffect(() => {
    getUserRepos(params.username)
  }, [params])

  useEffect(() => {
    if (!!search) {
      getUserRepos(search)
    }
  }, [search])


  return (
    <S.Container>
      <S.SubContainer>
        <HeaderPageProfile
          loading={loading}
          onChange={value => setSearch(value)} />
        <Grid container className="gridContent">
          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
            {loading
              ? <span>Carregando informações...</span>
              : <>
                <HeaderInfoUser user={user} />
                <InfoSocialMediaUser user={user} />
              </>
            }
          </Grid>

          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
            {loading
              ? <span>Carregando informações...</span>
              : <>
                <ListRepository repositories={repositories} />
              </>
            }

          </Grid>
        </Grid>
      </S.SubContainer>
    </S.Container>
  )
}