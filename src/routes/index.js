import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Admin from '../pages/Admin';
import Maps from '../pages/Maps';
import Reading from '../pages/Reading';
import Settings from '../pages/Settings';
import { NavbarOnly } from '../components/Layouts';
// Không cần đăng nhập
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/maps', component: Maps, layout: NavbarOnly },
];
// Cần phải đăng nhập
const privateRoutes = [
    { path: '/reading', component: Reading },
    { path: '/settings', component: Settings },
    { path: '/admin', component: Admin },
];

export { publicRoutes, privateRoutes };
