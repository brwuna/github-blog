import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostContainer = styled(Link)`
    width: 100%;
    height: 16.25rem;
    padding: 2rem;
    border-radius: 10px;
    background: ${(props) => props.theme.colors["base-post"]};
    border: 1px solid ${(props) => props.theme.colors["base-post"]};
    transition: .4s;

    &:hover {
        border-color: ${(props) => props.theme.colors["base-label"]};
    }

    div {
        display: flex;
        gap: 1rem;
        margin-bottom: 1.25rem;

        strong {
            flex: 1;
            color: ${(props) => props.theme.colors["base-title"]};
            font-size: ${(props) => props.theme.textSizes["title-title-m"]};

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }

        span {
            width: max-content;
            font-size: ${(props) => props.theme.textSizes["text-text-s"]};
            color: ${(props) => props.theme.colors["base-span"]};
        }
    }
    
    p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
    }
    
`