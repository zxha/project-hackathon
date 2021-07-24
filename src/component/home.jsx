import React from 'react';
import { Cards, Chart, Provinsi } from './index';
import styles from './app.modules.css';
import { fetchData } from './api';

class home extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        console.log(country);
    }
    render(){
        const{ data } = this.state;
        return (
            <div className="container">
                <Cards data={data}/>
                <Provinsi handleCountryChange={this.handleCountryChange}/>
                <Chart/>
            </div>
        )
    }
}

export default home;