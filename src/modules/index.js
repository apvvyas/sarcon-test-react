import { BrowserRouter, Route, Routes  } from 'react-router-dom';

import Admin from './Admin/Admin.lazy';
import Frontend from './Frontend/Frontend.lazy';

export default function Modules() {
    return (
        <BrowserRouter>
            <Routes>
                <Route {...Frontend.routeProps}/>
                <Route {...Admin.routeProps}/>
            </Routes>
        </BrowserRouter>
    )
}
