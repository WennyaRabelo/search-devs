import { IUser } from "@/interface/user";
import * as S from "./styles";

interface IInfoSocialMediaUser {
  user?: IUser
}

export function InfoSocialMediaUser({ user }: IInfoSocialMediaUser) {

  return (
    <S.Container>
      <ul className="listSocialMedia">
        <li className="listSocialMediaItem">
          <img src="/icons/users.svg" />
          <span>{user?.followers} seguidores</span>
        </li>

        <li className="listSocialMediaItem mb-24">
          <img src="/icons/heart.svg" />
          <span>{user?.following} seguindo</span>
        </li>

        <li className="listSocialMediaItem">
          <img src="/icons/job.svg" />
          <span>{user?.company ?? "---"}</span>
        </li>

        <li className="listSocialMediaItem">
          <img src="/icons/location.svg" />
          <span>{user?.location ?? "---"}</span>
        </li>

        <li className="listSocialMediaItem">
          <img src="/icons/email.svg" />
          <span>{user?.email ?? "---"}</span>
        </li>

        <li className="listSocialMediaItem">
          <img src="/icons/link.svg" />
          {!!user?.blog
            ? <a
              className="listSocialMediaItemLink"
              target="_blank"
              href={user.blog}
            >{user.blog}</a>
            : <span>---</span>
          }
        </li>

        <li className="listSocialMediaItem">
          <img src="/icons/twitter.svg" />
          {!!user?.blog
            ? <a
              className="listSocialMediaItemLink"
              target="_blank"
              href={`https://twitter.com/${user.twitter_username}`}>
              @{user.twitter_username}</a>
            : <span>---</span>
          }
        </li>
      </ul>

      <S.ButtonContact>
        Contato
      </S.ButtonContact>

    </S.Container>
  )
}