import './App.css';
import './components/Page.css'
import HomePage from "./components/HomePage";
import Falling_star from "./components/Falling_star";
import Page2 from "./components/Page2";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Nletter from "./components/images/Nletter.png";


function App() {
    return (
        <Router>
            <div className="Top">
                <div className="Topdif">
                    <Link to='/'>
                        <img src={Nletter} alt="Nletter" className="Topdifpic"/>
                    </Link>
                </div>
                <div className="Topdif">
                    <Link to='Falling_star'>
                        <p>Falling star</p>
                    </Link>
                </div>
                <div className="Topdif">
                    <Link to='/Page2'>
                        <p>page2</p>
                    </Link>
                </div>
            </div>
            <Routes>
                <Route path='/' element={<HomePage/>} classname='TopDif'/>
                <Route path='/Falling_star' element={<Falling_star/>} classname='TopDif'/>
                <Route path='/Page2' element={<Page2/>} classname='TopDif'/>
            </Routes>
        </Router>
    )
}

export default App;
