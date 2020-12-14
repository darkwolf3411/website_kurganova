import Header from './component/Header/Header';
import { React } from 'react';
import Navbar from './component/Navbar/Navbar';
import './App.css';
import Footer from './component/Footer/Footer';
import Home from './component/Content/Mainpage/Mainpage_home';
import About from './component/Content/About_page/About';
import { BrowserRouter, Route } from 'react-router-dom';
import Partners from './component/Content/Partners/Partners';
import Staff from './component/Content/Staff/Staff';
import ViborZemel from './component/Content/Service/ViborZemel/ViborZemel';
import Stroitelstvo from './component/Content/Service/Stroitelstvo/Stroitelstvo';
import Design from './component/Content/Service/Design/Design';
import ServiceList from './component/Content/Service/ServiceList/serviceList';
import Service from './component/Content/Service/Service'

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='Mainpage-wrapper'>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/partners' component={Partners} />
          <Route exact path='/staff' component={Staff} />
          <Route exact path='/Service' component={Service} />
          <Route exact path='/serviceList' component={ServiceList} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
