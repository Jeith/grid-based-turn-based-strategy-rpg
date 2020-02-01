import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import toadsMap from '../maps/testMap.json';


type Props = {};

export default class Tile extends Component<Props> {
  constructor() {
    super();
    this.state = {
      allies: [],
      enemies: [],
    }
    this.tileClicked = this.tileClicked.bind(this);
    this.allyClicked = this.allyClicked.bind(this);
    this.testFunction = this.testFunction.bind(this);
  }
  props: Props;

  componentWillMount(){
  }

  tileClicked(e){
    // if clicked, delegate task based off class name
    console.log("this.props.allyStartingSpace: " + this.props.allyStartingSpace)
    console.log("isAllyToggled: " + this.props.isAllyToggled);
    console.log(e.target.parentNode);
    let selectedNode = e.target.id !== undefined ? e.target.id : e.target.parentNode.id;
    console.log("selectedNode: " + selectedNode);

    // if player clicks blue tile...
    if ([...e.target.classList].includes('player-allowed-space')){
      console.log("FUCK");

      console.log(e.target);
    }

    if (this.props.allyStartingSpace){
      if (this.props.isAllyToggled){
        // removes blue tiles
        // while(document.getElementsByClassName('player-allowed-space').length > 0){
        //   document.getElementsByClassName('player-allowed-space')[0].classList.remove('player-allowed-space');
        // }
      }
      this.props.isAllyToggled(true);            

      this.allyClicked()

    } else {
      if (this.props.isAllyToggled){
        // removes blue tiles
        while(document.getElementsByClassName('player-allowed-space').length > 0){
          document.getElementsByClassName('player-allowed-space')[0].classList.remove('player-allowed-space');
        }
      } else {
        console.log("this.state.isAllyToggled: " + this.props.isAllyToggled);
      }
    }
  }

  allyClicked(){
    const xIndex = parseInt(this.props.id.split("-")[1]);
    const yIndex = parseInt(this.props.id.split("-")[2]);
    const tilesToMoveTo = [document.getElementById(`tile-${xIndex - 1}-${yIndex}`), document.getElementById(`tile-${xIndex + 1}-${yIndex}`), 
      document.getElementById(`tile-${xIndex}-${yIndex - 1}`), document.getElementById(`tile-${xIndex}-${yIndex + 1}`)]

    console.log(`i = ${xIndex}, j = ${yIndex}`);

    for (let i = 0; i < tilesToMoveTo.length; i++){
      const blueTile = document.createElement("span");
      blueTile.setAttribute("class", "player-allowed-space");

      console.log(tilesToMoveTo[i]);
      tilesToMoveTo[i].appendChild(blueTile)
    }
    // document.getElementById(`tile-${xIndex - 1}-${yIndex}`).appendChild = `<span class='player-allowed-space'></span>`

    // tile below
    console.log(`topTile = tile-${xIndex - 1}-${yIndex}`);
    console.log(document.getElementById(`tile-${xIndex - 1}-${yIndex}`));

    // tile above
    console.log(`bottomTile = tile-${xIndex + 1}-${yIndex}`)
    console.log(document.getElementById(`tile-${xIndex + 1}-${yIndex}`));

    // tile left
    console.log(`leftTile = tile-${xIndex}-${yIndex - 1}`)
    console.log(document.getElementById(`tile-${xIndex}-${yIndex - 1}`));

    // tile right
    console.log(`rightTile = tile-${xIndex}-${yIndex + 1}`)
    console.log(document.getElementById(`tile-${xIndex}-${yIndex + 1}`));
  }

  testFunction(){
    console.log("???")
  }

  render() {
    return (
      <div className={`tile ${this.props.texture}-texture ${this.props.allyStartingSpace ? "interactive ally" : " "} 
        ${this.props.allyStartingSpace ? "interactive enemy" : " "}`} onClick={this.tileClicked} id={this.props.id}>
        {
          this.props.allyStartingSpace ? <h1 className="caster ally">🧙</h1> : <span></span>
        }
        {
          this.props.enemyStartingSpace ? <h1 className="caster enemy">👹</h1> : <span></span>
        }
      </div>
    );
  }
}
