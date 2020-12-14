import React from 'react'
import Style from './Service.module.css'
import Header from './forHeader/HeaderService';
import { BrowserRouter, Route } from 'react-router-dom'
import ViborZemel from './ViborZemel/ViborZemel';
import Stroitelstvo from './Stroitelstvo/Stroitelstvo';
import Design from './Design/Design';
import ServiceNavbar from './forServiceNavbar/ServiceNavbar';


const Service = (props) => {
    return (
        <BrowserRouter>
        <div>
            <Header />
            <div className={Style.mainwrapper}>
                <ServiceNavbar />
                <div>
                <Route exact path='/ViborZemel' component={ViborZemel} />
                <Route exact path='/Stroitelstvo' component={Stroitelstvo} />
                <Route exact path='/Design' component={Design} />
                </div>
            </div>
        </div>
        </BrowserRouter>
    )
}
export default Service;



// const Services = (props) => {

//     let headerElements = [
//         {
//             h: <Header a1='Выбор земельного участка' nav='ViborZemel' />,
//             c: <ViborZemel />
//         },
//         {
//             h: <Header a1='Строительство домов и котетджей' nav='Stroitelstvo' />,
//             c: <Stroitelstvo />
//         },
//         {
//             h: <Header a1='Дизайн' nav='Design' />,
//             c: <Design />
//         }
//     ];

//     let ServiceElement = ( el => <Service h={headerElements[0].h} c={headerElements[0].c} /> )

//     return (
//         <BrowserRouter>
//             <div>
//                 <Route exact path='/ViborZemel' component={ServiceElement(0)} />
//                 <Route exact path='/Stroitelstvo' component={ServiceElement(1)} />
//                 <Route exact path='/Design' component={ServiceElement(2)} />
//             </div>
//         </BrowserRouter>
//     )
// }