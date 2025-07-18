import type { FC } from "react";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "./page/ProfilePage";

export const ProfileRoutes: FC = ()=>{
    return (
        <Routes>
            <Route index element={<ProfilePage/>}/>
        </Routes>
    )
}