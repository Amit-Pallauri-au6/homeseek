import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addServiceRequest } from '../redux/actions/userActions'
import { message, Input, Button, Form, Popover } from 'antd';

const { TextArea } = Input;

class UserServices extends Component{
    state = {
        request : '',
        description : ''
    }

    onChange = e => {
        this.setState({[e.target.name] : e.target.value})
      };
    handleSubmit = e => {
        e.preventDefault()
        this.props.addServiceRequest(this.state)
        this.setState({ request : '', description : ''})
    }
    render(){
        const content = (
            <div>
              <p>e.g., Window broken, Bulb got fused etc.</p>
            </div>
        );

        return (
            <div style={{
                height : '500px',
                position : 'relative',
                left: '35%',
                top: '30%'
            }}>
                <Form style={{
                    width : '260px' ,
                    height : '220px' , 
                    display : "flex",
                    flexDirection : 'column',
                    justifyContent : "space-around"
                }} >
                    <Popover content={content}>
                            <Input style={{padding : '10px'}} name='request' value={this.state.request} placeholder="what kind of service you need" onChange={this.onChange} />
                    </Popover>
                        <TextArea style={{height : '100px'}} name='description' value={this.state.description} placeholder="describe the problem in brief" onChange={this.onChange} />
                        <Button onClick ={this.handleSubmit} type='primary'>submit</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = storeState => {
    return {
        serviceReq : storeState.userState.serviceRequests
    }
}

export default connect(mapStateToProps, { addServiceRequest }) (UserServices)