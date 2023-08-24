import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    margin-bottom: 60px;
  }
`;

export const ContainerSearch = styled.div`

  display: flex;
  width: 100%;
  max-width: 800px;
  
  .btn-search {
    background: #8C19D2;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
    width: 176px;
    height: 48px;
    border-radius: 6px;
    border: none;
    margin-left: 30px;
  }
`;
