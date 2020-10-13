import React, {Component} from 'react';
import ApiDropdown from "../Api/ApiDropdown";

export default class NewItemForm extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.state;
        this.handleSelect = this.handleSelect.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.parseFields = this.parseFields.bind(this);

    };

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    };

    handleSelect(value, name) {
        this.setState({[this.props.select["type"]]: value});
        this.setState({[this.props.select["type_name"]]: name})
    };

    handleSubmit(event) {
        const methodArgs = Object.keys(this.props.methodArgs).map(x => this.props.methodArgs[x])
        this.props.methodSubmit(...[...methodArgs, this.state]).then(
            res => alert('Submitted an: ' + [this.state[this.props.select["type_name"]]] + "\nThe amount was:" + this.state.amount + "\nThe post status code: " + res.status));
        event.preventDefault();
        this.props.closeModal();
    };

    parseFields() {
        const field = (k, val) => {
            const newArgs = {};
            Object.keys(val.args).forEach(x =>
                // eslint-disable-next-line no-eval
                newArgs[x] = (val.args[x].startsWith("this")) ? (eval(val.args[x])) : (val.args[x]))
            if (val.type === "dropdown") {
                return <label key={k}>
                    {k + ": "}
                    <ApiDropdown {...newArgs}/>
                </label>
            } else if (val.type === "input") {
                return <label key={k}>
                    {k + ": "}
                    <input {...newArgs}/>
                </label>
            } else {
                return <h1>
                    ERROR
                </h1>
            }
        }
        return [...Object.keys(this.props.fields).map(k => field(k, this.props.fields[k])),
            <input key="submit" type="submit" value="Submit"/>]
    }

    render() {

        const elements = this.parseFields()
        return (
            <form onSubmit={this.handleSubmit}>
                {elements}
            </form>
        );
    }
};
