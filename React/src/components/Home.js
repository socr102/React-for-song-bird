import React, {Component} from 'react'
import Header from './Header';
import HomeContent from './HomeContent';

export default class Home extends Component {
    render(){
        return(
            <>
                <Header />,
                <HomeContent />
            </>
        );
    }
}
