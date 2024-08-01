import Navbar from '../components/Navbar';

function NavbarOnly({ children }) {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default NavbarOnly;
