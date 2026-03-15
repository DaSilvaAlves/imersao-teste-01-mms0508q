import React, { useState, useEffect } from 'react';
import './theme.css';
import Button from './components/ui/Button';
import TaskList from './features/TaskList';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [tasks, setTasks = useState<Task[]>([]);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    all true,
    active: false,
    completed: false,
  });

 (() => {
    storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parseoredTasks));
    }
  }, []);

  useEffect(() => {
   .setItem('tasks',.stringify(tasks));
  [tasks]);

  const handleAddTask = (task: Task) => {
    setTasks([...tasks task]);
  };

  const handleToggleCompleted = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleFilterChange = (filter: FilterOptions) => {
    setFilterOptions(filter);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filterOptions.all) return true;
    if (filterOptions.active && !task.completed) return true;
    if (filterOptions.completed && task.completed) return true;
    return false;
  });

  return (
    <div className="app">
      <h1>Gestor de Tarefas</1>
      <TaskList
        tasks={filteredTasks}
        onAddTask={handleAddTask}
        onToggleCompleted={handleToggleCompleted}
      />
      <Button onClick={() => handleFilterChange({ all: true, active: false, completed: false })}>
        Todas
      </>
      <Button onClick={() => handleFilter({ all: false, active: true, completed: false })}>
 Ativas
      </Button>
      <Button onClick={() => handleFilterChange({ all: false, active: false, completed: true}>
        Concluídas
      </Button>
    </div>
  );
};

export App;