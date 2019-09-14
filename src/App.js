import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Navbar from './Components/Navbar.js';
import ClientsList from './Components/ClientsList.js';
import Actions from './Components/Actions';
import Analytics from './Components/Analytics';
import axios from 'axios'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      searchField: '',
      sort: '',
    }
  }

  async componentDidMount() {
    let dataJson = await axios.get('http://localhost:8080/clients')
    this.setState({
      data: dataJson.data
    })
  }

  SearchChange = (e) => {
    this.setState({
      searchField: e.target.value
    })
  }
  selectChange = (e) => {
    this.setState({
      sort: e.target.value
    })
  }

  searchController = () => {
    if (this.state.sort === '') {
      let fillteredClients = this.state.data.filter(m => {
        return m.name.toLowerCase().includes(this.state.searchField.toLowerCase())
      })
      return fillteredClients
    }
    else if (this.state.sort === 'Name') {
      let fillteredClients = this.state.data.filter(m => {
        return m.name.toLowerCase().includes(this.state.searchField.toLowerCase())
      })
      return fillteredClients
    }
    else if (this.state.sort === 'Country') {
      let fillteredClients = this.state.data.filter(m => {
        return m.country.toLowerCase().includes(this.state.searchField.toLowerCase())
      })
      return fillteredClients
    }
    else if (this.state.sort === 'Sold') {
      let fillteredClients = this.state.data.filter(m => {
        return m.sold === true
      })
      return fillteredClients
    }
    else if (this.state.sort === 'Owner') {
      let fillteredClients = this.state.data.filter(m => {
        return m.owner.toLowerCase().includes(this.state.searchField.toLowerCase())
      })
      return fillteredClients
    }
  }


  addClient = async (obj) => {
    let today = new Date();
		let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = '' + today.getFullYear();
    let date = yyyy+'-'+mm
    obj.firstContact = date
    console.log(obj)
    await axios.post('http://localhost:8080/actions', obj)
    let dataJson = await axios.get('http://localhost:8080/clients')
    this.setState({
      data: dataJson.data
    })
  }

  updateFun = async (what , client , key) => {
    await axios.put('http://localhost:8080/update', { find : client , kind : what  , key : key})
    let dataJson = await axios.get('http://localhost:8080/clients')
    this.setState({
      data: dataJson.data
    })
  }

  updateClient = async (obj) => {
    await axios.put('http://localhost:8080/clients', obj)
  }
  DeclareSale = async (name) => {
    console.log('im in')
    await axios.put('http://localhost:8080/actions', { name : name })
    let dataJson = await axios.get('http://localhost:8080/clients')
    this.setState({
      data: dataJson.data
    })
  }

  render() {
    let fillteredClients = this.searchController()
    return (
      <Router>
        <div>
          <Navbar data={this.state.data} />
          {/* <ClientsList updateClient={this.updateClient} open={this.state.open} selectChange={this.selectChange} searchChange={this.SearchChange} data={fillteredClients} openForm={this.openForm} /> */}
          <Route exact path='/' render={() => <ClientsList updateClient={this.updateClient} open={this.state.open} selectChange={this.selectChange} searchChange={this.SearchChange} data={fillteredClients} openForm={this.openForm} />} />
          <Route exact path='/actions' render={() => <Actions updateFun={this.updateFun} DeclareSale={this.DeclareSale} addClient={this.addClient} data={this.state.data} />} />
          <Route exact path='/analytics' render={() => <Analytics data={this.state.data} />} />
        </div>
      </Router>
    )
  }
}
export default App;
