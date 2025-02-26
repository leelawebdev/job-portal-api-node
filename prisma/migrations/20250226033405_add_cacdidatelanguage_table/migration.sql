-- CreateEnum
CREATE TYPE "Level" AS ENUM ('BASIC', 'INTERMEDIATE', 'ADVANCED', 'FLUENT');

-- CreateTable
CREATE TABLE "CandidateLanguages" (
    "id" SERIAL NOT NULL,
    "candidateProfileId" INTEGER NOT NULL,
    "languageId" INTEGER NOT NULL,
    "level" "Level" NOT NULL,

    CONSTRAINT "CandidateLanguages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CandidateLanguages" ADD CONSTRAINT "CandidateLanguages_candidateProfileId_fkey" FOREIGN KEY ("candidateProfileId") REFERENCES "CandidateProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidateLanguages" ADD CONSTRAINT "CandidateLanguages_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
