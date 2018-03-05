var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/BodyIndex';

class Index extends React.Component {
  render() {

    // 也可以用参数的形式,这个是为了作判断如
    /*  if（用户已登陆){
 
     }else{
 
     } */
    var component = <ComponentHeader />;

    return (
      <div>
        {/* <ComponentHeader/> */}
        {component}
        <BodyIndex />
        <ComponentFooter />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('example'));