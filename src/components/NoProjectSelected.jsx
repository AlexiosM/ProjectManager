import noProjectImg from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImg}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl fond-bold text-stone-500">No project selected</h2>
      <p>Select a project or get started with a new one</p>
      <p>
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}
