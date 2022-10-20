import { useCallback, useEffect, useState } from "react";
import { Spinner } from "../../components/Spinner";
import { api } from "../../libs/axios";
import { Post } from "./components/Posts";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { HomePostsListsContainer } from "./styles";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export interface IPost {
    title: string;
    body: string;
    created_at: string;
    number: number;
    html_url: string;
    comments: number;
    user: {
        login: string;
    }
}

export function Home() {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [isLoading, setIsLoadind] = useState(true);

    const getPosts = useCallback(async(query: string = "") => {
        try{
            setIsLoadind(true)
            
            const response = await api.get(`/search/issues?q=${query}%20repo:${username}/${repoName}`);

            setPosts(response.data.items)
        } finally {
            setIsLoadind(false);
        }
    }, [posts]);

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <>
            <Profile />
            <SearchInput postsLength={posts.length} getPosts={getPosts} />
            {isLoading ? <Spinner /> : (
                 <HomePostsListsContainer>
                    {posts.map((post) => (
                        <Post key={post.number} post={post} />
                    ))}
             </HomePostsListsContainer>
            )}  
        </>
    )
}