import project from 'project.json';

export const getProject = () => new Promise(resolve => resolve(project));
