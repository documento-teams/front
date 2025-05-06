import api from "@/lib/api";
import { useState } from "react";

const useWorkspace = () => {  
  const [workspaces, setWorkspaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWorkspaceList = async () => {
    try {
      const result = await api.get("/api/workspaces");
      setWorkspaces(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const createWorkspace = async (name) => {
    try {
      const token = localStorage.getItem("token");
      const result = await api.post("/api/workspaces", { name, token });
      setWorkspaces((prevWorkspaces) => [...prevWorkspaces, result]);
    } catch (err) {
      setError(err);
    }
  };

  return { workspaces, loading, error, fetchWorkspaceList, createWorkspace };
};

export default useWorkspace;