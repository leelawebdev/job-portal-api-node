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
    return await prisma.candidateProfile.findMany();
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

  public async update(id: number, requestBody: any) {
    try {
      const { fullName, gender, phone, cv, birthDate, address } = requestBody;
      console.log(requestBody);
      await this.getSingleCandidate(id);
      console.log('dsdsdsddsdsd');

      const candiate = await prisma.candidateProfile.update({
        where: { id },
        data: {
          fullName,
          gender,
          phone,
          cv,
          birthDate: new Date(birthDate),
          address
        }
      });
      console.log(candiate);
      return candiate;
    } catch (e) {
      console.log(e);
      throw new BadRequestException('NOt found error');
    }
  }
}

export default new CandidateProfileService();
