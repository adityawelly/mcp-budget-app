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
        <h2>Add/Edit income</h2>
        <hr />
        <form method='post'>

          <div className='mb-3'>
            <label for='tanggal_in' className='form-label'>
              Tanggal
            </label>
            <input type='text' className='form-control' id='tanggal_in' name='tanggal_in' value={income.tanggal_in}/>
          </div>

          <div className='mb-3'>
            <label for='jumlah_in' className='form-label'>
              Jumlah
            </label>
            <input type='jumlah_in' className='form-control' id='jumlah_in' name='jumlah_in' value={income.jumlah_in}/>
          </div>

          <div className='mb-3'>
            <label for='catatan_in' className='form-label'>
              Catatan
            </label>
            <input type='text' className='form-control' id='catatan_in' name='catatan_in' value={income.catatan_in}/>
          </div>
          <hr />
          <button className='btn'>Simpan</button>
        </form>
      </Fragment>
    )
  }
}