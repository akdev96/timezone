import React, {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import CustomHeader from "../../components/common/Header";

class Home extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        const {classes} = this.props;

        return(
            <div className={classes.page}>
                <CustomHeader/>
                <div className={classes.content_container}>
                    <label for="textsearch"></label>
                    <input type="text" placeholder="search" id="textsearch" className={classes.textsearch}/>
                    <button className={classes.btn2}><strong>Add</strong></button>


                </div>

            </div>
        );
    }
}
export default withStyles(styleSheet)(Home);