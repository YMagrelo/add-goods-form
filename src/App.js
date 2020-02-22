import React from 'react';
import { GoodsList } from './GoodsList';
import { colors } from './api/colors';
import { goods as goodsFromServer } from './api/goods';
import './App.css';

// another changes

// Hash map

const getColorNameById = colorId => colors
  .find(color => color.id === colorId).name;

const goodsWithColors = goodsFromServer.map(({ colorId, ...good }) => ({
  ...good,
  color: getColorNameById(colorId),
}));

class App extends React.Component {
  state = {
    goods: goodsWithColors,
    goodName: '',
    colorId: 0,
  };

  handleNameChange = (event) => {
    const { target: { value } } = event;

    this.setState({ goodName: value });
  };

  handleColorChange = (event) => {
    const { target: { value } } = event;

    this.setState({ colorId: +value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const setStateCb = (prevState) => {
      const { goodName, colorId, goods } = prevState;

      const newGood = {
        id: goods[goods.length - 1].id + 1,
        name: goodName,
        color: getColorNameById(colorId),
      };

      return {
        goods: [...goods, newGood],
        goodName: '',
        colorId: 0,
      };
    };

    this.setState(setStateCb);
  }

  render() {
    const { goods, goodName, colorId } = this.state;

    return (
      <div className="App">
        <h1>Add good form</h1>

        <div>
          <span>Goods: </span>
          <GoodsList goods={goods} />

          <span>Add good form</span>

          <form
            name="newGood"
            onSubmit={this.handleSubmit}
          >
            <input
              name="goodName"
              value={goodName}
              onChange={this.handleNameChange}
              type="text"
              placeholder="Good name"
            />

            <select
              name="colorId"
              value={colorId}
              onChange={this.handleColorChange}
            >
              <option value={0} disabled>Select color</option>

              {colors.map(color => (
                <option
                  key={color.id}
                  value={color.id}
                >
                  {color.name}
                </option>
              ))}
            </select>

            <button type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
