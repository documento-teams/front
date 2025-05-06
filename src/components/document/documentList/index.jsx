import { useEffect } from 'react';
import ItemList from "@/components/common/itemList";
import useDocument from "@/hooks/useDocument";

const DocumentsPage = () => {
  const { documents, isLoading, error, fetchDocumentList } = useDocument();

  useEffect(() => {
    const fetchDocuments = async () => {
      await fetchDocumentList();
    };

    fetchDocuments();
  }
  , []);

  return (
    <div className="container mx-auto py-8">
      
      <ItemList
        documents={documents}
        isLoading={isLoading}
        error={error}

      />
    </div>
  );
};

export default DocumentsPage;