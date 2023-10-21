import React from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import HomePageComponent from '../routes/HomePageComponent/HomePageComponent'
import UsersPageComponent from '../routes/UsersPageComponent/UsersPageComponent'
import ContactPageComponent from '../routes/ContactPageComponent/ContactPageComponent'
import PostsPageComponent from '../routes/PostsPageComponent/PostsPageComponent'
import PhotosPageComponent from '../routes/PhotosPageComponent/PhotosPageComponent'
import './NavigationComponent.css'

const NavigationComponent = () => {
    return (
        <Router>
                <nav className='nav-bar'>
                        <Link className='navbar-brand' to={'/'}>
                            Saveetha | JFST
                        </Link>
                            <ul className='nav-bar-nav'>
                                <li className='nav-item'>
                                    <Link className='nav-link' to={'/'}>Home</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to={'/users'}>Users</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to={'/posts'}>Posts</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to={'/photos'}>Photos</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to={'/contact'}>Contact us</Link>
                                </li>
                            </ul>
                </nav>

                <Routes>
                    <Route exact path='/' element={<HomePageComponent/>}/>
                    <Route exact path='/users' element={<UsersPageComponent/>}/>
                    <Route exact path='/posts' element={<PostsPageComponent/>}/>
                    <Route exact path='/photos' element={<PhotosPageComponent/>}/>
                    <Route exact path='/contact' element={<ContactPageComponent/>}/>
                </Routes>

                
        </Router>
    )
}

export default NavigationComponent