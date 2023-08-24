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
          <span>{!!user?.blog ? user?.blog :  "---"}</span>
        </li>

        <li className="listSocialMediaItem">
          <img src="/icons/twitter.svg" />
          <span>{user?.twitter_username ? `@${user?.twitter_username}` : "---"}</span>
        </li>
      </ul>

      <S.ButtonContact>
        Contato
      </S.ButtonContact>

    </S.Container>
  )
}