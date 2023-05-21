import React, { useState } from 'react'
import { Card, Col, Container, Row, Form, Button } from 'react-bootstrap';

const AddTodo = () => {
     const [todo,setTodo] = useState({
        title:'',
        description:''
    })
    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(todo);
        //add todo store
        setTodo({
            title:'',
            description:''

        })
    }
// this is test of the push the branch
    return (
        <Container >
            <Row>
                <Col md={12}>
                    <Card className='shadow-sm'>
                        <Card.Body>
                            <h3>Add Todo here!!</h3>
                            {/* form using */}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Todo Title</Form.Label>
                                    <Form.Control 
                                    type='text'
                                     placeholder='Enter here'
                                     value={todo.title}
                                     onChange={event=>setTodo({...todo,title:event.target.value})}
                                      />
                                </Form.Group>
                                <Form.Group className='mt-3'>
                                    <Form.Label> Todo Description</Form.Label>
                                    <Form.Control
                                     as={'textarea'}
                                      type='text' 
                                      placeholder='Enter here'
                                     value={todo.description}
                                     onChange={event=>setTodo({...todo,discription:event.target.value})}
                                       />
                                </Form.Group>
                                <Container className='text-center'>
                                    <Button type='submit' className='btn btn-primary mt-3'>Add Todo</Button>
                                </Container>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}

export default AddTodo

