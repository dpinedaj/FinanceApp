import {Dropdown} from 'reactjs-dropdown-component';
import React from 'react'

export default class TestDropdown extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            fruit: [
                {
                    id: 0,
                    title: 'Apple',
                    selected: false,
                    key: 'fruit'
                },
                {
                    id: 1,
                    title: 'Orange',
                    selected: false,
                    key: 'fruit'
                },
                {
                    id: 2,
                    title: 'Strawberry',
                    selected: false,
                    key: 'fruit'
                }
            ]
        }
    }

    resetThenSet = (id, key) => {
        let temp = JSON.parse(JSON.stringify(this.state[key]));
        temp.forEach(item => item.selected = false);
        temp[id].selected = true;
        this.setState({
            [key]: temp
        });
    }
    render() {
        return(
            <Dropdown
                title="Select fruit"
                list={this.state.fruit}
                resetThenSet={this.resetThenSet}
            />
        )
    }
}