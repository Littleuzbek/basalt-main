import './App.css'
import "./Responsive.css"
import 'aos/dist/aos.css'; 
import RootLayout from './layout/RootLayout';
import { useEffect } from 'react';
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router"; 
import Aos from 'aos';
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Projects from "./pages/Projects";
import Solutions from "./pages/Solutions";
import News from "./pages/News";
import AboutUs from "./pages/AboutUs";
import Partners from "./pages/Partners";
import AboutProduct from "./pages/AboutProduct";
import { productLoader } from "./pages/AboutProduct"
import wrench from "./assets/wrench.png"

function HydrateFallback() {
  return <p>Loading...</p>;
}

function App() {
  const language = localStorage.getItem("lang");
  const currentLang = language ? language : "en";
  
  if(!language){
    localStorage.setItem("lang", "en");
  }

  useEffect(() => {
    Aos.init({
      disable: () => window.innerWidth < 1024,
    });
    document.body.style.cursor = `url(${wrench}), auto`
  },[])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Navigate to={`/${currentLang}`}/>} />
        <Route path=":lang">
          <Route index element={<Home />} />
          <Route path='projects' element={<Projects />}/>
          <Route path='projects/:id' element={<AboutProduct />} loader={productLoader} HydrateFallback={HydrateFallback}/>
          <Route path='solutions' element={<Solutions />}/>
          <Route path='solutions/:id' element={<AboutProduct />} loader={productLoader} HydrateFallback={HydrateFallback}/>
          <Route path='news' element={<News />}/>
          <Route path='partners' element={<Partners />}/>
          <Route path='about-us' element={<AboutUs />} />
          <Route path='contact-us' element={<ContactUs />} />
        </Route>
      </Route>
    )
    )

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
