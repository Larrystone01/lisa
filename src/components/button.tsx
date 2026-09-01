import styled from "styled-components";

type ButtonProps = {
  name: string;
  bgColor: string;
  textColor: string;
  borderColor?: string;
};

const Button = (props: ButtonProps) => {
  return (
    <StyledWrapper
      $bgColor={props.bgColor}
      $borderColor={props.borderColor}
      $textColor={props.textColor}
    >
      <button className="uppercase">{props.name}</button>
    </StyledWrapper>
  );
};

type StyledWrapperProps = {
  $bgColor: string;
  $textColor: string;
  $borderColor?: string;
};

const StyledWrapper = styled.div<StyledWrapperProps>`
  button {
    appearance: none;
    background-color: ${(props) => props.$bgColor};
    border: 1px solid ${(props) => props.$borderColor ?? "transparent"};
    box-sizing: border-box;
    color: ${(props) => props.$textColor};
    cursor: pointer;
    display: inline-block;
    font-family:
      Roobert,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Helvetica,
      Arial,
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol";
    font-size: 14px;
    font-weight: 300;
    line-height: normal;
    margin: 0;
    min-height: 3.75em;
    min-width: 0;
    outline: none;
    padding: 1em 2.3em;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    will-change: transform;
  }

  button:disabled {
    pointer-events: none;
  }

  button:hover {
    color: #fff;
    background-color: #1a1a1a;
    border-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  button:focus-visible {
    outline: 2px solid #b35c44;
    outline-offset: 4px;
  }

  button:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

export default Button;
