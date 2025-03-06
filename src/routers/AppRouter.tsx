import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";
import { ResponsiveDrawer } from "../ui/navbar/Navbar";
import PublicRoute from "./components/PublicRoute";
import { MenuOptions } from "../ui/navbar/MenuOptions";
// import RequireAuth from "./components/RequireAuth";
// import { LoginView } from "../pages/Login/LoginView";
export const AppRouter = createBrowserRouter(createRoutesFromElements(
    
    <>
    {/* <Route    
        path="/login"
        element={
            <PublicRoute>
                <LoginView/>   
            </PublicRoute>
        }
    />
    <Route
        path="/"
        element={
            <PublicRoute>
                <LoginView/>   
            </PublicRoute>
        }
    />  */}
    <Route
        path="*"
        element={<Navigate to="/app" replace />}
    />
    <Route path="/app" element={
        <PublicRoute>
            <ResponsiveDrawer/>
        </PublicRoute>
    }>
        {MenuOptions.map(item => 
        <Route key = {item.relativePath}
            path={item.relativePath} element={item.view}
        />
        )}
    </Route>
    </>
));
