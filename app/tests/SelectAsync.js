import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/lib/Async';
import debounce from 'lodash.debounce';
import noop from 'lodash.noop';
import i18n from 'myinternationalization'; // whatever i18n library it is you're using

const propTypes = {
  searchApiUrl: PropTypes.string.isRequired,
  limit: PropTypes.number,
  defaultValue: PropTypes.object,
  actionOnSelectedOption: PropTypes.func
};

const defaultProps = {
  limit: 25,
  defaultValue: null,
  actionOnSelectedOption: noop
};

export default class SearchableSelect extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      searchApiUrl: props.searchApiUrl,
      limit: props.limit,
      selectedOption: this.props.defaultValue,
      actionOnSelectedOption: props.actionOnSelectedOption 
    };
    this.getOptions = debounce(this.getOptions.bind(this), 500);
    this.handleChange = this.handleChange.bind(this);
    this.noOptionsMessage = this.noOptionsMessage.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  getOptionValue = (option) => option.id; // maps the result 'id' as the 'value'

  getOptionLabel = (option) => option.name; // maps the result 'name' as the 'label'

  handleChange(selectedOption, {action}) { // you can use the 'action' to do different things here
    this.setState({
      selectedOption: selectedOption
    });
    // this is for update action on selectedOption
    // will use the noop defaultProp if the dev didn't define the prop, so no need to conditionally call
    this.state.actionOnSelectedOption(selectedOption.value);
  }

  // async/await returns a Promise, so use the Promise form as seen in the
  // documentation https://react-select.com/async
  async getOptions(inputValue) {
    if (!inputValue) {
      return [];
    }
    const response = await fetch(
      `${this.state.searchApiUrl}?search=${inputValue}&limit=${this.state.limit}`
    );
    const json = await response.json();
    return json.results;
  }

  // inputValue state is controlled in the Select, so this probably isn't necessary
  // except to maybe validate that it is changing
  handleInputChange(inputValue) {
    this.setState({ inputValue });
    return inputValue;
  }

  // as long as `i18n.get()` is synchronous, returning a string, there's no need to override the
  // entire Component
  noOptionsMessage(inputValue) {
    if (this.props.options.length) return null;
    if (!inputValue) {
      return i18n.get('app.commons.label.search');
    }
    return i18n.get('app.commons.errors.emptySearchResult');
  }

  render() {
    const { defaultOptions, placeholder } = this.props;
    const { selectedOption } = this.state;
    return (
      <AsyncSelect
        cacheOptions
        value={selectedOption}
        noOptionsMessage={this.noOptionsMessage}
        getOptionValue={this.getOptionValue}
        getOptionLabel={this.getOptionLabel}
        defaultOptions={defaultOptions}
        loadOptions={this.getOptions}
        placeholder={placeholder}
        onChange={this.handleChange}
      />
    );
  }
}