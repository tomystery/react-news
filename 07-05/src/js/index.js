var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/BodyIndex';

class Index extends React.Component {

  componentWillMount() {
    //定义你的逻辑即可
    console.log('index-will')
  }

  componentDidMount() {
    console.log('index-did')
  }


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