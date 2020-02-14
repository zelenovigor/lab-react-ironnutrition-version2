import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// new imports
import foods from './foods.json'
import FoodBox from './components/foodBox.jsx'
import FoodForm from './components/foodForm'
import Search from './components/search.jsx'


// let state = {
//   allFoods: [...foods]
// }
// let allFoods = [...foods]

// function foodBox(arr){

// }

// foodBox(arrayOfAllFoods)

class App extends Component {
  state = {
    allFoods: foods,
    filteredFoods: foods,   // the original value fo filteredFoods is going to be the original array in foods.json
    showForm: false
  }

  displayFood = () => {
    let copyOfAllFoods = this.state.filteredFoods.map((eachFood, index) => {
      // console.log(eachFood)
      // return(<FoodBox name={eachFood.name} calories={eachFood.calories} image={eachFood.image}/>)
      return(<FoodBox key={eachFood.name} {...eachFood}/>)
    })
    // eachFood= {
    //   name: "pizza",
    //   image: "pizza.png",
    //   calories: 1000,
    //   quantity: 1
    // }

    return copyOfAllFoods;
  }

  addNewFoodToArray = (newFoodObj) => {
    console.log(newFoodObj)
    let copyOfAllFoods = this.state.allFoods.slice()
    copyOfAllFoods.unshift(newFoodObj)
    console.log(copyOfAllFoods)
    this.setState({
      allFoods: copyOfAllFoods
    })
  }

  handleAddFoodClick = () => {
    // console.log(this.state.showForm)
    this.setState({
      // we use !this.state.showForm so that the form will not show if the button is clicked again
      // if we just  said showForm: true then we would need to figure out another way to turn showForm back to false to not display the form
      showForm: !this.state.showForm, 
    })
  }

  filterFoods = searchInput => {
    console.log(searchInput)
    let filteredFoodsCopy = this.state.allFoods.filter(eachFood =>
      eachFood.name.toLowerCase().includes(searchInput.toLowerCase())
      // loop through the array using filter
      // I'm going to look at the name of each food in lowercase format (toLowerCase())
      // if the name of the food includes (i.e. matches) the searchInput in lowerCase format
      // then return that food to the new filteredFoodsCopy
    )

    this.setState({ 
      filteredFoods: filteredFoodsCopy 
    })
  }

  render() {
    return (
      <div className="App">
        <Search filterFoods={this.filterFoods}/>
        <button className="button" onClick={this.handleAddFoodClick}>
          Add Food
        </button>
        {/* if(true && true) {show the form }  if(false && true) {do not show form}*/}
        {this.state.showForm && <FoodForm addNewFoodToArray={this.addNewFoodToArray}/>}  
        {this.displayFood()}
      </div>
    );
  }
}

export default App;
