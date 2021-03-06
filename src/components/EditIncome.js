import React, { Component, Fragment } from 'react'
import Input from './form-components/input';

export default class EditIncome extends Component {
  // state = {
  //   income: {},
  //   isLoaded: false,
  //   error: null,
  // }

  constructor(props) {
    super(props);
    this.state = {
      income: {
        id: 0,
        tanggal_in: "",
        jumlah_in: "",
        catatan_in: "",
      },
      isLoaded: false,
      error: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (evt) => {
    // console.log("Form was submitted");
    evt.preventDefault();

    const data = new FormData(evt.target);
    const payload = Object.fromEntries(data.entries());
    console.log(payload);

    const requestOptions = {
      method: 'POST',
      body : JSON.stringify(payload)
    }

    fetch('http://localhost:4000/v1/income/editincome', requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
  };

  handleChange = (evt) => {
    let value = evt.target.value;
    let name = evt.target.name;
    this.setState((prevState) => ({
      income: {
        ...prevState.income,
        [name]: value,
      }
    }))
  }

  componentDidMount() {
  //   this.setState({
  //     income: {
  //       title: "Jajan",
  //       amount: "20.000",
  //     }
  //   })

  const id = this.props.match.params.id;
  if (id > 0) {
    fetch("http://localhost:4000/v1/income/" + id)
      .then((response) => {
        if (response.status !== "200") {
          let err = Error;
          err.Message = "Invalid response code: " + response.status;
          this.setState({error: err});
        }
        return response.json();
      })
      .then((json) => {
        const tanggal = new Date(json.income.tanggal_in);

        this.setState(
          {
            income: {
              id: id,
              tanggal_in: tanggal.toISOString().split("T")[0],
              jumlah_in: json.income.jumlah_in,
              catatan_in: json.income.catatan_in,
            },
            isLoaded: true,
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error,
            })
          }
        )
      })
  } else {
    this.setState({ isLoaded: true});
  }
  }

  render() {
    let {income, isLoaded, error} = this.state;

    if(error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <p>Loading...</p>
    } else {

    return(
      <Fragment>
        <h2>Add/Edit income</h2>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <input type="hidden" name='id' id='id' value={income.id} onChange={this.handleChange}/>

          {/* <div className='mb-3'>
            <label htmlFor='tanggal_in' className='form-label'>
              Tanggal
            </label>
            <input type='text' className='form-control' id='tanggal_in' name='tanggal_in' value={income.tanggal_in} onChange={this.handleChange}/>
          </div> */}

          <Input title={"Tanggal"} type={'date'} name={'tanggal_in'} value={income.tanggal_in} handleChange={this.handleChange} />

          {/* <div className='mb-3'>
            <label htmlFor='jumlah_in' className='form-label'>
              Jumlah
            </label>
            <input type='text' className='form-control' id='jumlah_in' name='jumlah_in' value={income.jumlah_in} onChange={this.handleChange}/>
          </div> */}

          <Input title={"Jumlah"} type={'text'} name={'jumlah_in'} value={income.jumlah_in} handleChange={this.handleChange} />

          {/* <div className='mb-3'>
            <label htmlFor='catatan_in' className='form-label'>
              Catatan
            </label>
            <input type='text' className='form-control' id='catatan_in' name='catatan_in' value={income.catatan_in} onChange={this.handleChange}/>
          </div> */}

          <Input title={"Catatan"} type={'text'} name={'catatan_in'} value={income.catatan_in} handleChange={this.handleChange} />

          <hr />
          <button className='btn'>Simpan</button>
        </form>

        <div className='mt-3'>
          <pre>{JSON.stringify(this.state, null, 3)}</pre>
        </div>
      </Fragment>
    );
        }
  }
}