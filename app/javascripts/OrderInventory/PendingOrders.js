import React, { PropTypes } from 'react'

class PendingOrders extends React.Component {
  render () {
    return(<div className="card rounded">
      <div className="card-block">
        <h4 className="card-title">Pending orders</h4>
      </div>
      <table className="table table-hover mx-auto w-90">
        <thead>
          <tr>
            <th>#</th>
            <th>Tool Name</th>
            <th>Order from</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Wire (5m)</td>
            <td className>0xac60e905167f51a083f252f36abcdef123456789</td>
            <td className="m-0 p-0 text-center">
              <a href="#" className="btn btn-outline-default">
                <br />
                <i className="fa fa-fw fa-check-square-o" />
              </a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Wire (5m)</td>
            <td>0xac60e905167f51a083f252f36abcdef123456789</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Wire (5m)</td>
            <td>0xac60e905167f51a083f252f36abcdef123456789</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Wire (5m)</td>
            <td>0xac60e905167f51a083f252f36abcdef123456789</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Wire (5m)</td>
            <td>0xac60e905167f51a083f252f36abcdef123456789</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Wire (5m)</td>
            <td>0xac60e905167f51a083f252f36abcdef123456789</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Wire (5m)</td>
            <td>0xac60e905167f51a083f252f36abcdef123456789</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Wire (5m)</td>
            <td>0xac60e905167f51a083f252f36abcdef123456789</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Wire (5m)</td>
            <td>0xac60e905167f51a083f252f36abcdef123456789</td>
          </tr>
        </tbody>
      </table>
    </div>)
  }
}

module.exports = PendingOrders;
