import React, { Component } from 'react';
import Form from '../containers/Form';
import Table from '../containers/Table';

const App = () => (
      <div className="container container-fluid">
        <div className="row">
          <div className="col-xs-4"><Form /></div>
          <div className="col-xs-8"><Table /></div>
        </div>
      </div>
)

export default App;
