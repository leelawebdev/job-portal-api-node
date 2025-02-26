/*
  Warnings:

  - A unique constraint covering the columns `[candidateProfileId,languageId]` on the table `CandidateLanguages` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CandidateLanguages_candidateProfileId_languageId_key" ON "CandidateLanguages"("candidateProfileId", "languageId");
