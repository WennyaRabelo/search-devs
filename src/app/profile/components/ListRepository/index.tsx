import * as S from "./styles"
import { IRepository } from "@/interface/repository"

interface IListRepository {
  repositories: IRepository[]
}

export function ListRepository({ repositories }: IListRepository) {

  const orderByStar = (repositories: IRepository[]) => {
    return repositories.sort((current, next) => {
      if (current.stargazers_count < next.stargazers_count) {
        return 1
      } else if (current.stargazers_count > next.stargazers_count) {
        return -1
      } else {
        return 0
      }

    })
  }

  return (
    <S.Container>
      {orderByStar(repositories).map((repository) => {
        return (
          <S.ItemRepository>
            <a
              className="nameRepository"
              target="_blank"
              href={repository.html_url}>
              {repository.name}
            </a>
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