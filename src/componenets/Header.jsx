
function Header() {
    return (
        <header className="blog-header">
            <div className="header-container">
                <a href="#" className="logo"><img src="logo.png"></img></a>

                <nav className={'nav'}>
                    <a href="#" className="nav-link">Home</a>
                    <a href="#" className="nav-link">About</a>
                    <a href="#" className="nav-link">Contact</a>
                </nav>

            </div>
        </header>
    )
}
export default Header;