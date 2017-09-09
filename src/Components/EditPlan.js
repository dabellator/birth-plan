import React, { Component } from 'react';
import AppView from './AppView';
import PreferenceSelector from './PreferenceSelector';

export default class EditPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const preferences = [
      {
        title: 'title 1',
        description: 'this is where the description will go for the first item this is where the description will go for the first item.'
      },
      {
        title: 'title 2',
        description: 'this is where the description will go for the second item.  this is where the description will go for the second item.'
      },
      {
        title: 'title 3',
        description: 'this is where the description will go for the third item. this is where the description will go for the third item.  this is where the description will go for the third item. this is where the description will go for the third item. this is where the description will go for the third item.  this is where the description will go for the third item.'
      },
      {
        title: 'title 4',
        description: 'this is where the description will go for the fourth item.  this is where the description will go for the fourth item.'
      },
      {
        title: 'title 5',
        description: 'this is where the description will go for the fifth item.  this is where the description will go for the fifth item.'
      },
      {
        title: 'title 6',
        description: 'this is where the description will go for the sixth item.  this is where the description will go for the sixth item.  this is where the description will go for the sixth item.'
      },
      {
        title: 'title 7',
        description: 'this is where the description will go for the seventh item.  this is where the description will go for the seventh item.'
      },
      {
        title: 'title 8',
        description: 'this is where the description will go for the eighth item.'
      },
      {
        title: 'title 9',
        description: 'this is where the description will go for the ninth item.'
      },
      {
        title: 'title 10',
        description: 'this is where the description will go for the eleventh item.'
      },
      {
        title: 'title 12',
        description: 'this is where the description will go for the twelvth (sp?) item.'
      },
      {
        title: 'title 13',
        description: 'this is where the description will go for the thirteenth item.'
      },
      {
        title: 'title 14',
        description: 'this is where the description will go for the fourteenth item.'
      },
      {
        title: 'title 15',
        description: 'this is where the description will go for the fifteenth item.'
      },
      {
        title: 'title 16',
        description: 'this is where the description will go for the sixteenth item.'
      },
      {
        title: 'title 17',
        description: 'this is where the description will go for the seventeenth item.'
      },
      {
        title: 'title 18',
        description: 'this is where the description will go for the eighteenth item.'
      },
      {
        title: 'title 19',
        description: 'this is where the description will go for the nineteenth item this is where the description will go for the nineteenth item.'
      },
      {
        title: 'title 20',
        description: 'this is where the description will go for the twentieth item.'
      },
      {
        title: 'title 21',
        description: 'this is where the description will go for the twenty first item.'
      },
      {
        title: 'title 22',
        description: 'this is where the description will go for the twenty second item.'
      },
      {
        title: 'title 23',
        description: 'this is where the description will go for the twenty third item.'
      },
      {
        title: 'title 24',
        description: 'this is where the description will go for the twenty fourth item.'
      },
      {
        title: 'title 25',
        description: 'this is where the description will go for the twenty fifth item.'
      },
      {
        title: 'title 26',
        description: 'this is where the description will go for the twenty sixth item.'
      },
      {
        title: 'title 27',
        description: 'this is where the description will go for the twenty seventh item.'
      },
      {
        title: 'title 28',
        description: 'this is where the description will go for the twenty eighth item.'
      },
      {
        title: 'title 29',
        description: 'this is where the description will go for the twenty ninth item.'
      },
    ]

    const images = this.renderImages();

    return (
      <AppView>
          <div style={{padding: '0 1em', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            {/* {preferences.map(p => <PreferenceSelector preference={p} />)} */}
            {images}
          </div>
      </AppView>
    )
  }

  renderImages() {
    return this.props.images.map((image, i) => {
      return (
        <img key={i} src={image} style={{width:'3em',height:'3em'}}/>
      )
    })
  }
}
