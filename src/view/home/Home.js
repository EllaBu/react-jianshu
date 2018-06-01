import React, { Component } from 'react';
import PreviewList from 'preview/PreviewList' 
import Recommend from 'components/home/Recommend' 
import api from 'config/config.json'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      previews: [],
      authors: []
    };
  }
  componentDidMount() {
    $.post(`${api.url}/getPreview`)
    .done(res => {
      // console.log(res.data)
      if(res.code === 0){
        this.setState({
          previews: res.data
        })
      }
      // console.log(this.state.previews)
    })
    $.post(`${api.url}/getAuthor`)
    .done(res => {
      // console.log(res.data)
      if(res.code === 0){
        this.setState({
          authors: res.data
        })
      }
      // console.log(this.state.authors)
    })
  }
  render() {
    let {previews, authors} = this.state
    // console.log(previews)
    return (
      <div className="ui container grid">
        <div className="column twelve wide">
          <PreviewList 
            {...{
              previews
            }}
          />
        </div>
        <div className="column four wide">
          <Recommend 
            {...{
              authors
            }}
          />
        </div>
      </div>
    );
  }
}

export default Home;