import React, { Component } from 'react';
import { connect } from 'react-redux';

class ContactsList extends Component{
    render() {
        return (
            <div className="ContactsList">
                ContactsList
            </div>
        )
    }
}
export default connect(

)(ContactsList)
