import React from 'react'
import './Sidebar.css'
import { BsBuildingFillAdd } from "react-icons/bs";
import { ImBoxAdd } from "react-icons/im";
import { FaUsersGear } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
     
     <Link to={'/admin/listproduct'} style={{textDecoration:"none"}}>
     <div className="sidebar-item ">
     <ImBoxAdd />
     <p>Project List</p>
     </div>
     </Link>
     <Link to={'/admin/users'} style={{textDecoration:"none"}}>
     <div className="sidebar-item">
     <FaUsersGear className='sidebar-item1' />
     <p>User List</p>
     </div>
     </Link>
     <Link to={'/admin/addproject'} style={{textDecoration:"none"}}>
     <div className="sidebar-item">
     <BsBuildingFillAdd />
     <p>Add Project</p>
     </div>
     </Link>
    </div>
    
  )
}

export default Sidebar