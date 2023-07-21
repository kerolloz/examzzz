/*
  Warnings:

  - A unique constraint covering the columns `[examId,studentId]` on the table `StudentExamScore` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "StudentExamScore_examId_studentId_key" ON "StudentExamScore"("examId", "studentId");
