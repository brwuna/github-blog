import styled, { css } from "styled-components";

interface ExternalLinkProps {
    variant?: "iconLeft";
}

export const ExternalLinkContainer = styled.a<ExternalLinkProps>`
    border: none;
    border-bottom: 1px solid transparent;
    background: none;
    color: ${(props) => props.theme.colors["brand-blue"]};
    
    font-size: ${(props) => props.theme.textSizes["components-link"]};
    font-weight: 700;
    text-transform: uppercase;
    line-height: 19px;

    height: 19px;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    transition: .4s;

    svg {
        width: 0.75rem;
        height: 0.75rem;
    }

    &:hover {
        border-color: ${(props) => props.theme.colors["brand-blue"]};
    }

    ${({ variant }) => variant === "iconLeft" && css`
        flex-direction: row-reverse;
    `}
`