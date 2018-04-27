// /services/index.js
import axios from 'axios'
/*import io from 'socket.io-client'*/

const _URL = 'https://api.openweathermap.org/data/2.5/weather?q='
const _CITY = 'Madrid'
const _LANG = 'ES'
const _APPID = 'aae97860de78632108ecc73036d6d17c'
const _RESULT = ''


// repeat this line for every service in our backend
export default{

    //METHODS
    methods{
        // SEARCH A NEW CITY
        searchcity(city){
            this.cityName = city;
            var ctx = this;
            ctx.performAJAX();
        },        
        // GET WEATHER DATA                     
        performAJAX(){
        var ctx = this;
        
        axios.get(_URL + 
                    ctx._CITY + '&units=metric&lang=' + 
                    ctx._LANG + '&APPID=' + ctx._APPID )
        .then(function (response) { 
            ctx._RESULT = response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
        }
    }
}

// in  actions.js, your component and anywhere else you need your services:
// import messageService from './services';
