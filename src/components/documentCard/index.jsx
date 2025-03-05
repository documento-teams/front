import useDocument from '@/hooks/useDocument';

const DocumentCard = () => {
  const { documents, loading, error } = useDocument();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!documents || documents.length === 0) {
    return <p>No documents available</p>;
  }

  return (
    <div>
      {documents.map((document) => (
        <div key={document.id} className="document-card">
          <h2>{document.name}</h2>
          <p>{document.content}</p>
        </div>
      ))}
    </div>
  );
};

export default DocumentCard;