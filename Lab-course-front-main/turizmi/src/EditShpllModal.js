import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditShpllModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);

    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'Shpellat',{
            method: 'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                ShpellaId:event.target.ShpellaId.value,
                EmriShpelles:event.target.EmriShpelles.value,
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
                        Edit Shpellat
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>

                                <Form.Group controlId="ShpellaId">
                                        <Form.Label>ShpellaId</Form.Label>
                                        <Form.Control type="text" name="ShpellaId" required
                                        disabled
                                        defaultValue={this.props.shpllid}
                                        placeholder="ShpellaId"/>
                                    </Form.Group>

                                    <Form.Group controlId="EmriShpelles">
                                        <Form.Label>EmriShpelles</Form.Label>
                                        <Form.Control type="text" name="EmriShpelles" required
                                        defaultValue={this.props.emrishpll}
                                        placeholder="EmriShpelles"/>
                                    </Form.Group>

                                    <Form.Group controlId="EmriLokacionit">
                                        <Form.Label>EmriLokacionit</Form.Label>
                                        <Form.Control type="text" name="EmriLokacionit" required
                                        defaultValue={this.props.emrilkc}
                                        placeholder="EmriLokacionit"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Shpellat
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