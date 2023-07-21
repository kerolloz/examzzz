import R from 'ramda';
import {
  examQuestionService,
  studentExamQuestionAnswerService,
  studentExamScoreService,
} from '../modules';
async function gradeAnswers() {
  console.time('[GRADING]');
  // we need to fetch all the exam answers
  // for each answer we need to check if it's correct and then accumulate the score
  // finally save the scores
  const answers = (
    await studentExamQuestionAnswerService.findMany(
      {},
      {
        include: {
          examQuestion: {
            include: {
              question: {
                select: { correctAnswer: true },
              },
            },
          },
        },
      },
    )
  ).map((answer) => {
    return {
      isCorrect:
        answer.examQuestion.question.correctAnswer === answer.answerText,
      examId: answer.examQuestion.examId,
      studentId: answer.studentId,
    };
  });
  // find total score for each exam
  const examTotalScore = (await examQuestionService.groupByExam({})).reduce(
    (acc, curr) => {
      acc[curr.examId] = curr.totalQuestions;
      return acc;
    },
    {} as Record<string, number>,
  );

  // group answers by student Id and examId

  const groupedAnswers = R.groupBy(
    (a) => JSON.stringify({ examId: a.examId, studentId: a.studentId }),
    answers,
  );

  Object.values(groupedAnswers).map((value) => {
    // examId, studentId, score, totalScore
    if (value?.length) {
      const examId = value[0].examId;
      const studentId = value[0].studentId;
      const data = {
        examId,
        studentId,
        score: value.reduce((acc, curr) => acc + (curr.isCorrect ? 1 : 0), 0),
        totalScore: examTotalScore[value[0].examId],
      };
      studentExamScoreService
        .upsert({
          where: { scoreUniqueId: { examId, studentId } },
          create: data,
          update: {
            score: data.score,
            totalScore: data.totalScore,
          },
        })
        .catch(console.error);
    }
  });
  console.timeEnd('[GRADING]');
}

// every minute
export default () => setInterval(() => void gradeAnswers(), 1000 * 60);
