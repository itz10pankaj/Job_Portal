import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layouts/app-layout';
import LandingPage from './pages/landing';
import Onboarding from './pages/onboarding';
import Joblisting from './pages/joblisting';
import JobPage from './pages/job';

import Myjobs from './pages/myjobs';
import { ThemeProvider } from './components/theme-provider';
import ProtectedRoute from './components/protected-route';
import PostJob from './pages/postjobs';
import SavedJobs from './pages/savedjobs';
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/onboarding',
        element: (<ProtectedRoute><Onboarding /></ProtectedRoute>)
        // element: <Onboarding />
      },
      {
        path: '/jobs',
        element: (<ProtectedRoute><Joblisting /></ProtectedRoute>)
      },
      {
        path: '/job/:id',
        element: (<ProtectedRoute><JobPage /></ProtectedRoute>)
      },
      {
        path: '/post-job',
        element: (<ProtectedRoute><PostJob /></ProtectedRoute>)
      },
      {
        path: '/saved-jobs',
        element: (<ProtectedRoute><SavedJobs /></ProtectedRoute>)
      }, ,
      {
        path: '/my-jobs',
        element: (<ProtectedRoute><Myjobs /></ProtectedRoute>)
      }
    ]
  }
])

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>

  )

}

export default App
