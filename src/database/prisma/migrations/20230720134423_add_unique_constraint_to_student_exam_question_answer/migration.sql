/*
  Warnings:

  - A unique constraint covering the columns `[examQuestionId,studentId]` on the table `StudentExamQuestionAnswer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "StudentExamQuestionAnswer_examQuestionId_studentId_key" ON "StudentExamQuestionAnswer"("examQuestionId", "studentId");
