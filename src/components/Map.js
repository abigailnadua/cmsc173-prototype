import {GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import {Component} from "react";
import mapStyles from "./Mapstyles";
import PantryInfo from './PantryInfo'
import { Container, Row, Col} from "react-bootstrap";


class Map extends Component{
    constructor(props){
        super(props);
        this.state={
           defaultCenter:{ lat: 14.164529, lng: 121.241929 },
            markerList:[//LIST OF PANTRIES
                        {id:0,lat:14.164529,lng:121.241929
                            ,pantryInfo:{name:"Pantry 731",address:"Batong Malake, Pili Drive",contactNo:"0915-134-0520", gCash:"3213165390",gCashName:"Jimmy Tran",faceBook:"facebook.com/tranJimmy"}
                        },
                        {id:1,lat:14.164529,lng:121.24329
                            ,pantryInfo:{name:"Pantry 24601",address:"Batong Malake, Pili Drive",contactNo:"0915-134-0520", gCash:"3213165390",gCashName:"Bronson Tran",faceBook:"facebook.com/tranBronson"}
                        },
                        {id:2,lat:14.165329,lng:121.24229
                            ,pantryInfo:{name:"Pantry 741",address:"Batong Malake, Pili Drive",contactNo:"0915-134-0520", gCash:"3213165390",gCashName:"Davy Jones",faceBook:"facebook.com/davyjones"}

                        },
                        {id:3,lat:14.165309,lng:121.24509
                            ,pantryInfo:{name:"Pantry 666",address:"Batong Malake, Vega Center",contactNo:"0915-134-0520", gCash:"3213165390",gCashName:"Iron Maiden",faceBook:"facebook.com/NumberoftheBeast"}

                        },

                    ],
            currentPantry:{name:"Pantry 731",address:"Batong Malake, Pili Drive",contactNo:"0915-134-0520", gCash:"3213165390",gCashName:"Jimmy Tran",faceBook:"facebook.com/TJU"}
        }
        this.changeDefaultCenter=this.changeDefaultCenter.bind(this);
        this.changeCurrentPantry=this.changeCurrentPantry.bind(this)
    }

    changeDefaultCenter(latitude, longitude){//CHANGE CENTER OF MAP
        this.setState({...this.state,defaultCenter:{lat:latitude,lng:longitude} });
    }
    changeCurrentPantry(activePantry){//CHANGE CURRENT PANTRY

        this.setState({...this.state,currentPantry:activePantry} );

    }
    render(){
        return(
            <Container fluid>
    

                   <GoogleMap
                        zoom={18}
                        center={{ lat: this.state.defaultCenter.lat, lng: this.state.defaultCenter.lng }}
                        
                    >  
                        {
                        this.state.markerList.map(locMarker => (
                            <Marker
                                key={locMarker.id}
                                position={{lat: locMarker.lat,lng:locMarker.lng}}
                                onClick={()=>{
                                    console.log("MEOW");   
                                
                                    this.changeDefaultCenter(locMarker.lat,locMarker.lng);   
                                    this.changeCurrentPantry(locMarker.pantryInfo);
                                }
                                }
                            />      
                        ))}


                        </GoogleMap>    

                

                                
           
                        <PantryInfo name={this.state.currentPantry.name}  name={this.state.currentPantry.name} address={this.state.currentPantry.address} 
                        contactNo={this.state.currentPantry.contactNo}  gCash={this.state.currentPantry.gCash} gCashName={this.state.currentPantry.gCashName}
                        faceBook={this.state.currentPantry.faceBook}/>


            </Container>
  

       



        );      
    }
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
