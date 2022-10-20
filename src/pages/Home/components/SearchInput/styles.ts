import styled from "styled-components";

export const SerachInputContainer = styled.form`
    width: 100%;
    margin-top: 3.5rem;
    margin-bottom: 3rem;

    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.75rem;

        h3 {
            font-size: ${(props) => props.theme.textSizes["title-title-s"]};
            color: ${(props) => props.theme.colors["base-subtitle"]}
        }

        span {
            font-size: ${(props) => props.theme.textSizes["text-text-s"]};
            color: ${(props) => props.theme.colors["base-span"]};
        }
    }

    > input {
        width: 100%;
        padding: 0.75rem 1rem;

        border-radius: 6px;
        border: 1px solid ${(props) => props.theme.colors["base-border"]};
        background: ${(props) => props.theme.colors["base-input"]};
        color: ${(props) => props.theme.colors["base-text"]};

        transition: .4s;

        &:focus {
            border-color: ${(props) => props.theme.colors["brand-blue"]};
            outline: none;
        }

        &::placeholder {
            color: ${(props) => props.theme.colors["base-label"]};
        }
    }
`