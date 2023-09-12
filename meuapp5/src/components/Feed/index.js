import React, {Component} from "react";

class Feed extends Component {
    render() {
        return (
            <div key={this.props.key}>
                <h3>Nome: {this.props.username}</h3>
                <a>Curtidas: {this.props.curtidas}</a> <br/><br/>
                <a>Comentários: {this.props.comentarios}</a>
                <hr/>
            </div>
        )
    }
}

export default Feed