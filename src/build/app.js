// Creating React element with nested elements
import AppTitle from './components/AppTitle.js';
import InfoCard from './components/InfoCard.js';
ReactDOM.render( /*#__PURE__*/React.createElement(AppTitle, null), document.getElementById('root'));
ReactDOM.render( /*#__PURE__*/React.createElement(InfoCard, null), document.getElementById('card'));