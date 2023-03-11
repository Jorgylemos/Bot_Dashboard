import { Routes as Router, Route } from 'react-router-dom'
import { Home } from '../pages/Home'

export function Routes(){
    return (
        <Router>
            <Route path='/' element={<Home />} />
        </Router>
    )
}