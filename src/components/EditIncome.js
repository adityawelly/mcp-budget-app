import React, { Component, Fragment } from 'react'

export default class EditIncome extends Component {
  state = {
    income: {},
    isLoaded: false,
    error: null,
  }

  // componentDidMount() {
  //   this.setState({
  //     income: {
  //       title: "Jajan",
  //       amount: "20.000",
  //     }
  //   })
  // }

  render() {
    let {income} = this.state;

    return(
      <Fragment>
        <h2>Add/Edit Income</h2>
        <hr />
        <form method='post'>
          <div className='mb-3'>
            <label for='title' className='form-label'>
              Title
            </label>
            <input type='text' className='form-control' id='title' name='title' value={income.title}/>
          </div>

          <div className='mb-3'>
            <label for='amount' className='form-label'>
              Amount
            </label>
            <input type='amount' className='form-control' id='amount' name='amount' value={income.amount}/>
          </div>

          <div className='mb-3'>
            <label for='date' className='form-label'>
              Date
            </label>
            <input type='text' className='form-control' id='date' name='date' value={income.date}/>
          </div>

          <hr />
          
          <button className='btn'>Save</button>
        </form>
      </Fragment>
    )
  }
}