import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';

import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDf_97IpZ_CB3-1NDAdfiTGu6k-Rt5F8HI';




//test class
/**


function Student (a, b, c, d, e) {
    this.a = a; 
    this.b = b; 
    this.c = c; 
    this.d = d; 
    this.e = e;
}

//test code
Student.prototype.getSum = function() {
    return this.b + this.c + this.d + this.e;
}

Student.prototype.getAverage = function() {
    return this.getSum() / 4;
}
Student.prototype.toString = function(){
    return this.a + "\t" + this.getSum() + "\t" + this.getAverage() + "\n";
}


var students = [];
students.push(new Student("A", 80, 80, 80,80));
students.push(new Student("B", 90, 90, 90,90));
students.push(new Student("C", 75, 75, 75,75));
students.push(new Student("D", 86, 86, 86,86));
students.push(new Student("E", 90, 90, 90,90));
students.push(new Student("F", 80, 80, 80,80));
students.push(new Student("G", 90, 90, 90,90));
students.push(new Student("H", 75, 75, 75,75));
students.push(new Student("I", 86, 86, 86,86));


let output = "ID\t 총합\t 평균\n";
for(let i = 0; i < students.length; i++) {
    output += students[i].toString();
}

console.log(output);
 */


// 새로운 컴포넌트를 만들고 이를 HTML형태로 변환한다
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('Apple Watch 4 series');
    }

    videoSearch (term) {
        YTSearch({ key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
             });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={ videoSearch }/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

// HTML로 이루어진 이 컴포넌트를 가져와서 DOM안에 넣는다.(page에 삽입한다.)
ReactDOM.render(<App />, document.querySelector('.container')); 