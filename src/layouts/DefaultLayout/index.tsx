import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Home } from "../../pages/Home";
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header />
            <main>
                <Outlet />
            </main>
        </LayoutContainer>
    )
}