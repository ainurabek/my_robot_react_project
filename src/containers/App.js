// import React, { useState, useEffect } from 'react';
// import CardList from '../components/CardList.js';
// import SearchBox from '../components/SearchBox';
// import Scroll from '../components/Scroll'
// import ErrorBoundry  from '../components/ErrorBoundry';


// import './App.css'



// function App () {
//     const [robots, setRobots] = useState([])
//     const [searchfield, setSearchfield] = useState('')

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users') //отправить url где есть arrays with objects
//             .then(reponse => reponse.json()) //полученный ответ конвертируй в json
//             .then(users => setRobots(users)); //users определить в параметр robots
//     }, [])           

//     const onSearchEvent = (event) =>{
//         setSearchfield(event.target.value)       
//     }

//     const filteredRobots = robots.filter(robot =>{
//         return robot.name.toLowerCase().includes(searchfield.toLowerCase())
//     })
//     return(
//         <div className='tc'>
//             <h1 className='f1'>RoboFriends</h1>
//             <SearchBox searchChange={onSearchEvent}/>                
//             <Scroll>
//                 <ErrorBoundry>
//                     <CardList robots={filteredRobots}/>
//                 </ErrorBoundry>                    
//             </Scroll>
            
//         </div>
//     )    
// }
// export default App; 

//через класс с Components
import React, {Component} from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundry  from '../components/ErrorBoundry';
import { setSearchField, requestRobots } from '../action.js';
import { connect } from 'react-redux';


import './App.css'

const mapStateToProps = state => {
    return{
        searchField: state.searchRobots.searchField,
        robots:state.requestRobots.robots,
        isPending:state.requestRobots.isPending,
        error:state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
   }
}

class App extends Component {
    

    componentDidMount(){
        this.props.onRequestRobots();
    }
        

    
    render() {
        //фильтр по тому что человек вводит в поле поиск, в маленькими буквами это включает то, что написано в searchfield
        const filteredRobots = this.props.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
        })
        return(
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.props.onSearchChange}/>                
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>                    
                </Scroll>
                
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); //фнукция внутри функции