import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditPrkModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);

    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'Parku',{
            method: 'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                ParkuId:event.target.ParkuId.value,
                EmriParkut:event.target.EmriParkut.value,
                EmriLokacionit:event.target.EmriLokacionit.value,
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }

    render(){
        
        return (
            <div className="container">

                <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                    <Modal.Header clooseButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        Edit Parku
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>

                                <Form.Group controlId="ParkuId">
                                        <Form.Label>ParkuId</Form.Label>
                                        <Form.Control type="text" name="ParkuId" required
                                        disabled
                                        defaultValue={this.props.prkid}
                                        placeholder="ParkuId"/>
                                    </Form.Group>

                                    <Form.Group controlId="EmriParkut">
                                        <Form.Label>EmriParkut</Form.Label>
                                        <Form.Control type="text" name="EmriParkut" required
                                        defaultValue={this.props.emriprk}
                                        placeholder="EmriParkut"/>
                                    </Form.Group>

                                    <Form.Group controlId="EmriLokacionit">
                                        <Form.Label>EmriLokacionit</Form.Label>
                                        <Form.Control type="text" name="EmriLokacionit" required
                                        defaultValue={this.props.emrilkc}
                                        placeholder="EmriLokacionit"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Parku
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}