import styled from "styled-components"

export const Container = styled.div`
  overflow-y: auto;
  max-height: 600px;
`;

export const ItemRepository = styled.div`

  .nameRepository {
    font-weight: 600;
    font-size: 20px;
    text-decoration: none;
    color: #171923;
  }

  .description {
    margin-top: 20px;
    color: #4A5568;
    font-size: 16px;
  }
`;

export const InfoRepository = styled.div`
  display: flex;
  align-items: center;
  margin-top: 17px;
  color: #4A5568;
  

  .iconStar {
    margin-right: 8px;
  }

  .iconPoint {
    margin: 0 8px;
  }

  span {
    font-size: 14px;
  }
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #E2E8F0;
  margin: 16px 0;
`;