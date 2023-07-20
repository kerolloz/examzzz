-- CreateEnum
CREATE TYPE "QuestionType" AS ENUM ('MULTIPLE_CHOICE', 'INPIT_TEXT');

-- CreateEnum
CREATE TYPE "QuestionScoring" AS ENUM ('AUTOMATIC', 'MANUAL');

-- CreateTable
CREATE TABLE "Exam" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "Exam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "answers" TEXT[],
    "type" "QuestionType" NOT NULL,
    "scoring" "QuestionScoring" NOT NULL,
    "correctAnswer" TEXT NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamQuestion" (
    "id" SERIAL NOT NULL,
    "examId" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,

    CONSTRAINT "ExamQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentExamQuestionAnswer" (
    "id" SERIAL NOT NULL,
    "examQuestionId" INTEGER NOT NULL,
    "answerText" TEXT NOT NULL,

    CONSTRAINT "StudentExamQuestionAnswer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ExamQuestion" ADD CONSTRAINT "ExamQuestion_examId_fkey" FOREIGN KEY ("examId") REFERENCES "Exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamQuestion" ADD CONSTRAINT "ExamQuestion_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentExamQuestionAnswer" ADD CONSTRAINT "StudentExamQuestionAnswer_examQuestionId_fkey" FOREIGN KEY ("examQuestionId") REFERENCES "ExamQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
