export const getImageUrl = (path: string): string => {
  return `assets/images/${path}`;
};

export const getProjectImageUrl = (projectId: number, imageIndex: number): string => {
  return `assets/images/projects/project-${projectId}-${imageIndex}.jpg`;
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};