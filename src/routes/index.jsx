import { Route, Routes } from "react-router-dom";
import * as pages from "../pages";
import AuthLayout from "../layouts/AuthLayout";
import AppLayout  from "../layouts/AppLayout";
import { Pages } from "@mui/icons-material";
import Artists from "../pages/Artists";
import Albums from "../pages/Albums";
import Home from "../pages/Albums";
import Favorites from "../pages/Albums";

export default function () {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path='/' element={Home} />
        {/* <Route path='/home' element={Home} /> */}
        <Route path="/artists" element={Artists} />
        <Route path="/albums" element={Albums} />
        <Route path="/favorites" element={Favorites} />
      </Route>
    
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<pages.Login />} />
        <Route path="/register" element={<pages.Register />} />
      </Route>
    </Routes>
  );
}