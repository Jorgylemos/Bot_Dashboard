import { Routes as Router, Route, Navigate } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { Pages } from '../pages'
import { Home } from '../pages/Home/Home'
import { Settings } from '../pages/Settings/Settings'
import { Commands } from '../pages/Commands/Commands'

export function Routes(){
    return (
        <Router>
            <Route path="/" element={<Navigate to="home" />} />
            <Route path='/' element={<Pages />}>
                <Route path='home' element={<Layout title='Início'><Home /></Layout>} />
                <Route path='settings' element={<Layout title='Configurações'><Settings /></Layout>} />
                <Route path='commands' element={<Layout title='Comandos'><Commands /></Layout>} />
            </Route>
        </Router>
    )
}