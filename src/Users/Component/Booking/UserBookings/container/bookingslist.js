import React, { Component } from 'react'
import Booking from '../booking' ;
import axios from 'axios' ;
//import CustomForm from '../../BookingForm/form';
import UserLayout from '../../../../../containers/userLayout';
import {connect}  from 'react-redux' ;
import {withRouter} from 'react-router-dom' ;
// import Absolutewrapper from '../../../../../components/Absolutewrapper';



class Bookingslist extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             bookings: [],
             mounted : false 
        }
    }
   
    
    componentDidUpdate(newProps){
      
      
        if(!this.state.mounted && newProps.token!==null){
        axios.defaults.headers = {
            "Content-Type" : "application/json" ,
            Authorization : "Token " +newProps.token
        }
        axios.get("/uapi/curr/userbookings/")
           .then(res => {
               this.setState({
                   bookings:res.data
               }) ;
            //    console.log(this.state.bookings)
            
           }) 
           this.setState({
               mounted: true
           })
        }
    
    }

   
    componentDidMount(){
        var nav= document.querySelector('.main-nav') ;
      nav.style.display = 'none' ;
        //console.log('component mounted')
        // window.addEventListener('before unload')
        
        if(this.props.token !== null){
            //console.log('getting data')
        axios.defaults.headers = {
            "Content-Type" : "application/json" ,
            Authorization : "Token " +this.props.token
        }
        axios.get("/uapi/curr/userbookings/")
           .then(res => {
               this.setState({
                   bookings:res.data
               }) ;
            
           }) 
        }

    }
    render() {
        return (
          
            <UserLayout>
                <div className="row justify-content-center align-items-center mb-3 p-3">
                <div className ="col-lg-8 col-sm-12 col-xs-10 col-12">
                  <Booking data={this.state.bookings} name="match" />
                  </div>
                  </div>
            </UserLayout>
         
        )
    }
}



const mapStatetoprops = (state) => {
    return {
      
        token : state.auth.token
    }
}

export default withRouter(connect(mapStatetoprops,null)(Bookingslist) )
