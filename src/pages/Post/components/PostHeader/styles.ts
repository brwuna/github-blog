import styled from "styled-components";

export const PostHeaderContainer = styled.section`
    width: 100%;
    min-height: 10.5rem;
    margin-top: -5.5rem;

    background: ${(props) => props.theme.colors["base-profile"]};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 2rem;

    display: flex;
    flex-direction: column;

    > header {
        width: 100%;
        margin-bottom: 1.25rem;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    > h1 {
        font-size: ${(props) => props.theme.textSizes["title-title-l"]};
        color: ${(props) => props.theme.colors["base-title"]};
        line-height: 130%;
        margin-bottom: 0.5rem;
    }

    > ul {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;

        li {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            line-height: 0px;

            font-size: ${(props) => props.theme.textSizes["text-text-m"]};
            color: ${(props) => props.theme.colors["base-span"]};
        }

        svg {
            color: ${(props) => props.theme.colors["base-label"]}; 
        }
    }
`