import React, {Component} from 'react';
import Feed from './components/Feed';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: [
                {id: 1, username: 'Misael', curtidas: 10, comentarios: 2},
                {id: 2, username: 'Jheniffer', curtidas: 30, comentarios: 8},
                {id: 3, username: 'Gustavo', curtidas: 8, comentarios: 0},
                {id: 4, username: 'Ester', curtidas: 9, comentarios: 1}
            ]
        }
    }

    render() {
        return (
            <div>
                {this.state.feed.map((item) => {
                    return (
                        <Feed key={item.id} username={item.username} curtidas={item.curtidas} comentarios={item.comentarios}/>
                    )
                })}
            </div>
        )
    }
}

export default App