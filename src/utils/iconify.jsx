import { forwardRef } from "react";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Iconify = forwardRef(
  ({ icon, width = 20, className }, ref) => {
    const theme=useSelector((state)=>state.mode);
  const bool=theme==='dark';
    return (
      <div ref={ref} className={className}>
        <Icon icon={icon} width={width} height={width} color={bool ? "white" : "black"} />
      </div>
    );
  }
);

Iconify.propTypes = {
  icon: PropTypes.string.isRequired,
  width: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
};

Iconify.displayName = "Iconify";

export default Iconify;
