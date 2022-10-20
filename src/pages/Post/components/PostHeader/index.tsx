import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDays, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "../../../../components/ExternalLink";
import { Spinner } from "../../../../components/Spinner";
import { DateFormatterRelative } from "../../../../utils/formatter";
import { IPost } from "../../../Home";
import { PostHeaderContainer } from "./styles";

interface PostHeaderProps {
    postData: IPost;
    isLoading: boolean;
}

export function PostHeader({ postData, isLoading }: PostHeaderProps) {
    const navigate = useNavigate();

    function goBack() {
        navigate(-1)
    }

    const formattedDate = DateFormatterRelative(postData?.created_at);

    return (
        <PostHeaderContainer>
            {isLoading ? <Spinner /> : (
                <>
                    <header>
                        <ExternalLink 
                            as="button" 
                            icon={<FontAwesomeIcon icon={faChevronLeft} />} 
                            text="Voltar" 
                            variant="iconLeft"
                            onClick={goBack}
                        />
                        <ExternalLink text="Ver no Github" href={postData.html_url} target="_blank" />
                    </header>

                    <h1>{postData.title}</h1>

                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faGithub} />
                            brwuna
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCalendarDays} />
                            {formattedDate}
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faComment} />
                            {postData.comments}
                        </li>
                    </ul>
                </>
            )}
            
        </PostHeaderContainer>
    )
}