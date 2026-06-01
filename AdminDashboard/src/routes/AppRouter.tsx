import { Route, Routes } from "react-router-dom";
import { routes } from "./index";
import AdminLayout from "../layouts/AdminLayout";

function AppRouter() {
    return (
        <Routes>
            <Route path="/admin" element={<AdminLayout />}>
                {routes.map((route, index) => (
                    <Route key={route.path} path={route.path} element={route.element} />
                ))}
            </Route>
        </Routes>
    );
}


export default AppRouter;