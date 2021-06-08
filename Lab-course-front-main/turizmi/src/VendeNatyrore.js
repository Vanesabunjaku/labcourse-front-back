import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddVndModal} from './AddVndModal';
import {EditVndModal} from './EditVndModal';

export class VendeNatyrore extends Component{

    constructor(props){
        super(props);
        this.state={vnd:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'VendeNatyrore')
        .then(response=>response.json())
        .then(data=>{
            this.setState({vnd:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteVnd(vndid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'VendeNatyrore/'+vndid,{
                method:'DELETE',
                header:{'Accept':'application/json',
                'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {vnd, vndid, emrivnd, emrilkc}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>VendiId</th>
                        <th>EmriVendit</th>
                        <th>EmriLokacionit</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vnd.map(vnd=>
                            <tr key={vnd.VendiId}>
                                <td>{vnd.VendiId}</td>
                                <td>{vnd.EmriVendit}</td>
                                <td>{vnd.EmriLokacionit}</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
    vndid:vnd.VendiId, emrivnd:vnd.EmriVendit, emrilkc:vnd.EmriLokacionit})}>
        Edit
    </Button>

    <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteVnd(vnd.VendiId)}>
        Delete
    </Button>


    <EditVndModal show={this.state.editModalShow}
    onHide={editModalClose}
    vndid={vndid}
    emrivnd={emrivnd}
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
                        Add VendeNatyrore  </Button>

                        <AddVndModal show={this.state.addModalShow}
                        onHide={addModalClose}/>

                        
                </ButtonToolbar>
            </div>
        )
    }
}
