import React from 'react';
import '../../index.css';
import {connect} from "react-redux";
import {updateVisibilityFilter, TODO_FILTER} from "./reducers/visibility-filter.reducer";
import {getVisibilityFilter} from "./reducers/selectors";
import {RootState} from "../../shared/reducers";

export interface Props extends DispatchProps, StateProps {
}

const VisibilityFilters = ({visibilityFilter, updateVisibilityFilter}: Props) => {
    console.log("visibilityFilter", visibilityFilter);
    return (
        <div>
            <button className="col" onClick={() => updateVisibilityFilter(TODO_FILTER.ALL)}>all</button>
            <button className="col" onClick={() => updateVisibilityFilter(TODO_FILTER.COMPLETED)}>completed</button>
            <button className="col" onClick={() => updateVisibilityFilter(TODO_FILTER.INCOMPLETE)}>incomplete</button>
            <div>Current filter: {visibilityFilter}</div>
        </div>
    );
};

const mapDispatchToProps = {
    updateVisibilityFilter
};

const mapStateToProps = (state: RootState) => {
    return {
        visibilityFilter: getVisibilityFilter(state)
    };
};

type DispatchProps = typeof mapDispatchToProps;
type StateProps = ReturnType<typeof mapStateToProps>

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilters);