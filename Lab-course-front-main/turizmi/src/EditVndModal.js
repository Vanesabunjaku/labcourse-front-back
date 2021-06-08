import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditVndModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);

    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'VendeNatyrore',{
            method: 'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                VendiId:event.target.VendiId.value,
                EmriVendit:event.target.EmriVendit.value,
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
                        Edit VendeNatyrore
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>

                                <Form.Group controlId="VendiId">
                                        <Form.Label>VendiId</Form.Label>
                                        <Form.Control type="text" name="VendiId" required
                                        disabled
                                        defaultValue={this.props.vndid}
                                        placeholder="VendiId"/>
                                    </Form.Group>

                                    <Form.Group controlId="EmriVendit">
                                        <Form.Label>EmriVendit</Form.Label>
                                        <Form.Control type="text" name="EmriVendit" required
                                        defaultValue={this.props.emrivnd}
                                        placeholder="EmriVendit"/>
                                    </Form.Group>

                                    <Form.Group controlId="EmriLokacionit">
                                        <Form.Label>EmriLokacionit</Form.Label>
                                        <Form.Control type="text" name="EmriLokacionit" required
                                        defaultValue={this.props.emrilkc}
                                        placeholder="EmriLokacionit"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update VendeNatyrore
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