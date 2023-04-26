import { Route, Routes } from "react-router-dom";
import * as pages from "../pages";
import AuthLayout from "../layouts/AuthLayout";
import AppLayout  from "../layouts/AppLayout";
import { Pages } from "@mui/icons-material";

export default function () {
  return (
    <Routes>
       {/* <Route path="/" element={<div>Intro page</div>} /> */}
      <Route element={<AppLayout />}>
      <Route path='/' element={<pages.Home/>} />
        {/* <Route path='/home' element={<div><span>Pagina mea de home</span></div>} /> */}
        {/* <Route path="/manage" element={<pages.myRecipes />} /> */}
        {/* <Route path="/recipes/:id" element={<pages.Recipes />} /> */}
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<pages.Login />} />
        <Route path="/register" element={<pages.Register />} />
      </Route>
    </Routes>
  );
}