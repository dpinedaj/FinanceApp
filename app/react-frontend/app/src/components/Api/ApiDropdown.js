import {Dropdown} from 'reactjs-dropdown-component';
import React from 'react'
import IApi from "./IApi";

export default class ApiDropdown extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            options: []
        }
    }
    parseChoices(dictOfChoice) {
        //TODO MAKE IT MORE DYNAMIC
        dictOfChoice.title = dictOfChoice.name
        dictOfChoice.selected = false
        dictOfChoice.key = 'options'
        dictOfChoice.id = dictOfChoice.id - 1
        return dictOfChoice
    }

    async getData() {
        await IApi("get", this.props.url)
            .then((response) => this.setState({
                options: response.data.map(x => this.parseChoices(x))}));
    }
    componentDidMount() {
        this.getData().then(r => r)
    }
    resetThenSet = (id, key) => {
        let temp = JSON.parse(JSON.stringify(this.state[key]));
        temp.forEach(item => item.selected = false);
        temp[id].selected = true;
        this.setState({
            [key]: temp
        });
        this.props.onSelect(this.props.name, id+1, temp[id].title)
    }
    render() {
        if (this.state.options.length > 0) {
         return(
            <Dropdown
                title={this.props.title}
                list={this.state.options}
                resetThenSet={this.resetThenSet}
            />
        )}
        else {
            return(
                <div><h1>There are no types</h1></div>
            )
        }
    }
}