import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Skills from './components/Skills'
// import MagnetLines from '../node_modules/';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './screens/HomePage'
import AboutPage from './screens/AboutPage'
import SkillsPage from './screens/SkillsPage'
import PortfolioPage from './screens/PortfolioPage'
import ExperiencePage from './screens/ExperiencePage'
import ContactPage from './screens/ContactPage'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />} >
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/skills' element={<SkillsPage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path = '/experience' element={<ExperiencePage />} />
        <Route path='/contact' element={<ContactPage /> } />
      </Route>
    )
  )
  return <RouterProvider router={router} />
    }
export default App
