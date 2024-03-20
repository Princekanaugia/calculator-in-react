import PropTypes from "prop-types";

function Output(props) {

    return <>
        <div className="text-lg text-slate-400">{props.previousOutput}</div>
        <div className="text-white">{props.currentOutput}</div>
    </>
}

Output.defaultProps = {
    currentOutput: "0",
    previousOutput: ""
};

Output.propTypes = {
    currentOutput: PropTypes.string,
    previousOutput: PropTypes.string
};

export default Output;