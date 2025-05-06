import PropTypes from 'prop-types';

const ItemList = ({
  title,
  items = [],
  renderItem,
  emptyMessage = "No items found",
  isLoading = false,
  error = null,
  headerActions,
  className = ""
}) => {
  const defaultRenderItem = (item) => (
    <div key={item.id} className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
      <div className="card-body">
        <h2 className="card-title">{item.title || item.name}</h2>
        {item.description && <p>{item.description}</p>}
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-sm">View</button>
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className={`p-4 ${className}`}>
        {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
        <div className="flex justify-center items-center p-8">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`p-4 ${className}`}>
        {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
        <div className="alert alert-error">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{error.message || "An error occurred while loading items"}</span>
        </div>
      </div>
    );
  }

  if (!items || items.length === 0) {
    return (
      <div className={`p-4 ${className}`}>
        <div className="flex justify-between items-center mb-4">
          {title && <h2 className="text-2xl font-bold">{title}</h2>}
          {headerActions}
        </div>
        <div className="alert alert-info">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>{emptyMessage}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-4 ${className}`}>
      <div className="flex justify-between items-center mb-4">
        {title && <h2 className="text-2xl font-bold">{title}</h2>}
        {headerActions}
      </div>
      <div className="space-y-4">
        {items.map((item) => (
          <React.Fragment key={item.id || item._id}>
            {renderItem ? renderItem(item) : defaultRenderItem(item)}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

ItemList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  renderItem: PropTypes.func,
  emptyMessage: PropTypes.string,
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  headerActions: PropTypes.node,
  className: PropTypes.string
};

export default ItemList;