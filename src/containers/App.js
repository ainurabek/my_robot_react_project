import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundry  from '../components/ErrorBoundry';

import './App.css'

function App () {
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users') //отправить url где есть arrays with objects
            .then(reponse => reponse.json()) //полученный ответ конвертируй в json
            .then(users => setRobots(users)); //users определить в параметр robots
    }, [])           

    const onSearchEvent = (event) =>{
        setSearchfield(event.target.value)       
    }

    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return(
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={onSearchEvent}/>                
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>                    
            </Scroll>
            
        </div>
    )    
}
export default App;

//через класс с Components
// import React, {Component} from 'react';
// import CardList from '../components/CardList.js';
// import SearchBox from '../components/SearchBox';
// import Scroll from '../components/Scroll'
// import ErrorBoundry  from '../components/ErrorBoundry';


// import './App.css'


// class App extends Component {
//     constructor(){
//         super();
//         //как моделька имеет два свойства, это список роботов(в CardList) и поле для поиска (SearchBox)
//         this.state = {
//             robots:[],
//             searchfield:''
//         }
//     }

//     componentDidMount(){
//         fetch('https://jsonplaceholder.typicode.com/users') //отправить url где есть arrays with objects
//             .then(reponse => reponse.json()) //полученный ответ конвертируй в json
//             .then(users => this.setState({robots:users})); //users определить в параметр robots
//     }
        
//     //this.setState - modify state
//     onSearchEvent = (event) =>{
//         this.setState({searchfield: event.target.value})
        
   
//     }
//     render() {
//         //фильтр по тому что человек вводит в поле поиск, в маленькими буквами это включает то, что написано в searchfield
//         const filteredRobots = this.state.robots.filter(robot =>{
//             return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
//         })
//         return(
//             <div className='tc'>
//                 <h1 className='f1'>RoboFriends</h1>
//                 <SearchBox searchChange={this.onSearchEvent}/>                
//                 <Scroll>
//                     <ErrorBoundry>
//                         <CardList robots={filteredRobots}/>
//                     </ErrorBoundry>                    
//                 </Scroll>
                
//             </div>
//         )
//     }
// }

// export default App;