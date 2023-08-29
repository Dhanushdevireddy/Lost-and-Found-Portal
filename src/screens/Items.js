import React, { useState } from 'react'
import NavigationBar from '../components/NavigationBar'
import { Col, Container, Row } from 'react-bootstrap'
import SearchBar from '../components/SearchBar'
import CardRendering from '../components/CardRendering'
import Footer from '../components/Footer'

export default function Items(props) {
    const [items,setItems]=useState([
        {"itemName":"Book",
            "place":"room no 23",
            "userName":"Dhanush",
            "date":"29/08/2023",
        "emailId":"200030018@iitdh.ac.in",
    "image":""}
    ])
  return (
    <>
      <NavigationBar />
      <Container>
        <Row>
          <Col xs={12}>
            <SearchBar />
            <div>{props.type}</div>
          </Col>
        </Row>
        {items!==[]?items.map((items)=>{
            console.log(items)
            return(
                
                <div>
                    
                    <CardRendering
                        image = {items.image}
                        itemName ={items.itemName}
                        place={items.place}
                        reportedBy = {items.userName}
                        type = {props.type}
                        date = {items.date}
                        emailId = {items.emailId}
                    />
                </div>
            )
        }):"Loading"}
        
      </Container>
      <Footer />
    </>
  )
}
