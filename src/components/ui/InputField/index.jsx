import PropTypes from "prop-types";

const InputField = ({ label, type, id, value, onChange, placeholder, helperText }) => (
  <div className="grid mb-7">
    <label htmlFor={id} className="mb-[6px] text-left text-[#0F172A]">{label}</label>
    <input
      type={type}
      id={id}
      required
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border border-solid w-[441px] h-[40px] rounded-md border-[#9F5FCE] pl-3 pr-3 hover:bg-[#C28FFF]/20 transition-all duration-300"
    />
    <p className="text-[#64748B] text-left">{helperText}</p>
  </div>
);

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
}

export default InputField;