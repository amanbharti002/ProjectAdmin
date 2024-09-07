import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Component/Dashboard/Dashboard';
import DashboardGraph from './Component/Dashboard/DashboardGraph';
import Category from './Component/Dashboard/Category/Category';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerDetails from './Component/Dashboard/CustomerDetails/CustomerDetails';
import MyUserList from './Component/Dashboard/MyUserList/MyUserList';
import Orders from './Component/Dashboard/Orders/Orders';
import Products from './Component/Dashboard/Products/Products';
import RoleManegment from './Component/Dashboard/RolesAndManagement/RoleAndMangement';
import Slider from './Component/Dashboard/Slider/Slider';
import SubCategory from './Component/Dashboard/SubCategory/SubCategory';
import { AdminSignup } from './Component/Form/Signup';
function App() {
  const router = createBrowserRouter([
    // {path:"",element:<AdminSignup />},
    {
      path: "",
      element: <Dashboard />,
      children: [{ path: "", element: <DashboardGraph /> },
      { path: "category", element: <Category /> },
      { path: "customerdetails", element: <CustomerDetails /> },
      { path: "userlist", element: <MyUserList /> },
      { path: "orders", element: <Orders /> },
      { path: "products", element: <Products /> },
      { path: "mangement", element: <RoleManegment /> },
      { path: "slider", element: <Slider /> },
      { path: "subcategory", element: <SubCategory /> },

      ],
    },
  ]);
  return (
    <RouterProvider router={router} />
  )

}

export default App;
