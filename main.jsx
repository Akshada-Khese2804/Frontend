import { createRoot } from 'react-dom/client'
import './index.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Data from './Components/Data/Data.jsx'
import GetStarted from './Components/GetStarted/GetStarted.jsx'
import Login from './Components/Login/Login.jsx'
// let router = createBrowserRouter([
//     {
//         path:'/',
//         element:<Layout/>,
//         children:[
//             {
//                 path:'',
//                 element:<Home/>
//             },
//             {
//                 path:'about',
//                 element:<About/>
//             },
//             {
//                 path:'contact',
//                 element:<Contact/>
//             }
//         ]
//     }
// ])

let router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='user/:uid' element={<User/>} />
            <Route  path='data' element={<Data/>} />
            <Route  path='login' element={<Login/>} />

            <Route path='getstarted' element={<GetStarted/>}/>
        </Route>
    )
)
createRoot(document.getElementById('root')).render(
    <RouterProvider router = {router}/>
)