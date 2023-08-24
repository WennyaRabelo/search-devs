import * as S from "./styles";

interface IHeaderInfoUser {
  user?: IUser
}

export function HeaderInfoUser({ user }: IHeaderInfoUser) {
  return (
    <S.ContainerInfoUser>

      <S.HeaderInfoUser>
        <img
          src={user?.avatar_url ?? ""}
          className="avatarUser" />
        <S.BoxRightInfoUser>
          <strong>{user?.name ?? "---"}</strong>
          <span className="username">@{user?.login ?? "---"}</span>
        </S.BoxRightInfoUser>

      </S.HeaderInfoUser>

      <S.HeaderDescription>
        {user?.bio ?? ""}
      </S.HeaderDescription>


    </S.ContainerInfoUser>
  )
}