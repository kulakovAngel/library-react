import React from 'react';
import { connect } from 'react-redux';

import { search } from './../../helpers';


class BookDeliveryForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            searchingBook: '',
            searchingReader: '',
            selectingBook: 0,
            selectingReader: 0,
            selectingDate: 0,
        };
        this.handleSearchBook = this.handleSearchBook.bind(this);
        this.handleSearchReader = this.handleSearchReader.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.b = this.b.bind(this);
        this.r = this.r.bind(this);
    }
    
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_BOOKS'
            //+jwt
        });
        this.props.dispatch({
            type: 'GET_READERS'
            //+jwt
        });
    }
    
    handleSearchBook(e) {
        console.log(e.target.value);
        this.setState({searchingBook: e.target.value})
        
    }
    handleSearchReader(e) {
        console.log(e.target.value);
        this.setState({searchingReader: e.target.value});
    }
    handleDate(e) {
        console.log(e.target.value);
        this.setState({selectingDate: e.target.value});
    }
    
    handleSubmit(e) {
        const { readers, auth } = this.props;
        const { selectingReader: id_reader, selectingBook: id_book, selectingDate: event_date } = this.state;
        //console.log(reader, book);
        this.props.dispatch({
            type: 'TRY_POST_VISIT',
            payload: {id_reader,
                      id_book,
                      event_date,
                      id_librarian: auth.id,
                      jwt: auth.jwt,
                     },
            //+jwt
        });
        e.preventDefault();
    }
    
    b(e) {
        console.log(e.currentTarget.dataset.id);
        this.setState({selectingBook: +e.currentTarget.dataset.id});
    }
    r(e) {
        console.log(e.currentTarget.dataset.id);
        this.setState({selectingReader: +e.currentTarget.dataset.id});
    }
    
    render() {
        const { books, readers, auth, serverMessage } = this.props;
        console.log('serverMessage:');
        console.log(serverMessage);
        return (
                <section>
                    <form onSubmit={this.handleSubmit}>
                        <input type='search' placeholder='Book...' value={this.state.value} onChange={this.handleSearchBook} />
                        <input type='search' placeholder='Reader...' value={this.state.value} onChange={this.handleSearchReader} />
                        <input type='date' placeholder='Date...' value={this.state.value} onChange={this.handleDate} />
                        <div>
                            <input type='number' value={this.state.selectingBook} readOnly /> to <input type='number' value={this.state.selectingReader} readOnly />
                        </div>
                        <input type='submit' style={{display: 'none'}} />
                    </form>
                    
                    <ol style={{border: '1px solid yellow'}}>
                        {books.map((item) => (
                            (
                                this.state.searchingBook &&
                                (search(item.title, this.state.searchingBook) ||
                                 search(item.author, this.state.searchingBook))
                            ) &&
                            <li key={item.id}>
                                <button data-id={item.id} onClick={this.b}>
                                    {item.title}, by {item.author}. Total: {item.total}, available: {item.available}
                                </button>
                            </li>
                        ))}
                    </ol>
                    <ol style={{border: '1px solid red'}}>
                        {readers.map((item) => (
                            (
                                this.state.searchingReader &&
                                (search(item.name, this.state.searchingReader) ||
                                 search(item.login, this.state.searchingReader))
                            ) &&
                            <li key={item.id}>
                                <button data-id={item.id} onClick={this.r}>
                                    ID: {item.id}; NAME: {item.name}; Login: {item.login}
                                </button>
                            </li>
                        ))}
                    </ol>
                    {}
                </section>
        );
    }
}

const mapStateToProps = state => ({
    books: state.books,
    readers: state.readers,
    auth: state.auth,
    serverMessage: state.serverMessage,
});

export default connect(mapStateToProps)(BookDeliveryForm);