import * as S from "./styles";

export function InfoSocialMediaUser() {
  return (
    <S.Container>
      <ul className="listSocialMedia">
        <li className="listSocialMediaItem">
          <img src="/icons/users.svg" />
          <span>240 seguidores</span>
        </li>

        <li className="listSocialMediaItem mb-24">
          <img src="/icons/heart.svg" />
          <span>24 seguindo</span>
        </li>

        <li className="listSocialMediaItem">
          <img src="/icons/job.svg" />
          <span>Petize</span>
        </li>

        <li className="listSocialMediaItem">
          <img src="/icons/location.svg" />
          <span>São Paulo</span>
        </li>

        <li className="listSocialMediaItem">
          <img src="/icons/email.svg" />
          <span>wennya@gmail.com</span>
        </li>

        <li className="listSocialMediaItem">
          <img src="/icons/link.svg" />
          <span>wennyarabelo.com</span>
        </li>

        <li className="listSocialMediaItem">
          <img src="/icons/twitter.svg" />
          <span>@wennyarabelo</span>
        </li>
      </ul>

      <S.ButtonContact>
        Contato
      </S.ButtonContact>

    </S.Container>
  )
}