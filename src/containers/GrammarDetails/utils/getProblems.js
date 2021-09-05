import grammarProblemsJson from '@data/grammar-problems.json';

export const getProblems = (grammarId) => {
  const problems = [];

  grammarProblemsJson.forEach((el) => {
    if (el.grammar === grammarId) {
      problems.push(...el.problems);
    }
  });

  return problems;
};
