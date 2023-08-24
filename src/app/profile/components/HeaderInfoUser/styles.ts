import styled from "styled-components";

export const ContainerInfoUser = styled.div`
  max-width: 248px;
`;

export const HeaderInfoUser = styled.div`
  display: flex;
  
  .avatarUser {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 16px;
  }
`;

export const BoxRightInfoUser = styled.div`
  display: flex;
  flex-direction: column;

  .username {
    margin-top: 4px;
    color: #A0AEC0;
  }
`;

export const HeaderDescription = styled.p`
  margin-top: 16px;
`;