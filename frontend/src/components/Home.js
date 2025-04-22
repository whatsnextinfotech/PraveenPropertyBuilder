import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import Loader from "./layouts/Loader";
import MetaData from "./layouts/MetaData";

import  {toast} from 'react-toastify';
import Pagination from 'react-js-pagination';
// import Landing from "./layouts/land";
// import Productitem from "./layouts/productitem";
import Hero from "./layouts/Hero";
import Locations from "./layouts/Location";
import Projects from "./layouts/PropertyCard";
import CallToAction from "./layouts/CallToAction";
import Pop from "./layouts/pop"
import Login from '../components/user/Login';

export  default function Home(){
    

    return (
        <Fragment>
            <MetaData title={'Home'} />
            {/* <Landing/> */}
            <Pop/>
           <Hero/>
           <Locations/>
           <Projects/>
           <CallToAction/>
        
           
        </Fragment>
    )
}