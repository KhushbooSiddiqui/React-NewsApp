import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor(){
        super();
        this.state ={
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
      let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=1bbe3ea61e284578abc681b952d9c85f";
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({articles: parsedData.articles})
    }

  render() {
    return (
        <div className="container my-3 ">
            <h2>NewsExpress - Top Headlines</h2>
            <div className="row">
            {this.state.articles.map ((element) =>{

              return <div className="col-md-3" key={element.url}>
              <NewsItem  title={element.title?element.title.slice(0, 40):""} description={element.description?element.description.slice(0, 50):""} imageUrl = {element.urlToImage} newsUrl={element.url}/>
              </div>

            })
            }

            
                
            </div>
        </div>
    )
  }
}

export default News



// 1bbe3ea61e284578abc681b952d9c85f
// https://newsapi.org/v2/top-headlines?apiKey=1bbe3ea61e284578abc681b952d9c85f&q=war
