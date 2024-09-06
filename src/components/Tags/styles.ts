import styled from "styled-components";
type Props = {
  type: number;
};

export const MainDiv = styled.div<Props>`
  display: flex;
  padding: 4px 8px;
  align-items: center;
  border-radius: 100px;
  background: ${({ type }) =>
    type === 1
      ? "linear-gradient(90deg, #bc67ff 0%, #fc64ff 100%)"
      : type === 2
        ? "linear-gradient(90deg, #FF6767 0%, #FF64B8 100%)"
        : type === 3
          ? "linear-gradient(90deg, #7367FF 0%, #64C7FF 100%)"
          : type === 4
            ? "linear-gradient(97deg, #FA6E65 0%, #FFA06A 100%)"
            : type === 5
              ? "linear-gradient(97deg, #FF9D2A 0%, #FFD02A 100%)"
              : "linear-gradient(96deg, #5BB753 0%, #B7DF47 100%)"};
  color: var(--white-color);
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.05px;
`;
