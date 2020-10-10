import React, {Component} from 'react'
import Modal from '../Modal/Modal';
import IApi from "../Api/IApi";

export default class InsertNewModal extends Component {

    render() {
        return (
            <Modal triggerText={this.props.text} form={this.props.form} methodSubmit={IApi}/>
        )
    }
}