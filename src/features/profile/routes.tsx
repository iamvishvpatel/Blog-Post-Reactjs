import type { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Profile } from "./components";

export const ProfileRoutes: FC = ()=>{
    return (
        <Routes>
            <Route index element={<Profile/>}/>
        </Routes>
    )
}