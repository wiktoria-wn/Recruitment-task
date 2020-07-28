import styled from "styled-components";

export const Title = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 1px rgba(196, 196, 196, 0.2);
  border-radius: 4px;
  display: flex;
  align-items: center;
  max-width: 720px;
  height: 38px;
  left: 235px;
  top: 208px;
  margin: 20px 20px 0;
  padding: 10px;
  justify-content: space-between;
  cursor: pointer;

  @media (max-width: 740px) {
    width: 292px;
    height: 38px;
    left: 37px;
    top: 272px;
    margin: 10px auto 0;
    padding: 10px;
  }
`;

export const TitleValue = styled.div`
  font-family: Barlow;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #00687f;
`;

export const Icon = styled.img`
  border: none;
`;

export const MainContent = styled.div`
  background: #e0e6ee;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  max-width: 790px;
  max-height: auto;
  left: 205px;
  top: 96px;
  padding: 30px 0;
  margin: 20px auto;
`;
