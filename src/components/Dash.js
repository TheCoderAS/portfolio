import React from "react";
import { Route, Switch } from "react-router";
import Header from "./Header";
import NewUser from './NewUser'
export default class Dash extends React.Component{
    render(){
        return(
            <Switch>
                <div className="container-fluid" id="dash">
                    <div className="background">
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    </div>
                    <Route exact path='/' component={Header}/>
                    <Route exact path='/create/' component={()=><NewUser/>}/>

                    <footer id="footer">
                                <a href="#dash"><span className="fa fa-arrow-up" style={{position:'fixed', zIndex:'2',bottom:'50px', right:'15px',fontSize:'30px',cursor:"pointer",color:'white'}}>
                                </span></a>
                                <a href="https://wa.me/qr/YVTA4USCDIJ5L1"><span className="fa fa-whatsapp" style={{position:'fixed',bottom:'50px', right:'55px',fontSize:'30px',cursor:"pointer",color:'white'}}>
                                </span></a>
                                <a href="https://www.instagram.com/ishqbaazaalok?r=nametag"><span className="fa fa-instagram" style={{position:'fixed',bottom:'50px', right:'95px',fontSize:'30px',cursor:"pointer",color:'white'}}>
                                </span></a>
                                <h7 className="copyright">&#169;&nbsp;2021 Aalok Kumar</h7>
	                </footer>
                </div>           
            </Switch>  
        )
    }
}


