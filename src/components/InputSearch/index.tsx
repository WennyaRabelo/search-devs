import { Search } from "@mui/icons-material"
import * as S from "./styles"
import { ChangeEvent, useEffect, useState } from "react"

interface IInputSearch {
  onChange(value: string): void;
  borderColor?: string;
  borderWidth?: number;
}

export function InputSearch({
  onChange,
  borderColor,
  borderWidth
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
      borderColor={borderColor}
      borderWidth={borderWidth}>
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