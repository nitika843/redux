import React, { useState } from 'react'
import { Col, Card, Container, Row, ListGroup, ListGroupItem } from 'react-bootstrap'

const DisplayTodo = () => {
  const [todos, setTodos] = useState([
    {
      title: 'first title',
      description: 'fi descriptionrst'
    },
    {
      title: 'first11 title',
      description: 'fi1 descriptionrst'
    }

  ])

  return (
    <Container>
      <Row>
        <Card className='mt-3 shadow-sm'>
          <Card.Body>
            <h3>All todos are here</h3>
            <ListGroup>
              {
                todos.map((todo, index) => {

                  <ListGroup.Item key={index}>
                    <h4>{todo.title}</h4>
                    <p>{todo.description}</p>
                  </ListGroup.Item>
                })
              }
            </ListGroup>
          </Card.Body>
        </Card>
      </Row>

    </Container>
  )
}

export default DisplayTodo
