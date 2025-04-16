import useWorkspace from "@/hooks/useWorkspace";

const WorkspacesCard = () => {
  const { workspaces, loading, error } = useWorkspace();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!workspaces || workspaces.length === 0) {
    return <p>No workspaces available</p>;
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {workspaces.map((workspace) => (
        <div key={workspace.id} className="card bg-base-100 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">{workspace.name}</h2>
            <p className="truncate">{workspace.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Open</button>
              <button className="btn btn-error">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkspacesCard;