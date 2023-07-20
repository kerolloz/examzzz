-- CreateTable
CREATE TABLE "StudentExamScore" (
    "id" SERIAL NOT NULL,
    "examId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "StudentExamScore_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StudentExamScore" ADD CONSTRAINT "StudentExamScore_examId_fkey" FOREIGN KEY ("examId") REFERENCES "Exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentExamScore" ADD CONSTRAINT "StudentExamScore_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
