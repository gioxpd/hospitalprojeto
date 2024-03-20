import Home from '../src/pages/Home/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Agendamentos from './pages/Agendamentos/Agendamentos'
import Resultados from './pages/resultados/Resultados'
import Loginmed from './pages/loginmedico/loginmed'

function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<Home/>}>
            </Route>
            <Route path = '/agendamentos' element = {<Agendamentos/>}></Route>
            <Route path='/resultados' element= {<Resultados/>}></Route>
            <Route path='/medico' element = {<Loginmed/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes