import Header from "./Header"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from "./about/About"
import Contact from "./Contact"
import Footer from './Footer'
import Traning from "./services/Traning"
import JobPlcament from "./services/JobPlcament"
import ItSolution from "./services/ItSolution"
import DigitalMarketing from "./services/DigitalMarketing"
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
                    {/* <Route path='/' element={<Services />} > */}
                        <Route path='/services/job-placement' element={<JobPlcament />} />
                        <Route path='/services/traning' element={<Traning />} />
                        <Route path='/services/it-solution' element={<ItSolution />} />
                        <Route path='/services/digital-marketing' element={<DigitalMarketing />} />
                    {/* </Route> */}
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default MainRouter