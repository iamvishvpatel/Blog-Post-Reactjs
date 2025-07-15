import { type FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomeCompo } from './components'

export const HomeRoutes: FC = () => {
    return (
        <Routes>
            <Route index element={<HomeCompo />} />
        </Routes>
    )
}