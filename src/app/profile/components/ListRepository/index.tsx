import * as S from "./styles"
import { IRepository } from "@/interface/repository"

interface IListRepository {
  repositories: IRepository[]
}

export function ListRepository({ repositories }: IListRepository) {
  return (
    <S.Container>
      {repositories.map((repository) => {
        return (
          <S.ItemRepository>
            <span className="nameRepository">{repository.name}</span>
            <p className="description">{repository.description}</p>

            <S.InfoRepository>
              <img src="/icons/star.svg" className="iconStar" />
              <span>{repository.stargazers_count}</span>
              <img src="/icons/point.svg" className="iconPoint" />
              <span>{repository.updated_at}</span>
            </S.InfoRepository>

            <S.Divider />
          </S.ItemRepository>
        )
      })}

    </S.Container>
  )
}