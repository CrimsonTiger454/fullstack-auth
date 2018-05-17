import React, {Component} from 'react';
import {getUser} from '../../dux/users';
import {connect} from 'react-redux';

 class Private extends Component {

componentDidMount() {
    this.props.getUser();
}


bankBalance() {
    return '$' + Math.floor((Math.random() + 1) * 1000) + '.00';
}

    render (){
    let {user_name, img, auth_id} = this.props.user;
        return (
            <div className='private'>
            <h3>Account</h3>
            <hr />
            {
                user_name? 
                <div>
                    <img src={img} alt=''/>
                    <p>Name: {user_name}</p>
                    <p>Account Number: {auth_id}</p>
                    <p>Balance: {this.bankBalance()}</p>
                </div>
                :
                <h4>Please Login</h4>
            }
            </div>
        )
    }
}

function mapStateToProps (reduxState) {
    return {
        user: reduxState.user
    }
}

export default connect(mapStateToProps, {getUser})(Private);