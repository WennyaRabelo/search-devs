import { Search } from "@mui/icons-material"
import * as S from "./styles"

export function InputSearch() {

  return (
    <S.Container>
      <Search 
        className="iconSearch"
      />
      <input
        placeholder="Search"
        className="inputSearch"
      />
    </S.Container>
  )
}