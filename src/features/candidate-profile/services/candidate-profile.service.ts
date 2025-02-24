import prisma from '~/prisma';
import { BadRequestException } from '~/shared/cores/error.core';

class CandidateProfileService {
  public async create(requestBody: any, currentUser: UserPayload) {
    const { fullName, gender, phone, cv, birthDate, address } = requestBody;

    const candidateProfile = await prisma.candidateProfile.create({
      data: {
        fullName,
        gender,
        phone,
        cv,
        birthDate: new Date(birthDate),
        address,
        userId: currentUser.id
      }
    });

    return candidateProfile;
  }

  public async getAllCandidates() {
    return await prisma.user.findMany();
  }

  public async getSingleCandidate(id: number) {
    const candidate = await prisma.user.findUnique({
      where: {
        id
      }
    });

    if (!candidate) throw new BadRequestException(`Candidate with Id ${id} doesnt exist`);
    return candidate;
  }
}

export default new CandidateProfileService();
