import React from 'react'
import axios from 'axios'

export default class Weather extends React.Component {

    state = {
        weather: []
    }

    componentDidMount(){
        let weatherCall = 'https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=5861d8145192e8f308c4b80e531f7125';
        
        axios.get(weatherCall)
        .then(response => {
            this.setState({weather: response.data})
        .then(JSON.stringify(weatherCall))
        console.log(weatherCall)
        }).catch(err => console.log(err))
    }

    render() {
        let cityCall = this.state.weather.city;
        return(
            <div>
                {cityCall}
            </div>
        )
    }

}
