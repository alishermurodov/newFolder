import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageLayout from './app/layout/PageLayout.tsx'
import Users from './pages/Users/ui/Users.tsx'
import Posts from './pages/Posts/ui/Posts.tsx'
import { FluentProvider, webLightTheme } from '@fluentui/react-components'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'


const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        path: '',
        element: <Posts />
      },
      {
        path: 'users',
        element: <Users />
      }
    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <FluentProvider theme={webLightTheme}>
        <RouterProvider router={router} />
      </FluentProvider>
    </Provider>
  </StrictMode>,
)
