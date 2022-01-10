import { connect } from 'react-redux'

import { incrementAction } from '../action';

function A({counter, increment}) {
    return (
        <div>
            A<br />
            {counter}<br />
            <button onClick={increment}>+</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(incrementAction)
});


export default connect(mapStateToProps, mapDispatchToProps)(A);
