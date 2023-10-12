import { Outlet } from "react-router-dom";
import '../styles/index.css'


import Nav from "../components/Nav";

export default function Root() {
    return (
        <>
            <nav>
                <Nav />
            </nav>
            <Outlet />
        </>
    )
}