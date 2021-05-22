import React, { Component, useEffect, useState } from 'react';
import { Button } from 'reactstrap'
import { Spinner } from 'reactstrap';
import ModalEdit from "./modal-edit";
import ModalAdd from "./modal-add";

// let fakeData = [
//   {
//     id: 1,
//     name: "The K300",
//     isActive: 0,
//     description: "test update pro vjp"
//   },
//   {
//     id: 2,
//     name: "BAPE",
//     isActive: 0,
//     description: "Thương hiệu nhập khẩu từ USA"
//   }
// ]


const BoxBrand = () => {
  //variable
  const [listCates, setListCates] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false)
  const [isOpenModalAdd, setIsOpenModalAdd] = useState(false)
  const [dataItem, setDateItem] = useState(null)
  const [isUpdate, setIsUpdate] = useState(false)
  const [searchData, setSearchData] = useState(null)
  const [searchValue, setSearchValue] = useState(null)

  //GetAPI
  useEffect( () => {
    getDataFromApi()
  }, []);

  

  //GetDataAPI
  async function getDataFromApi() {
    let url = "http://localhost:62284/api/Brand/get-all-brand"
    let res = await fetch(url)
    let result = await res.json()
    if (result) {
      await setListCates(result)
      setIsLoading(false)
    } else {
      alert("API Ngu!!!")
    }
  }

  async function handleSearchInput(e) {
    setSearchData(e.target.value)
  }

  async function handleNullInput(e) {
    if(!e.target.value) {
      getDataFromApi()
    }
  }

  async function searchDataFromApi(e) {
    e.preventDefault()
    // setIsLoading(true)
    // let url ="http://localhost:62284/api/Brand/search-brand?name=" + searchData
    // let res = await fetch(url)
    // let result = await res.json()
    // if (result) {
    //   setIsLoading(false)
    //   setListCates(result)
    // } else {
    //   alert("API Ngu!!!")
    // }
    
    var searchList = listCates.filter((item) => {
      //console.log(typeof item)
      return (item.name.toLowerCase().includes(searchData.toLowerCase()))
    });
    setListCates(searchList);
  }

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <h4>All Brands</h4>
          </div>
          <div className="card-body">
          <p>Add brand</p>
          <div style={{display:"flex", marginBottom: "4px"}}>
            <Button 
              onClick={() => setIsOpenModalAdd(true)}
              color="primary"
              style={{flex: "0.15", marginRight: "4px"}}
            >
              <i className="fas fa-plus-square"></i>
            </Button>
            <Button 
              onClick={() => setIsOpenModalAdd(true)}
              color="basic"
              style={{border: "1px solid #6473e7", flex: "0.15", alignItems: 'flex-end'}}
            >
              {/* <i style={{minWidth: "86px", color: "#6473e7"}} className="fas fa-plus-square"></i> */}
              <img src="https://cdn.iconscout.com/icon/free/png-512/google-sheets-4-569453.png" style={{height: "18px"}} />
            </Button>
            <div class="search-container" style={{flex: "0.4", marginLeft: "auto"}}>
              <form action="#" style={{display: "flex", height:"100%", width:"100%"}}>
                <input style={{flex: "1", backgroundColor:"#efefef", borderRadius: "4px", padding: "4px 8px"}} type="text" placeholder="Search.." name="searchData" onChange={(e) => handleSearchInput(e)} onKeyPress={(e) => handleNullInput(e)}/>
                <Button color="primary" type="submit" onClick={(e) => searchDataFromApi(e)}><i style={{minWidth: "40px"}} class="fa fa-search"></i></Button>
              </form>
            </div>
          </div>
            <div className="table100 ver1 m-b-110">
              <div className="table100-head">
                <table>
                  <thead>
                    <tr className="row100 head">
                      <th className="cell100 column1">Name</th>
                      <th className="cell100 column2">Description</th>
                      <th className="cell100 column3"></th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="table100-body js-pscroll">
                <table>
                  <tbody>
                    {isLoading ?
                      <tr>
                        <div style={{height: "100px", display: "flex", alignItems: "center", justifyContent: "center"}}><Spinner color="success" /></div>
                      </tr>
                      :
                      listCates.map((item) => (
                        <tr key={item.id} className="row100 body">
                          <td className="cell100 column1">{item.name}</td>
                          <td className="cell100 column2">{item.description}</td>
                          <td className="cell100 column3">
                            <div style={{display: "flex", justifyContent: "center"}}>
                              <Button 
                                onClick={() => {setIsOpenModalEdit(true); setDateItem(item)}}
                                color="primary"
                                style={{marginRight: "16px"}}
                              >
                                <i className="fas fa-edit"></i>
                              </Button>
                              <Button 
                                onClick={() => alert("Xoá con cẹc à?")}
                                color="danger"
                              >
                                <i className="fas fa-trash"></i>
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
              {dataItem && <ModalEdit 
                isOpen={isOpenModalEdit}
                dataItem={dataItem}
                setIsLoading={() => setIsLoading(true)}
                toggle={() => {setIsOpenModalEdit(false)}}
                isUpdate={() => getDataFromApi()
              }
              />}
              {<ModalAdd
                isOpen={isOpenModalAdd}
                setIsLoading={() => setIsLoading(true)}
                toggle={() => setIsOpenModalAdd(false)}
                isUpdate={() => getDataFromApi()}
              />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxBrand;