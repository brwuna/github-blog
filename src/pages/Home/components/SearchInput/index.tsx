import { SerachInputContainer } from "./styles";
import * as zod from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"

const searchFormSchema = zod.object({
    query: zod.string(),
});

type SearchFormInput = zod.infer<typeof searchFormSchema>

interface SearchInputProps {
    postsLength: number;
    getPosts: (query?: string) =>Promise<void>
}

export function SearchInput({ postsLength, getPosts }: SearchInputProps) {
    const { register, handleSubmit, reset } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema),
    });

    async function handleSearchPosts(data: SearchFormInput) {
        await getPosts(data.query);

        reset();
    }

    return (
        <SerachInputContainer onSubmit={handleSubmit(handleSearchPosts)}>
            <header>
                <h3>Publicações</h3>
                <span>{postsLength} publicações</span>
            </header>

            <input type="text" placeholder="Buscar conteúdo" {... register("query")} />
        </SerachInputContainer>
    )
}