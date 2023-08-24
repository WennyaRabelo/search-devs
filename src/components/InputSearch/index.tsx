import { Search } from "@mui/icons-material"
import * as S from "./styles"
import { ChangeEvent, useEffect, useState } from "react"

interface IInputSearch {
  onChange(value: string): void;
  bordercolor?: string;
  borderwidth?: number;
}

export function InputSearch({
  onChange,
  bordercolor,
  borderwidth
}: IInputSearch) {

  const [value, setValue] = useState<string>("");

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setValue(value)
  }

  useEffect(() => {
    onChange(value)
  }, [value])

  return (
    <S.Container
      bordercolor={bordercolor}
      borderwidth={borderwidth}>
      <Search
        className="iconSearch"
      />
      <input
        placeholder="Search"
        className="inputSearch"
        value={value}
        onChange={(e) => onChangeInput(e)}
      />
    </S.Container>
  )
}