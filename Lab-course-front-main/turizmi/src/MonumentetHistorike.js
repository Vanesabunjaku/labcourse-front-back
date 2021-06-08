import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddMnmModal} from './AddMnmModal';
import {EditMnmModal} from './EditMnmModal';

export class MonumentetHistorike extends Component{

    constructor(props){
        super(props);
        this.state={mnm:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'MonumentetHistorike')
        .then(response=>response.json())
        .then(data=>{
            this.setState({mnm:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteMnm(mnmid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'MonumentetHistorike/'+mnmid,{
                method:'DELETE',
                header:{'Accept':'application/json',
                'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {mnm, mnmid, emrimnm, emrilkc}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>MonumentiId</th>
                        <th>EmriMonumentit</th>
                        <th>EmriLokacionit</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mnm.map(mnm=>
                            <tr key={mnm.MonumentiId}>
                                <td>{mnm.MonumentiId}</td>
                                <td>{mnm.EmriMonumentit}</td>
                                <td>{mnm.EmriLokacionit}</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
    mnmid:mnm.MonumentiId, emrimnm:mnm.EmriMonumentit, emrilkc:mnm.EmriLokacionit})}>
        Edit
    </Button>

    <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteMnm(mnm.MonumentiId)}>
        Delete
    </Button>


    <EditMnmModal show={this.state.editModalShow}
    onHide={editModalClose}
    mnmid={mnmid}
    emrimnm={emrimnm}
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
                        Add MonumentetHistorike  </Button>

                        <AddMnmModal show={this.state.addModalShow}
                        onHide={addModalClose}/>

                        
                </ButtonToolbar>
            </div>
        )
    }
}
