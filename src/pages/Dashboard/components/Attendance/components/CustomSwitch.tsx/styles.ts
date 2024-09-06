import styled from "styled-components";
export interface Props {
  $position: number;
}
export interface Props2 {
  $isSelected: boolean;
}

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  position: relative;
  background: var(--UI-UI30, #efefef);
  box-shadow:
    1px 2px 4px 0px rgba(0, 0, 0, 0.08),
    0px 1px 1px 0px rgba(255, 255, 255, 0.15) inset;
  backdrop-filter: blur(40px);
  height: 38px;
  flex-shrink: 0;
  padding: 2px;
  box-sizing: border-box;
`;

export const Highlight = styled.div<Props>`
  padding: 8px 13px;
  display: flex;
  background: var(--white-color);
  height: 34px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  backdrop-filter: blur(40px);
  box-shadow:
    1px 2px 4px 0px rgba(0, 0, 0, 0.08),
    0px 1px 1px 0px rgba(255, 255, 255, 0.15) inset;
  position: absolute;
  transition: all 0.3s ease;
  width: ${(props) => `${props.$position === 0 ? 43 : 52}%`};
  transform: ${(props) => `translateX(${props.$position === 0 ? -61 : 42}%)`};
  box-sizing: border-box;
  color: transparent;
`;

export const Option = styled.span<Props2>`
  box-sizing: border-box;
  color: var(--UI-UI70, #b9b9b9);
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 8px 13px;
  z-index: 1;
  transition: all 0.3s ease;
  ${({ $isSelected }) =>
    $isSelected
      ? `
          background: linear-gradient(96deg, #fa6e65 0.33%, #ff9d2a 96.41%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        `
      : `
          color: var(--UI-UI70, #b9b9b9);
           cursor: pointer
        `}
`;
