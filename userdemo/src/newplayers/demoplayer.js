import React, { Component } from 'react';
import './demoplayer.css';
import { Table } from 'reactstrap';
import sort from './playerData';

class demoplayer extends Component {


    state = {
        title: 'player details',
        datas: [
            { fname: "jenny", lname: "patel", score: 56 },
            { fname: "kiran", lname: "virani", score: "26" },
            { fname: "angle", lname: "dream",  score: "36" }
        ],
        act: 0,
        index: '',
    }

    componentDidMount() {
        this.refs.fname.focus();
        this.setState(prevState=>({datas: sort(prevState.datas)}))
    }

    fSubmit = (e) => {
        e.preventDefault();
        console.log('hello');

        let datas = this.state.datas;
        let fname = this.refs.fname.value;
        let lname = this.refs.lname.value;
      
        let score = this.refs.score.value;
       

        if (this.state.act === 0) {   //new
            let data = {
                fname, lname, score
            }
            datas.push(data);
        } else {                      //update
            let index = this.state.index;
            datas[index].fname = fname;
            datas[index].lname = lname;
           
            datas[index].score = score;
            
        }
        datas = sort(datas);
        this.setState({
            datas: datas,
            act: 0
        });

        this.refs.myForm.reset();
        this.refs.fname.focus();
    }

    Remove = (i) => {
        let datas = this.state.datas;
        datas.splice(i, 1);
        this.setState({
            datas: datas
        });

        this.refs.myForm.reset();
        this.refs.fname.focus();
    }

    Edit = (i) => {
        let data = this.state.datas[i];
        
        this.refs.fname.value = data.fname;
        this.refs.lname.value = data.lname;
        
        this.refs.score.value = data.score;

        // datas = sort(datas);
        this.setState({
            
            act: 1,
            index: i
        });

        this.refs.fname.focus();
    }
    sortdata = () => {
        let data = this.state.datas
        return data.sort((a, b) => {
        if (a.score === b.score) {
        let alastname = a.lname.toLowerCase()
        let Blastname = b.lname.toLowerCase()
        if (alastname < Blastname) {
        return - 1
        }
        } else {
        return parseInt(a.score) - parseInt(b.score)
        }
        })
        }

    render() {
        let datas = this.sortdata();
        console.log(this.state)
        return (
            <div className="App">
                <h2>{this.state.title}</h2>
                <form ref="myForm" className="myForm">
                    <input type="text" ref="fname" placeholder="your firtsname" className="formField"required />
                    <input type="text" ref="lname" placeholder="your lastname" className="formField" required/>
                    <input type="text" ref="score" placeholder="your score" className="formField" required/>
                    <button onClick={(e) => this.fSubmit(e)} className="myButton">submit </button>
                </form>
                {/* <pre> */}
                <Table style={{ textAlign: "center", width: "200%", marginLeft: "-120px", backgroundColor: "info" }}>

                    <tr>

                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        
                        <th>Score</th>
                        <th>Action</th>


                    </tr>

                    {datas.map((data, i) =>

                        <tbody>
                            {/* <li key={i} className="myList"> */}

                            <td>{i + 1}.</td>

                            <td>{data.fname}</td>
                            <td>{data.lname}</td>
                            <td>{data.score}</td>

                            {/* {i+1}. {data.fname}, {data.lname},{data.score} */}
                            <td><button style={{ width: "80px" }} onClick={() => this.Remove(i)} className="myListButton">remove </button>
                                <button style={{ width: "80px" }} onClick={() => this.Edit(i)} className="myListButton">edit </button></td>
                            {/* </li> */}

                        </tbody>

                    )}
                    {/* </pre> */}
                </Table>
            </div>
        );
    }
}

export default demoplayer;