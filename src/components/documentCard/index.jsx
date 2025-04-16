import useDocument from '@/hooks/useDocument';

const DocumentCard = () => {
  const { documents, loading, error } = useDocument();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!documents || documents.length === 0) {
    return <p>No documents available</p>;
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {documents.map((document) => (
        <div key={document.id} className="card bg-base-100 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">{document.name}</h2>
            <p className="truncate">
              {document.content 
                ? `${document.content.slice(0, 100)}...` 
                : "No content available"}
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Open</button>
              <button className="btn btn-error">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DocumentCard;