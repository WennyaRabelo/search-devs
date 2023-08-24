import styled, { css } from "styled-components";

interface IContainer {
  bordercolor?: string
  borderwidth?: number
}

export const Container = styled.div<IContainer>`

  ${({ bordercolor }) =>
    bordercolor
      ? css` border: 1px solid ${bordercolor};`
      : css` border: 1px solid #E2E8F0;`
  }

${({borderwidth}) =>
    borderwidth
      ? css` border-width: ${borderwidth}px;`
      : css` border-width:1px;`
  }

 
  border-radius: 6px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  padding-left: 16px;

  .iconSearch {
    color: #A0AEC0;
  }

  .inputSearch {
    width: 100%;
    height: 100%;
    border: none;
    padding-left: 10px;
    font-size: 18px;
    color: #A0AEC0;
    
  }
`;