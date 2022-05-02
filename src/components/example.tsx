import styled from "styled-components";

// styled-component example

const Title = styled.h1<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 48px;
`;

const app: React.FC = () => {
  return <Title color={"red"} />;
};
