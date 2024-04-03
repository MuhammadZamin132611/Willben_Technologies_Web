import Header from "./Header"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from "./about/About"
import Contact from "./Contact"
import Footer from './Footer'
import FinancialService from "./services/FinancialService"
import PlcamentAndTraning from "./services/PlcamentAndTraning"
import ItSolution from "./services/ItSolution"
import CompanyFormation from "./services/CompanyFormation"
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
                        <Route path='/services/placement-traning' element={<PlcamentAndTraning />} />
                        <Route path='/services/financial-service' element={<FinancialService />} />
                        <Route path='/services/it-solution' element={<ItSolution />} />
                        <Route path='/services/company-formation' element={<CompanyFormation />} />
                    {/* </Route> */}
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default MainRouter