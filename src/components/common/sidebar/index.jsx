import PropTypes from 'prop-types';

const Index = ({ items, footer }) => {
  return (
    <div className="flex flex-col w-64 h-screen bg-gray-800">
      <div className="flex-grow">
        {items.map((item) => (
          item.href ?
          <a
            key={item.label}
            href={item.href}
            className="flex items-center p-4 text-gray-100 hover:bg-gray-700"
          >
            <span className="text-lg font-bold">{item.label}</span>
          </a> : 
          item.command ?
          <button
            key={item.label}
            onClick={item.command}
            className="flex items-center p-4 text-gray-100 hover:bg-gray-700"
          >
            <span className="text-lg font-bold">{item.label}</span>
          </button> : null
        ))}
      </div>
      {footer && <div className="p-4 bg-gray-700">{footer}</div>}
    </div>
  )
};

Index.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      command: PropTypes.func,
    })
  ).isRequired,
  footer: PropTypes.node,
};

Index.defaultProps = {
  items: [],
};

export default Index;