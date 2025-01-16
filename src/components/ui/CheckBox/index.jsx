import PropTypes from "prop-types";


const Checkbox = ({ label, id, checked, onChange }) => (
  <div className="flex mt-7">
    <label className="custom-checkbox">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="w-[14px] h-[14px]"
      />
      <span className="checkmark"></span>
    </label>
    <label htmlFor={id} className="text-black ml-2 font-medium">{label}</label>
  </div>
);

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;