import React from 'react'
import { Card , Button } from 'react-bootstrap'
import './style/Card.css'

export const Cards = (props) => {
    return (
      <Card style={{ width: '23rem' }} className="container mb-4 Card" >
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title className="pb-3">{props.name}</Card.Title>
          <Card.Subtitle className="pb-2">{props.about}</Card.Subtitle>
          <Card.Text className="">
            {props.para}
          </Card.Text>
          <Button className="mt-2" variant="primary"><Card.Link className="text-white " href={props.git_link}> Github Link </Card.Link></Button>
        </Card.Body>
      </Card>
    )
}
