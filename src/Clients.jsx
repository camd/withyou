import React, { Component } from 'react';
import { connect } from 'react-redux';
import { store, actions } from './redux/store';

const mapStateToProps = ({clients}) => clients;

export class ClientList extends Component {

    render() {
        return (
            <div>
                <ul>
                    {this.props.clients.map((client, ckey) => (<li key={ckey}>{client.first_name}</li>))}
                </ul>
            </div>
        );
    }
}

export default connect(mapStateToProps)(ClientList);