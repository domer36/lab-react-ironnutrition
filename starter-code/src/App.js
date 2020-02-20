import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import ListFoods from './components/ListFoods';
import AddFood from './components/AddFood';

class App extends Component {
  state = { 
    foods, 
    addedFood:[], 
    newFood: {
      name: '',
      calories: 0,
      image: ''
    },
    showForm: false
  }

  showForm = ()=>{
    this.setState({showForm: !this.state.showForm})
  }

  findFood = (keys) => {
    this.setState({foods: foods.filter( food => food.name.toLowerCase().includes(keys.toLowerCase()))})

  }
 
  addNewFood = (e)=>{
    e.preventDefault()
    const {name, calories, image}= this.state.newFood
    if(name && calories && image){
      foods.push(this.state.newFood)
      this.setState({foods})


      this.setState({newFood: {
        name: '', calories: 0, image: ''
      }})
    }
  }

  handleNewInput = ({target: {name, value}}) => {   
    this.setState({newFood: {
      ...this.state.newFood,
      [name]: value
    }})
  }

  handleInput = ({target: {value, id}}) => {    
    this.setState({
      foods: this.state.foods.map( (food, i) => ( id == i ) ? {...food, quantity: value} : food)
    })
  }

  addFood = (id) => {
    if( !id ) return
    this.setState( prev => {
      return {
        ...prev,
        addedFood:[
          ...prev.addedFood,
          this.state.foods[id]
        ]
      }
    })
  }

  render() {
    return (
      <div className="App">
        { this.state.showForm ? <AddFood newFood={this.state.newFood} handleNewInput={this.handleNewInput} addNewFood={this.addNewFood} /> : null}
        <button onClick={this.showForm}>Add food</button>
        <Search findFood={this.findFood} />
        <div className="foodsSection">
          <div className="listfood">
            {this.state.foods.map( (food, i) => <FoodBox key={i} food={food} handleInput={this.handleInput} id={i} addFood={this.addFood} />)}
          </div>
          <div className="todaysfood">
            <ListFoods addedFood={this.state.addedFood}/>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
