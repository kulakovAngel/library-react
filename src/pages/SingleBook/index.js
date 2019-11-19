import React from 'react';
import { connect } from 'react-redux';


class PageSingleBook extends React.Component {
    
    componentDidMount() {
        const id = this.props.match && this.props.match.params.id;
        this.props.dispatch({
            type: "GET_SINGLE_BOOK",
            payload: id
        });
    }
    
    render() {
        const { id, title, author, total, available } = this.props.book;
        
        this.props.dispatch({
            type: "SET_PAGE_TITLE",
            payload: `Book: ${title}, ${author}`
        });

        return (
            <section>
                <button onClick={this.props.history.goBack}>&#8592;Go back</button>
                <h2>{`${title}`}</h2>
                <p>{`${author}; total: ${total}, `}<b>{'available: ' + available}</b></p>
                <small>{`DB key: ${id}`}</small>
            </section>
        )
    }
}


const mapStateToProps = state => ({
    book: state.book,
    auth: state.auth
});

export default connect(mapStateToProps)(PageSingleBook);