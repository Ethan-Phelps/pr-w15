import React from "react";
import { source } from "./mockapi";

export default class Accepted extends React.Component {
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
    async demote(id){
        await source.putd(id);
        this.state.click();
    }
    render(){
        return (
            <div className="row">
                <div className="P-uni">{String.fromCodePoint(parseInt(this.state.uni,16))}</div>
                <div className="P-con1">
                    <div className="P-con2">
                        <div className="P-nam">{this.state.nam}</div>
                        <button className="P-dem" onClick={() => this.demote(this.state.id)}>Demote</button>
                    </div>
                    <div className="P-des">{this.state.des}</div>
                </div>
            </div>
        );
    }
}