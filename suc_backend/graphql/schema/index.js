const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type User {
    _id: ID!
    name: String!
    email: String!
    password: String
    userType: String!
    profile: Profile!
    alumni: Alumni!
}
input UserInput{
    name: String!
    email: String!
    password: String!
    userType: String!
}

type AuthData{
    userId: ID!
    userType: String!
    token: String!
    tokenExpiration: Int!
}

type Language {
    _id: ID!
    language: String!
    profile: Profile!
}
input LanguageInput{
    language: String
}

type Skill {
    _id: ID!
    skill: String!
    rating: Int!
    profile: Profile!
}
input SkillInput{
    skill: String!
    rating: Int!
}

type ReachOut {
    _id: ID!
    gitHub: String
    linkedIn: String
    instagram: String
    faceBook: String
    twitter: String
    profile: Profile!
}
input ReachOutInput {
    gitHub: String
    linkedIn: String
    instagram: String
    faceBook: String
    twitter: String
}

type Project {
    _id: ID!
    projectName: String!
    projectDescription: String
    projectUrl: String!
    projectDemo: String
    profile: Profile!
}
input ProjectInput{
    projectName: String!
    projectDescription: String
    projectUrl: String!
    projectDemo: String
}

type Course {
    _id: ID!
    courseName: String!
    specialization: String!
    certificate: String!
    credentials: String!
    profile: Profile!
}
input CourseInput{
    courseName: String!
    specialization: String!
    certificate: String!
    credentials: String!
}

type Alumni{
    _id: ID!
    name: String
    personPhone: String
    personMail: String
    companyName: String
    companyPhone: String
    companyMail: String
    companyAddress: String
    companyWebsite: String
    users: User!
}
input AlumniInput {
    name: String
    personPhone: String
    companyName: String
    companyPhone: String
    companyMail: String
    companyAddress: String
    companyWebsite: String
}

type Achievement {
    _id: ID!
    title: String!
    achievementDescription: String
    certificate: String!
    profile: Profile!
}
input AchievementInput {
    title: String!
    achievementDescription: String
    certificate: String!
}

type Position {
    _id: ID!
    positionHeld: String!
    companyName: String!
    positionDescription: String!
    startDate: String!
    endDate: String!
    profile: Profile!
}
input PositionInput {
    positionHeld: String!
    companyName: String
    positionDescription: String
    startDate: String!
    endDate: String!
}

type AdditionalDetails {
    _id: ID!
    detailsDescription: String!
    profile: Profile!
}
input AdditionalDetailsInput {
    detailsDescription: String!
}

type Address {
    _id: ID!
    state: String
    city: String
    location: String
    pinCode: String
    profile: Profile!
}
input AddressInput {
    state: String
    city: String
    location: String
    pinCode: String
}

type School {
    _id: ID!
    schoolName: String
    schoolGrade: String
    schoolBoard: String
    schoolYear: Int
    education: Education!
}
input SchoolInput {
    schoolName: String
    schoolGrade: String
    schoolBoard: String
    schoolYear: Int
}

type College {
    _id: ID!
    collegeName: String
    collegeGrade: String
    collegeCourse: String
    collegeBoard: String
    collegeYear: Int
    education: Education!
}
input CollegeInput {
    collegeName: String
    collegeGrade: String
    collegeCourse: String
    collegeBoard: String
    collegeYear: Int
}

type Graduation {
    _id: ID!
    graduationCollegeName: String
    graduationCollegeGrade: String
    graduationUniversity: String
    graduationCourse: String
    graduationStream: String
    graduationStartYear: Int
    graduationEndYear: Int
    education: Education!
}
input GraduationInput {
    graduationCollegeName: String
    graduationCollegeGrade: String
    graduationUniversity: String
    graduationCourse: String
    graduationStream: String
    graduationStartYear: Int
    graduationEndYear: Int
}

type Education {
    _id: ID!
    school: School
    college: College
    graduation: Graduation
    profile: Profile!
}
input EducationInput {
    schoolName: String
    schoolGrade: String
    schoolBoard: String
    schoolYear: Int
    collegeName: String
    collegeGrade: String
    collegeCourse: String
    collegeBoard: String
    collegeYear: Int
    graduationCollegeName: String
    graduationCollegeGrade: String
    graduationUniversity: String
    graduationCourse: String
    graduationStream: String
    graduationStartYear: Int
    graduationEndYear: Int
}

type Profile {
    _id: ID!
    name: String
    phoneNumber: String
    photo: String
    email: String
    portFolio: String
    status: Boolean
    interestedIntern: Boolean
    strength: Int
    addresses: Address
    education: Education
    skills: [Skill]
    positions: [Position]
    projects: [Project]
    courses: [Course]
    languages: [Language]
    achievements: [Achievement]
    detailsAdditional: [AdditionalDetails]
    reachOuts: ReachOut
    users: User!
}

input ProfileInput{
    name: String
    phoneNumber: String
    portFolio: String
    interestedIntern: Boolean
}

type Latest{
    _id: ID!
    title: String!
    description: String!
}

input LatestInput {
    title: String!
    description: String!
}

type RootQuery {
    users(userId: String!) : User
    login(email: String!, password: String!) : AuthData!
    languages: [Language!]!
    skills: [Skill!]!
    reachOuts: [ReachOut!]!
    projects: [Project!]!
    courses: [Course!]!
    jobGivers(userId: String!): Alumni!
    achievements: [Achievement!]!
    positions: [Position!]!
    school: [School!]!
    college: [College!]!
    graduation: [Graduation!]!
    detailsAdditional: [AdditionalDetails!]!
    addresses: [Address!]!
    education : [Education!]!
    profile: [Profile!]!
    latest: [Latest!]!
}

type RootMutation {
    CreateUser(userInput: UserInput): User
    CreateLanguage(languageInput: LanguageInput): Language
    CreateSkill(skillInput: SkillInput): Skill
    CreateReachOut(userId: String!): ReachOut
    CreateProject(projectInput: ProjectInput): Project
    CreateCourse(courseInput: CourseInput): Course
    CreateAlumni(userId: String!): Alumni
    CreateAchievement(achievementInput: AchievementInput): Achievement
    CreatePosition(positionInput: PositionInput): Position
    CreateSchool(userId: String!): School
    CreateCollege(userId: String!): College
    CreateGraduation(userId: String!): Graduation
    CreateAdditionalDetails(additionalDetailsInput: AdditionalDetailsInput): AdditionalDetails
    CreateAddress(userId: String!): Address
    CreateEducation(userId: String!): Education
    CreateProfile(userId: String!): Profile
    CreateLatest(latestInput: LatestInput): Latest

    UpdateAlumni(alumniInput: AlumniInput): Alumni
    UpdateProfile(profileInput: ProfileInput): Profile
    UpdateReachOut(reachOutInput: ReachOutInput): ReachOut
    UpdateAddress(addressInput: AddressInput): Address
    UpdateSchool(schoolInput: SchoolInput): School
    UpdateCollege(collegeInput: CollegeInput): College
    UpdateGraduation(graduationInput: GraduationInput): Graduation
    UpdateEducation(educationInput: EducationInput): Education
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);