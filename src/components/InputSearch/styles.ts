import styled, { css } from "styled-components";

interface IContainer {
  borderColor?: string
  borderWidth?: number
}

export const Container = styled.div<IContainer>`

  ${(props) =>
    props.borderColor
      ? css` border: 1px solid ${props.borderColor};`
      : css` border: 1px solid #E2E8F0;`
  }

${(props) =>
    props.borderWidth
      ? css` border-width: ${props.borderWidth}px;`
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