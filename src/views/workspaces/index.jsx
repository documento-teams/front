import WorkspacesCard from "@/components/workspacesCard";

const Workspaces = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl font-bold">Workspaces</h1>
      <WorkspacesCard />
    </div>
  );
}

export default Workspaces;