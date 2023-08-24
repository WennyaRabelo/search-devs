import styled from "styled-components";

export const Container = styled.div`
  
  margin-top: 24px;

  .listSocialMedia {
    list-style: none;
  }

  .listSocialMediaItem {
    display: flex;
    align-items: center;
    margin-top: 8px;

    img {
      margin-right: 8px;
    }
  }

  .mb-24 {
    margin-bottom: 24px;
  }
`;

export const ButtonContact = styled.button`
  width: 280px;
  height: 48px;
  border-radius: 6px;
  border: none;
  font-weight: 600;
  color: #fff;
  background: #8C19D2;
  margin-top: 40px;
  font-size: 18px;

`;