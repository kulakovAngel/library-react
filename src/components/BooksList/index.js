import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { search } from './../../helpers';


class BooksList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_BOOKS'
            //+jwt
        });
    }
    
    handleChange(e) {
        console.log(e.target.value);
        this.setState({value: e.target.value})
    }
    
    render() {
        const { books, auth } = this.props;
        return (
                <section>
                    <form onSubmit={(e) => {e.preventDefault()}}>
                        <input type='search' placeholder='Search...' value={this.state.value} onChange={this.handleChange}/>
                    </form>
                    <ol>
                        {books.map((item) => (
                            (search(item.title, this.state.value) || search(item.author, this.state.value)) &&
                            <li key={item.id}>
                                <Link to={`/books/` + item.id}>
                                    {item.title}, by {item.author}. Total: {item.total}, available: {item.available} {auth.login && <button>order</button>}
                                </Link>
                            </li>
                        ))}
                    </ol>
                </section>
        );
    }
}

const mapStateToProps = state => ({
    books: state.books,
    auth: state.auth,
});

export default connect(mapStateToProps)(BooksList);