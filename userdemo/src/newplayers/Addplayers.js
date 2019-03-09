import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input,Table } from 'reactstrap';
import Players from '../Players/Players';


class AddPlayers extends Component{
    constructor(props) {
        
        super(props);
        this.state = {
            Players: [
                { id: 1, firstname: "jenny", lastname: "patel", teamName:"green", score: 65 },
                { id: 2, firstname: "nishi", lastname: "parmar", teamName:"red" ,score: 75 },
                { id: 1, firstname: "kajal", lastname: "khalasi", teamName:"blue" ,score: 56 },
                { id: 2, firstname: "vrunda", lastname: "malaviya", teamName:"green" , score: 40 },
                { id: 3, firstname: "mansi", lastname: "gayakwad", teamName:"blue" , score: 30 }
            ],
          modal: false,
              edit:""
        };
    
        this.toggle = this.toggle.bind(this);
        
    }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }


    //   componentDidMount(){
    //     this.refs.firstname.focus();
    //   }

    
      SubmitHandler = (e) => {
        
        e.preventDefault();
        let Players = {
          firtname: this.state.firstname, lastname: this.state.lastname, point: this.state.score, active: true
        }
        let newdata = this.state.data
            newdata.push(Players);
         
        this.setState({ data: newdata })
      }
      onDeleteHandler = (data) => {
        let newdata = []
        this.state.players.map(playerdata => {
            if (playerdata.id !== data.id) {
                newdata.push(playerdata)
            }
            return null
        })
        this.setState({ players: newdata })
    }
    render(){
        return(
            <div>
                <Button color="danger" style={{margin:"10px"}} onClick={this.toggle}>{this.props.buttonLabel}AddPlayers</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
          <Form>
          <FormGroup>
          <Label for="fname">First Name:</Label>
          <Input type="text" name="fname" id="fname" placeholder="Firstname" />
        </FormGroup>
        <FormGroup>
          <Label for="lname">Last Name:</Label>
          <Input type="text" name="lname" id="lname" placeholder="lastname" />
        </FormGroup>
        <FormGroup>
          <Label for="score">Score:</Label>
          <Input type="int" name="score" id="score" placeholder="score" />
        </FormGroup>
        </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.SubmitHandler}   >Add</Button>{' '}
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <div>
        <Table>
            <tr>
                <td>#</td>
                <td>Firstname</td>
                <td>Lastname</td>
                <td>score</td>
                {Players}   
            </tr>
        </Table>
            </div>
            </div>
            
        )
    }
}
export default AddPlayers;