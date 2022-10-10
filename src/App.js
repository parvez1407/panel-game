import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import Home from './components/Home';
import Statistics from './components/Statistics';
import Topics from './components/Topics';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: 'topics', element: <Topics /> },
    { path: 'statistics', element: <Statistics /> },
    { path: 'blog', element: <Blog /> }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
