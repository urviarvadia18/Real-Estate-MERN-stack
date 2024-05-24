
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import d5 from '../img/d5.png'


export default function AdminHome() {

  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/getUsers')
      .then(users => setUsers(users.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>

      {/* <Slider /> */}
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar" style={{ height: "100vh" }}>
            <div className="sidebar-sticky">
              <ul className="nav flex-column mt-5">
                <li className="nav-item">
                  <a className="nav-link active" href="adminhome">
                    Dashboard <span className="sr-only">(current)</span>
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="#">
                    Orders
                  </a>
                </li> */}
                <li className="nav-item">
                  <Dropdown>
                    <Dropdown.Toggle className='nav-link' variant="Secondary" id="dropdown-basic">
                      Property
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {/* <Dropdown.Item><a href="AdminRentProperties">Rent Propertys</a></Dropdown.Item> */}
                      <Dropdown.Item><Link to="/rentProperty">Rent Propertys</Link></Dropdown.Item>
                      <Dropdown.Item><Link to="/sellProperty">Sell Propertys</Link></Dropdown.Item>
                      {/* <Dropdown.Item><a href="AdminSellProperties">Sell Propertys</a></Dropdown.Item> */}
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="adminusers">
                    Users
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4" style={{width:"80vw"}}>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
            </div>

            <img 
            src={d5} 
            className="d-banner">
            </img>



          </main>



        </div>
      </div>
    </>
  );
}



