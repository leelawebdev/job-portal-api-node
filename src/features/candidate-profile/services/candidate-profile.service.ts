import prisma from '~/prisma';

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
}

export default new CandidateProfileService();
