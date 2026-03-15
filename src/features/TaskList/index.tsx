import React from 'react';
import Button from '../../components/ui/Button';

interface TaskListProps {
  tasks: Task[];
  onAddTask: (task: Task) => void;
  onToggleCompleted: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onAddTask, onToggleCompleted }) =>  const [newTaskTitle, setNewTask] = React.useState('');
  const [newTaskDescription, setNewTaskDescription] = React.useState('');

  const handleAddTask = () => {
    const newTask: Task = {
      id: Date.now(),
      title newTaskTitle,
      description: newTask,
      completed: false,
    };
    onAddTask(newTask);
    setNewTitle('');
    setNewTaskDescription('');
  };

  return (
    <div className="card">
      <h2>Tarefas</h2>
      <ul>
        {tasks((task) => (
          <li key={task.id}>
            <input
              type=""
              checked={task.completed}
              onChange={() => onToggleCompleted(task.id)}
            />
            <span style={{ textDecoration: task.completed ?line-through' : 'none' }}>
              {task.title}
            </span>
            <>{task.description}</p>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        placeholder="Título da tarefa"
      />
      <input
        type="text"
        value={newTaskDescription}
        onChange={(e) => setNewTaskDescription(e.target.value)}
        placeholder="Descrição da tarefa"
      />
      <Button onClick={handleAddTask}>Adicionar Tarefa</Button>
    </div>
 };

export default TaskList;