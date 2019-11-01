import React, { useState } from 'react';
import './home.css'
import firebase from '../../config/firebase';

import {Link} from 'react-router-dom';
import Navbar from '../../components/navbar';




const HomePage = () => {
    return ( 
        <Navbar></Navbar>
    )
}

export default HomePage;