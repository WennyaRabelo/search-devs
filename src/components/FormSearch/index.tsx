import { useState } from 'react';
import { InputSearch } from '../InputSearch'
import * as S from './styles'

interface IFormSearch {
  onChange(value: string): void
  loading?: boolean
  bordercolor: string
  borderwidth: number
}

export function FormSearch({
  loading,
  onChange,
  bordercolor,
  borderwidth
}: IFormSearch) {

  const [value, setValue] = useState<string>("");

  const onClickSearch = () => {
    if (value) {
      onChange(value)
    }
  }

  return (
    <S.ContainerSearch>
      <InputSearch
        bordercolor={bordercolor}
        borderwidth={borderwidth}
        onChange={(value) => { setValue(value) }}
      />

      <button
        className="btn-search"
        onClick={() => onClickSearch()}>
        {loading ? 'Carregando...' : 'Search'}
      </button>
    </S.ContainerSearch>
  )
}