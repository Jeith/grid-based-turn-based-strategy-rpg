import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import toadsMap from '../maps/testMap.json';
import Tile from '../components/Tile';

type Props = {};

export default class Home extends Component<Props> {
  constructor() {
    super();
    this.state = {
      test: 'test',
      tileContainer: [],
      rowContainers: [],
      rowsIds: null,
      isAllyToggled: false,
    }
  }
  props: Props;

  componentWillMount(){
    let rowsIds = [];
    let rowContainers = [];

    for (let i = 0; i < toadsMap.canvasSize.y; i++){
      rowsIds.push("row" + i);
    }

    this.setState({rowsIds});
  }

  onAllyToggled = (bool) => {
    this.setState({isAllyToggled: bool});
  }

  render() {
    return (
      <div className="home" data-tid="container">
        <div className="map-container">
          {
            this.state.rowsIds.map((rowId, i) => {
              return ( <div key={`row-${i}`} className="row" id={rowId}>
                {
                  toadsMap.xAxis[i].map((tileObj, j) => {
                    return (<Tile key={`tile-${i}-${j}`} id={`tile-${i}-${j}`} texture={tileObj.texture}
                    enemyStartingSpace={tileObj.enemyStartingSpace} allyStartingSpace={tileObj.allyStartingSpace} isAllyToggled={this.onAllyToggled}/> 
                    )
                  })
                }
              </div> 
              )
            })
          }
        </div>
      </div>
    );
  }
}
