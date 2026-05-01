import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import RouterLayout from './LayOuts/RouterLayout'
import ProductsPage from './Pages/Products'
import ContactLayout from './LayOuts/ContactLayout'
import ContactInfo from './Components/COntactInfo'
import ContactAddress from './Components/ContactAddress'
import CareersLayout from './LayOuts/CareersLayout'
import JobsPage from './Pages/Jobs'
import JobDetails from './Pages/JobDetailsPage'
import { jobsLoader } from './Pages/Jobs'
import { jobDetailsLoader } from './Pages/JobDetailsPage'
import ErrorDisplay from './Components/Error'
function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/"  element={<RouterLayout />}>
        <Route index element={<HomePage />} /> {/*takes path of parent (called as index)*/}
        <Route path="about/" element={<AboutPage />} />

        <Route path="contact/" element={<ContactLayout />}>
          <Route path="info/" element={<ContactInfo />} />
          <Route path="address/" element={<ContactAddress />} />
        </Route>

        <Route path="jobs/" element={<CareersLayout />} errorElement={<ErrorDisplay />} >
          <Route index element={<JobsPage />} loader={jobsLoader} />
          <Route path=":id/" element={<JobDetails /> } loader = {jobDetailsLoader} />
        </Route>

        <Route path="products/" element={<ProductsPage />} />

        <Route path="*" element={<h1>404</h1>} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />


      {/* Old way of writing routers
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/monitor" element={<MonitorPage />} />
        <Route path="/*" element={<h1>404</h1>} />
      </Routes> */}
      
    </>
  )
}

export default App
