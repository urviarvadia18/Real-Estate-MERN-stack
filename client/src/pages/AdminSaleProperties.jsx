
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';


export default function AdminSaleProperties() {

    const [Sales, setSale] = useState([])
    useEffect(() => {
        fetchSaleData()
    }, [])

    const fetchSaleData = () =>{
        axios.get('http://localhost:5000/getListing')
            .then(Sales => setSale(Sales.data))
            .catch(err => console.log(err))
    }

    const deleteSaleProperty = (id) =>{
        fetch(`http://localhost:5000/deleteSale/${id}`,{
          method:'DELETE'
        }).then((result)=>{
          result.json().then((resp)=>{
            console.warn(resp)
            fetchSaleData()
          })
        })
      }

    return (
        <>


            <div className="container-fluid">
                <div className="row">
                    <nav className="col-md-2 d-none d-md-block bg-light sidebar" style={{ height: "100vh",width:"15vw" }}>
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
                                            <Dropdown.Item><Link to="/sellProperty">Sale Propertys</Link></Dropdown.Item>
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
                            <h1 className="h2">Sale Property</h1>
                        </div>



                        <div className="displayUsers w-100 mt-4 justify-content-center align-item-center ">
                            <div className='overflow-auto' style={{ maxHeight: "70vh" }}>
                                <table className='table table-striped ' >
                                    <thead>
                                        <tr>
                                            <th>property Name</th>
                                            <th>Image1</th>
                                            <th>Image2</th>
                                            <th>description</th>
                                            <th>address</th>
                                            <th>regularPrice</th>
                                            <th>discountPrice</th>
                                            <th>bathrooms</th>
                                            <th>bedrooms</th>
                                            <th>type</th>
                                            {/* <th>User createdAt</th>
                <th>User updatedAt</th> */}
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {
                                            Sales.filter((item) =>{ return (item.type == "sale") }).map(sale => {
                                                return (<>
                                                    <tr>
                                                        <td>{sale.name}</td>
                                                        <td><img src={sale.imageUrls[0]} height={150} width={150}></img></td>
                                                        <td><img src={sale.imageUrls[1]} height={150} width={150}></img></td>
                                                        <td>{sale.description}</td>
                                                        <td>{sale.address}</td>
                                                        <td>{sale.regularPrice}</td>
                                                        <td>{sale.discountPrice}</td>
                                                        <td>{sale.bathrooms}</td>
                                                        <td>{sale.bedrooms}</td>
                                                        <td>{sale.type}</td>
                                                        <td>
                                                            {/* <a className='btn btn-success me-1'>Edit</a> */}
                                                            <a className='btn btn-danger' onClick={() =>deleteSaleProperty(sale._id)}>Delete</a>
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



