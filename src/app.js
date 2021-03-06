import { BrowserRouter as Router, Route } from 'react-router-dom';
import Frame from 'frame/Frame.js'

require('semantic/dist/semantic.min.css')
require('semantic/dist/semantic.min.js')

ReactDOM.render(
    <Router>
      <Route path="/" component={Frame}></Route>
    </Router>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
