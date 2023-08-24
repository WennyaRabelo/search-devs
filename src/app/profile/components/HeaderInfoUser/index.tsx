import * as S from "./styles";

export function HeaderInfoUser() {
  return (
    <S.ContainerInfoUser>

      <S.HeaderInfoUser>
        <img
          src="https://avatars.githubusercontent.com/u/54084350?v=4"
          className="avatarUser" />
        <S.BoxRightInfoUser>
          <strong>Wennya Rabelo</strong>
          <span className="username">@wennyarabelo</span>
        </S.BoxRightInfoUser>

      </S.HeaderInfoUser>

      <S.HeaderDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
      </S.HeaderDescription>


    </S.ContainerInfoUser>
  )
}