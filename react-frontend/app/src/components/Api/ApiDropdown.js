import React from "react";
import { DropdownList } from 'react-widgets'
import IApi from "./IApi";

export default class ApiDropdown extends React.Component {
    state = {

        options: [],
        selected:'',
    }

    parseChoices(dictOfChoice) {
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

    handleChange = () => {
        const type = this.dropdown.value;
        this.props.onSelect(type);
    }

    render() {
        return (
            <div>
                <DropdownList ref={(ref) => this.dropdown = ref}
                              data={this.state.options}
                              valueField='id' textField='name'
                              caseSensitive={false}
                              minLength={3}
                              filter='contains'
                              onChange={this.handleChange} />
            </div>
        );
    }
}