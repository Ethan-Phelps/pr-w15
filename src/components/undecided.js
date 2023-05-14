import React from "react";
import { source } from "./mockapi";

export default class Undecided extends React.Component {
    constructor(props){
        super(props)
        this.state={
            uni: props.unicode,
            nam: props.name,
            des: props.movement,
            id: props.id,
            click: props.click
        }
    }
    async promote(){
        await source.putp(this.state.id);
        this.state.click();
    }
    async delete(){
        await source.del(this.state.id);
        this.state.click();
    }
    async edit(){
        let pnam = prompt("Name",this.state.nam);
        let puni = prompt("Unicode",this.state.uni);
        let pdes = prompt("Movement",this.state.des);
        await source.edit({id:this.state.id,name:pnam,unicode:puni,movement:pdes});
        this.state.click();
    }
    render(){
        return (
            <div className="row">
                <div className="P-uni">{String.fromCodePoint(parseInt(this.state.uni,16))}</div>
                <div className="P-con1">
                    <div className="P-con2">
                        <div className="P-nam">{this.state.nam}</div>
                        <button className="P-pro" onClick={() => this.promote()}>Promote</button>
                        <button className="P-del" onClick={() => this.delete()}>Delete</button>
                        <button className="P-edi" onClick={() => this.edit()}>Edit</button>
                    </div>
                    <div className="P-des">{this.state.des}</div>
                </div>
            </div>
        );
    }
}