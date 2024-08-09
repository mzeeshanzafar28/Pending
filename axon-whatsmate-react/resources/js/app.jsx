import React, { useEffect } from 'react';
import { Routes, Route, useLocation, BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import './charts/ChartjsConfig';
import Dashboard from './pages/Dashboard';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import '../css/app.css';

function App() {

    const location = useLocation();

    useEffect(() => {
        document.querySelector('html').style.scrollBehavior = 'auto'
        window.scroll({ top: 0 })
        document.querySelector('html').style.scrollBehavior = ''
    }, [location.pathname]); // triggered on route change

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Dashboard />} />
            </Routes>
        </Router>
    );

    // const router = createBrowserRouter([


    //     {
    //         path: "/",
    //         element: <Login />
    //     },

    //     {
    //         path: "/login",
    //         element: <Login />
    //     },

    //     {
    //         path: "/register",
    //         element: <Register />
    //     },

    //     {
    //         path: "/dashboard/:username",
    //         element: <Register />
    //     },

    // ]);

    // return (
    //     <div className="container mx-auto">

    //         <RouterProvider router={router} />

    //     </div>


    // );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
