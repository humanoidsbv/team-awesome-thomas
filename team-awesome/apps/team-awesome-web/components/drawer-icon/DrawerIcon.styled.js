import styled from "styled-components";

// Hamburgers

// Sizing definitions
export const DrawerIcon = styled.button`
    --size: 18px;
    --stroke: 2px;
    --margin: 4px;
    box-sizing: content-box;
    color: var(--grey-1);
    vertical-align: middle;

    &::after, &, &::before {
        border-radius: calc(var(--stroke) / 2);
        border: solid calc(var(--stroke) / 2) currentColor;
        display: block;
        height: 0;
        position: relative;
        transition-duration: 0.6s;
        transition-property: transform opacity;
        width: calc(var(--size) - var(--stroke));
    }
  
    &::before, &::after {
        margin-left: calc(var(--stroke) / -2 );
        content: '';
    }

    &::before {
        margin-top: calc(var(--stroke) / -1 - var(--margin));   
    }

    &::content:hover {
        transform: scaleX(0);
    }

    &::after {
        margin-top: calc(var(--margin) * 2);
        ${(props) => props.isOpen && `
            transform: translateY(calc(var(--margin) / -2)) rotate(-226deg);
    `}
    }
  
//   /* Hover animation fun */
//   &.open span:first-child {
//     transform: translateY(calc((var(--size) - var(--margin) * 2) / 2)) rotate(225deg);
//   }
  
//   &.open span:nth-child(2) {
//     transform: scalex(0) translateX(var(--size));
//   }
  
//   &.open span:nth-child(3) {
//     transform: translateY(calc((var(--size) - var(--margin) * 2) / -2)) rotate(-226deg);
//   }
  `;