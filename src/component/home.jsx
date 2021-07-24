import React from 'react';
import { Cards, Chart, Provinsi } from './index';
import styles from './app.modules.css';

class home extends React.Component {
    render(){
        return (
            <div className="container">
                <Cards/>
                <Provinsi/>
                <Chart/>
            </div>
        )
    }
}

export default home;