/*
  Warnings:

  - Added the required column `studentId` to the `StudentExamQuestionAnswer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StudentExamQuestionAnswer" ADD COLUMN     "studentId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "StudentExamQuestionAnswer" ADD CONSTRAINT "StudentExamQuestionAnswer_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
