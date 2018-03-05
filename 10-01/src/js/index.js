var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/BodyIndex';

import 'antd/dist/antd.css';

export default class Index extends React.Component {




  render() {


    var component = <ComponentHeader />;

    return (
      <div>
        {/* <ComponentHeader/> */}
        {component}
        <BodyIndex userid={123456} username="jjj" />
        <div>{this.props.children}</div>
        <ComponentFooter />
      </div>
    );
  }
}

