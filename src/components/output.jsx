import {memo} from "react"
import PropTypes from "prop-types";

const Output = memo(function Output(props) {

    return <>
        <div className={props.styles}>{props.value}</div>
    </>
});

Output.defaultProps = {
    styles: "text-white",
    value: "0"
};

Output.propTypes = {
    styles: PropTypes.string,
    value: PropTypes.string,
};

export default Output;