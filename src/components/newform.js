import React from "react";
import { source } from "./mockapi";

export default class Newform extends React.Component {
        constructor(props){
            super(props);
            this.state={
                click: props.click
            }
        }
    onTrigger = async (event) => {
        event.preventDefault();
        await source.post({name:event.target.fname.value,unicode:event.target.funic.value,movement:event.target.fmove.value});
        document.getElementById("fform").reset();
        this.state.click();
    }
        
    render(){
        return (
            <div id="m-r-bottom">
                <form id="fform" onSubmit = {this.onTrigger}>
                    <div id="form-l">
                        <span id="fnameb">Piece Name:</span><input type="text" id="fname" name="fname"></input>
                        <span id="funicb">Unicode Char:</span><input type="text" id="funic" name="funic"></input>
                    </div>
                    <div id="form-r">
                        <span id="fmoveb">Piece Movement:</span><br></br>
                        <textarea type="text" id="fmove" name="fmove"></textarea>
                        <input id="finpu" type="submit" value="Add New Piece"></input>
                    </div>
                </form> 
            </div>
        );
    }
}