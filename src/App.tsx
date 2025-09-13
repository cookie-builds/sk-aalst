import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/footer";
import Home from "./pages/home";
import NavMenu from "./components/nav-menu";
import Praesidium from "./pages/praesidium";
import Clubs from "./pages/clubs";
import Sponsors from "./pages/sponsors";
import Contact from "./pages/contact";
import Clublied from "./pages/clublied";

const Root = () => (
  <div className="page min-h-screen flex flex-col">
    <NavMenu />
    <div id="content" className="!mt-20 md:!mt-0 flex-1">
      <Outlet />
    </div>
    <Footer />
  </div>
);

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route index element={<Home />} />
    <Route path="clublied" element={<Clublied  />} />
    <Route path="clubs" element={<Clubs />} />
    <Route path="contact" element={<Contact />} />
    <Route path="praesidium" element={<Praesidium />} />
    <Route path="sponsors" element={<Sponsors />} />
  </Route>
));

const App = () => (
  <RouterProvider router={router} />
);

export default App;
