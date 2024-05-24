
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';


export default function AdminUsers() {

  const [users, setUsers] = useState([])
  useEffect(() => {
    fetchUser()
  }, [])

const fetchUser = () =>{
  axios.get('http://localhost:5000/getUsers')
      .then(users => setUsers(users.data))
      .catch(err => console.log(err))
}

  const deleteUser = (id) =>{
    fetch(`http://localhost:5000/deleteUser/${id}`,{
      method:'DELETE'
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
        fetchUser()
      })
    })
  }

  return (
    <>

      {/* <Slider /> */}
      <div className="container-fluid">
        <div className="row ">
          <nav className="col-md-2 d-none d-md-block bg-light hover-overlay  sidebar" style={{ height: "100vh", width:"15vw" }}>
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
                    <Dropdown.Item><Link to="/rentProperty">Rent Propertys</Link></Dropdown.Item>
                      <Dropdown.Item><Link to="/sellProperty">Sell Propertys</Link></Dropdown.Item>
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
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Users</h1>
            </div>


            <div className="displayUsers w-100 mt-4 justify-content-center align-item-center ">
              <div className='overflow-auto' style={{ maxHeight: "70vh" }}>
                <table className='table table-striped ' >
                  <thead>
                    <tr>
                      <th>User Name</th>
                      <th>User Email</th>
                      <th>User Image</th>
                      {/* <th>User createdAt</th>
                <th>User updatedAt</th> */}
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody >
                    {
                      users.map(user => {
                        return (<>
                          <tr>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            {/* <td>{user.password}</td> */}
                            <td><img src={user.avatar} width={150} height={150}></img></td>
                            {/* <td>{user.createdAt}</td>
                      <td>{user.updatedAt}</td> */}
                            <td>
                              {/* <a className='btn btn-success me-1'>Edit</a> */}
                              <a className='btn btn-danger' onClick={() => deleteUser(user._id)}>Delete</a>
                            </td>
                          </tr>
                        </>)
                      })
                    }



                  </tbody>
                </table>
              </div>
            </div>
          </main>

         



        </div>
      </div>
    </>
  );
}



