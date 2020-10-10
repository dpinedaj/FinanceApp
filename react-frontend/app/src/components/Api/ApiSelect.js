import React from "react";
import Select from "react-select";
import IApi from "./IApi";

export default class ApiSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            loading: true
        };
        this.wrapper = React.createRef();
    }

    parseChoices(dictOfChoice) {
        //TODO IMPROVE IT TO MAKE IT DINAMIC
        dictOfChoice.value = dictOfChoice.id
        dictOfChoice.label = dictOfChoice.name
        delete dictOfChoice.id;
        delete dictOfChoice.name;
        return dictOfChoice
    }

    async getData() {
        await IApi("get", this.props.url)
            .then((response) => this.setState({
                loading: false,
                options: response.data.map(x => this.parseChoices(x))}));
    }
    componentDidMount() {
        this.getData().then(r => r)
    }

    render() {
        const {options} = this.state;
        const {onMenuOpen} = this;

        return (
            <Select
                ref={this.wrapper}
                defaultValue={0}
                name={this.props.name}
                onMenuOpen={onMenuOpen}
                options={options}
                className="basic-multi-select"
                classNamePrefix="select"
            />
        );
    }
}
