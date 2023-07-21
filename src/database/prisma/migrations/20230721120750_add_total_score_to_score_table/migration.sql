/*
  Warnings:

  - Added the required column `totalScore` to the `StudentExamScore` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StudentExamScore" ADD COLUMN     "totalScore" INTEGER NOT NULL;
