import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav className="navbar" style={{backgroundColor: "#cdb269"}}>
            <div className="container-fluid">
                <a className="navbar-brand">Portfolio</a>
                <div>
                    <Link to='/home' className='btn text-white mx-1' style={{backgroundColor: "#cdb269"}}>Home</Link>
                </div>
            </div>
        </nav>
    )
}
