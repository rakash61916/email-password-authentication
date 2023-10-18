import { Outlet } from "react-router-dom";
import Header from "../header/Header";

export default function Home () {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    )
}