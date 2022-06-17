import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './state';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <div>Hello!</div>
    <Router>
      <Routes>
        <Route path="/" element={<div>memberCheckPage</div>} />
        <Route path="/login" element={<div>login</div>} />
        <Route path="/register" element={<div>register</div>} />
        <Route path="/spaceRegister" element={<div>pageRegister</div>} />
        <Route path="/:space" element={<div>myspace</div>} />
        <Route path="/:space/design" element={<div>myspaceDesignMode</div>} />
        <Route path="/:space/:page" element={<div>myspace/page</div>} />
        <Route
          path="/:space/:page/design"
          element={<div>myspace/pageDesignMode</div>}
        />
      </Routes>
    </Router>
  </Provider>
);
