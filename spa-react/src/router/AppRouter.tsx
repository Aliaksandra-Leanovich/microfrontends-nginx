import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "../components/MainTemplate/MainTemplate";
import Home from "../pages/Home";
import { Users } from "../pages/Users";
import { About } from "../pages/About";
import { routes } from "../routes";
import { PrivateRoute } from "../utils";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<MainTemplate />}>
        <Route index element={<Home />} />
      </Route>
      <Route path={routes.ABOUT} element={<About />} />
      <Route element={<PrivateRoute />}>
        <Route path={routes.USERS} element={<Users />} />
      </Route>
    </Routes>
  );
};
