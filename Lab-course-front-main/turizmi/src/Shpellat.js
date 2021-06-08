import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddShpllModal} from './AddShpllModal';
import {EditShpllModal} from './EditShpllModal';

export class Shpellat extends Component{

    constructor(props){
        super(props);
        this.state={shpll:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Shpellat')
        .then(response=>response.json())
        .then(data=>{
            this.setState({shpll:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteShpll(shpllid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Shpellat/'+shpllid,{
                method:'DELETE',
                header:{'Accept':'application/json',
                'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {shpll, shpllid, emrishpll, emrilkc}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>ShpellaId</th>
                        <th>EmriShpelles</th>
                        <th>EmriLokacionit</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shpll.map(shpll=>
                            <tr key={shpll.ShpellaId}>
                                <td>{shpll.ShpellaId}</td>
                                <td>{shpll.EmriShpelles}</td>
                                <td>{shpll.EmriLokacionit}</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
    shpllid:shpll.ShpellaId, emrishpll:shpll.EmriShpelles, emrilkc:shpll.EmriLokacionit})}>
        Edit
    </Button>

    <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteShpll(shpll.ShpellaId)}>
        Delete
    </Button>


    <EditShpllModal show={this.state.editModalShow}
    onHide={editModalClose}
    shpllid={shpllid}
    emrishpll={emrishpll}
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
                        Add Shpellat  </Button>

                        <AddShpllModal show={this.state.addModalShow}
                        onHide={addModalClose}/>

                        
                </ButtonToolbar>
            </div>
        )
    }
}
