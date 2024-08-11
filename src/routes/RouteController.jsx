import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from 'react'
const Login = lazy(() => import('../routes/login/Login'))
const Home = lazy(() => import('../routes/home/Home'))
const Single = lazy(() => import('../routes/single/Single'))
import Nav from "../components/navbar/Nav"



const RouteController = () => {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="login" element={<Suspense fallback={<p>Loading...</p>}><Login /></Suspense>} />
      <Route path="home" element={<Suspense fallback={<p>Loading...</p>}><Home /></Suspense>} />
      <Route path="single/:id" element={<Suspense fallback={<p>Loading...</p>}>< Single /></Suspense>} />
    </Routes>
    
    </>
  )
}

export default RouteController