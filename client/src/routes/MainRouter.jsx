import { Route, Routes } from "react-router-dom"

export const MainRouter = () => {
    return <Routes>
        <Route path="/" element={<h1>Hi</h1>} />
    </Routes>
}