import React from "react";
import 'bootstrap/js/dist/dropdown'

function Nav(){
    return  (
       <nav className="navbar-expand-sm navbar-white bg-white px-3">
        <i class="navbar-brand bi bi-justify-left fs-4" ></i>
        <button className="navbar-toggler d-lg-none " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-exapnded="false" aria-label="Toggle Navigation"></button>
<div className="collapse navbar-collapse" id="collapsibleNavId">
    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#"  id="dropdownId"
            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Yousof
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdowmId">
                <a className="dropdown-item" href="#">Profile</a>
                <a className="dropdown-item" href="#">Setting</a>
                <a className="dropdown-item" href="#">Logout</a>
            </div>
        </li>
    </ul>
    
</div>
       </nav>

    )
    }
    export default Nav