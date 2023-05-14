import React from "react";
import Accepted from "./accepted";
import Undecided from "./undecided";
import Newform from "./newform";
import { source } from "./mockapi";

export default class Main extends React.Component {
    constructor(props){
        super(props)
        this.state={
            Apieces:[],
            Upieces:[]
        }
    }
    async componentDidMount(){
        this.display();
    }
    async display(){
        let Apieces=[];
        let Upieces=[];
        const pieces = await source.get();
        for(let i=0;i<pieces.length;i++){
            if(pieces[i].status===true){
                Apieces.push(<Accepted {...pieces[i]} click={() => this.display()}/>);
            }else{
                Upieces.push(<Undecided {...pieces[i]} click={() => this.display()}/>);
            }
        }
        this.setState({Apieces,Upieces});
    }
    render(){
        return (
            <div id="main" className="col-12 h-100">
                <div id="primary">
                    <div id="middle" className="row">
                        <div id="m-left">
                            <div id="m-l-top"><b>Accepted</b></div>
                            <div id="m-l-middle">{this.state.Apieces}</div>
                        </div>
                        <div id="m-right">
                            <div id="m-r-top"><b>Undecided</b></div>
                            <div id="m-r-middle">{this.state.Upieces}</div>
                            <Newform click={() => this.display()}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
/* 
-/      Using the Houses API, or any open API of your choice you can find online, 
-/          create a single page that allows for all 4 CRUD operations to be performed on a resource from the API. 
-/      Create a React component (or more, if needed) to represent the resource. 
-/      Make all forms and other necessary UI pieces their own components as reasonable.
*/