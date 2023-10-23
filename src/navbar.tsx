export default function NavBar({navState}:any) {
    return (
        <>
        <nav>
            <div id="navbar" className={navState}>
            <a className="nav-link" href="#">
                <h2 className="nav-link-label font">Home</h2>
                <img className="nav-link-image" src="https://images.unsplash.com/photo-1666091863721-54331a5db52d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
            </a>
            <a className="nav-link" href="#">
                <h2 className="nav-link-label font">League</h2>
                <img className="nav-link-image" src="https://images.unsplash.com/photo-1666055642230-1595470b98fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=995&q=80" />
            </a>
            <a className="nav-link" href="#">
                <h2 className="nav-link-label font">Submit</h2>
                <img className="nav-link-image" src="https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
            </a>
            </div>
        </nav>
        </>
    )
}