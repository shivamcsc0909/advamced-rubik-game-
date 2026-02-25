// Created by Shivam Pandey
export const setFinish = (finish: boolean): void => {
  const finishEle = document.getElementById('finish');
  if (!finishEle) return;

  // use textContent and English messages
  finishEle.textContent = finish ? '👏 Congrats!' : '🤔 Keep trying!';
};