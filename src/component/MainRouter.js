import Header from "./Header"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from "./about/About"
import Contact from "./Contact"
function MainRouter() {
    return (
        <>

            <BrowserRouter>
            <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    {/* <Route path='/*' element={<Page404 />} /> */}
                    
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default MainRouter