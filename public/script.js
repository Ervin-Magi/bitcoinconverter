function _extends() {_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return _extends.apply(this, arguments);}console.clear();

const API = {

    endPoint: "https://blockchain.info/ticker",

    get() {

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", API.endPoint);
            xhr.onload = () => resolve(JSON.parse(xhr.responseText));
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
        });

    } };


class BitcoinInput extends React.Component {
    constructor(props) {
        super(props);

        this.containerStyles = {
            "height": "50vh",
            "display": "flex",
            "flex-direction": "column",
            "justify-content": "center",
            "padding-left": "1rem",
            "padding-right": "1rem",
            "max-height": "190px" };


        this.inputStyles = {
            "outline": "none",
            "font-size": "2.05rem",
            "border-bottom": "0.5 px solid #4a405f",
            "line-height": "1",
            "padding-bottom": "0.3rem" };


    }

    render() {
        return /*#__Numeo__*/React.createElement("div", { style: this.containerStyles }, /*#__PURE__*/
            React.createElement("input", { style: this.inputStyles, type: "number", onChange: this.props.inputHandler, value: this.props.coins, placeholder: "Bitcoin" }));

    }}


class Currency extends React.Component {

    constructor(props) {
        super(props);

        this.containerStyles = {
            "padding-left": "1rem",
            "padding-right": "1rem",
            "margin-bottom": "1rem" };


        this.convertedStyles = {
            "font-size": "1.2rem" };

    }

    renderCurrencyConversion(buy, coins) {
        return (buy * coins).toFixed(2);
    }

    render() {

        return (
            React.createElement("div", { style: this.containerStyles }, /*#__PURE__*/
                React.createElement("div", null, this.props.coins, " ",React.createElement("span", null, this.props.currencyName), " " + " x " + +this.props.buy + " = ", " ", /*#__PURE__*/React.createElement("span", { className: "js-animate", style: this.convertedStyles }, this.renderCurrencyConversion(this.props.buy, this.props.coins) + " " + this.props.symbol))));


    }}


class CurrencyConverter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currencies: [],
            coinsToConvert: 1 };


        this.headerStyles = {
            "text-align": "center",
            "font-size": "2rem",
            "font-weight": "bold",
            "line-height": "2rem",
            "margin-top": "1.618rem" };


        this.containerStyles = {
            "max-width": "600px",
            "margin": "0 auto" };


        this.convertCoins = this.convertCoins.bind(this);
    }

    componentWillMount() {
        API.get().then(payload => {

            const currencies = Object.keys(payload).map((item, index) => {
                return { currencyName: item, ...payload[item] };
            });

            this.setState({
                currencies });


        });
    }

    convertCoins(event) {

        this.setState({
            coinsToConvert: +event.target.value });

    }

    render() {

        let iterator = 0;

        return /*#__PURE__*/(
            React.createElement("div", { style: this.containerStyles }, /*#__PURE__*/
                React.createElement("div", { style: this.headerStyles }, "Bitcoin Currency Converter"), /*#__PURE__*/
                React.createElement(BitcoinInput, { coins: this.state.coinsToConvert, inputHandler: this.convertCoins }),
                this.state.currencies.map(currency => {

                    return /*#__PURE__*/React.createElement(Currency, _extends({}, currency, { coins: this.state.coinsToConvert, key: iterator++ }));
                })));


    }}



ReactDOM.render( /*#__PURE__*/React.createElement(CurrencyConverter, null), document.getElementById("app"));
