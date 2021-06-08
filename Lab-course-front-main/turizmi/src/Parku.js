import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddPrkModal} from './AddPrkModal';
import {EditPrkModal} from './EditPrkModal';

export class Parku extends Component{

    constructor(props){
        super(props);
        this.state={prk:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Parku')
        .then(response=>response.json())
        .then(data=>{
            this.setState({prk:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deletePrk(prkid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Parku/'+prkid,{
                method:'DELETE',
                header:{'Accept':'application/json',
                'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {prk, prkid, emriprk, emrilkc}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>ParkuId</th>
                        <th>EmriParkut</th>
                        <th>EmriLokacionit</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prk.map(prk=>
                            <tr key={prk.ParkuId}>
                                <td>{prk.ParkuId}</td>
                                <td>{prk.EmriParkut}</td>
                                <td>{prk.EmriLokacionit}</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
    prkid:prk.ParkuId, emriprk:prk.EmriParkut, emrilkc:prk.EmriLokacionit})}>
        Edit
    </Button>

    <Button className="mr-2" variant="danger"
    onClick={()=>this.deletePrk(prk.ParkuId)}>
        Delete
    </Button>


    <EditPrkModal show={this.state.editModalShow}
    onHide={editModalClose}
    prkid={prkid}
    emriprk={emriprk}
    emrilkc={emrilkc}/>
</ButtonToolbar>

                                </td>
                            </tr>
                            )}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                        Add Parku  </Button>

                        <AddPrkModal show={this.state.addModalShow}
                        onHide={addModalClose}/>

                        
                </ButtonToolbar>
            </div>
        )
    }
}
