import React, {Component} from "react";
import {withStyles} from "@mui/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from "@fortawesome/free-regular-svg-icons";


let styleSheet = {
    header: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'end',
        borderBottom: '1px solid rgba(0,0,0,.6)',
        height: '80px',
        width: '100%',
        margin: '0',
        zIndex: '3'
    },
    header_logo: {
        position: 'absolute',
        fontWeight: '600',
        fontSize: '20px',
        top: '25px',
        left: '150px',
        margin: '0'
    },
    header_icon: {
        position: 'absolute',
        top: '25px',
        left: '110px',
        margin: '0'
    },
    header_bookmark_button: {
        position: 'relative',
        marginRight: '20px',
        borderRadius: '20px',
        borderColor: 'transparent',
        height: '40px',
        width: '150px',
        color: '#FFF',
        fontSize: '15px',
        backgroundColor: '#1E2F97',
    },
    header_add_button: {
        position: 'relative',
        marginRight: '50px',
        borderRadius: '20px',
        borderColor: 'transparent',
        height: '40px',
        width: '220px',
        color: '#FFF',
        fontSize: '15px',
        backgroundColor: '#333',
    },
    
   
}

class CustomHeader extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {classes} = this.props;

        return(
            <header className={classes.header}>
                <FontAwesomeIcon className={classes.header_icon} icon={faClock} size="2x" />
                <p className={classes.header_logo}><u><strong>time</strong>zone</u></p>
                <button className={classes.header_bookmark_button}>Bookmark</button>
                <button className={classes.header_add_button}>Add to Microsoft Teams</button>
            </header>
        );
    }

}
export default withStyles(styleSheet)(CustomHeader);