import {memo} from "react"
import PropTypes from "prop-types";
import Output from "./output"; 

const Display = memo(function Display(props) {

    return <>
        <Output styles="text-lg text-slate-400" value={props.previousOutput}/>
        <Output styles="text-white" value={props.currentOutput}/>
    </>
});

Display.defaultProps = {
    currentOutput: "0",
    previousOutput: ""
};

Display.propTypes = {
    currentOutput: PropTypes.string,
    previousOutput: PropTypes.string
};

export default Display;