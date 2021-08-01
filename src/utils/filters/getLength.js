export const getLength = (list) => ({
  known: list.knownList.length,
  toRepeat: list.toRepeatList.length,
  inProgress: list.inProgressList.length,
  nowLearning: list.nowLearningList.length,
  notKnown: list.all.length - list.knownList.length
    - list.inProgressList.length - list.nowLearningList.length,
  all: list.all.length,
  started: list.knownList.length
    + list.toRepeatList.length
    + list.inProgressList.length
    + list.nowLearningList.length
});

export const lengthInitialState = {
  known: 0,
  toRepeat: 0,
  inProgress: 0,
  nowLearning: 0,
  notKnown: 0,
  all: 0,
  started: 0
};
