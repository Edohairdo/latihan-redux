import { connect } from 'react-redux'

import{ decrementAction } from '../action';

function B({counter, decrement}) {
    return (
        <div>
            B<br />
            {counter}<br />
            <button onClick={decrement}>-</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter 
    }
}

const mapDispatchToProps = (dispatch) => ({
    decrement: (counter) => { dispatch(decrementAction);
    
}
});


export default connect(mapStateToProps, mapDispatchToProps)(B);