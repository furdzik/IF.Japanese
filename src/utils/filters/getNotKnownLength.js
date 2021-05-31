export const getNotKnownLength = (list) => list.all.length - list.knownList.length
  - list.inProgressList.length - list.nowLearningList.length;
