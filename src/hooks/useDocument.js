import api from "@/lib/api";
import { useState } from "react";

const useDocument = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDocumentList = async () => {
    try {
      const result = await api.get("/api/docs");
      console.log("Documents fetched:", result);
      setDocuments(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { documents, loading, error, fetchDocumentList };
  
}

export default useDocument;