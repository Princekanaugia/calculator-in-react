import {memo} from "react"
import PropTypes from "prop-types";

const DigitButton = memo(function DigitButton({value}) {


    return <>
        <button type="button" className="select-none " >{value}</button>
    </>
});

DigitButton.defaultProps = {
    value: "na"
};
DigitButton.propTypes = {
    value: PropTypes.string,
};

export default DigitButton;