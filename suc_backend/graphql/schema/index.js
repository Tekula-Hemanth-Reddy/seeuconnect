const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String
    collegeSpecific: String!
    profile: Profile!
}
input UserInput{
    firstName: String!
    lastName: String!
    email: String!
    password: String!
}

type AuthData{
    userId: ID!
    token: String!
    tokenExpiration: Int!
}

type Language {
    _id: ID!
    language: String!
    profile: Profile!
}
input LanguageInput{
    language: String!
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
    companyName: String
    domain: String
    platform: String
}
input AlumniInput {
    companyName: String
    domain: String
    platform: String
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
    state: String!
    city: String!
    location: String!
    pinCode: Float!
    profile: Profile!
}
input AddressInput {
    state: String!
    city: String!
    location: String!
    pinCode: Float!
}

type School {
    _id: ID!
    schoolName: String!
    schoolGrade: Float!
    schoolBoard: String!
    schoolYear: Float!
    education: Education!
}
input SchoolInput {
    schoolName: String!
    schoolGrade: Float!
    schoolBoard: String!
    schoolYear: Float!
    study: String!
}

type College {
    _id: ID!
    collegeName: String!
    collegeGrade: Float!
    collegeCourse: String!
    collegeBoard: String!
    collegeYear: Float!
    education: Education!
}
input CollegeInput {
    collegeName: String!
    collegeGrade: Float!
    collegeCourse: String!
    collegeBoard: String!
    collegeYear: Float!
    study: String!
}

type Graduation {
    _id: ID!
    graduationCollegeName: String!
    graduationCollegeGrade: Float!
    graduationUniversity: String!
    graduationCourse: String!
    graduationStream: String!
    graduationYear: Float!
    education: Education!
}
input GraduationInput {
    graduationCollegeName: String!
    graduationCollegeGrade: Float!
    graduationUniversity: String!
    graduationCourse: String!
    graduationStream: String!
    graduationYear: Float!
    study: String!
}

type Education {
    _id: ID!
    school: School
    college: College
    graduation: Graduation
    profile: Profile!
}
input EducationInput {
    school: String
    college: String
    graduation: String
}

type Profile {
    _id: ID!
    about: String
    phoneNumber: String!
    photo: String
    portFolio: String
    status: Boolean!
    interestedIntern: Boolean!
    strength: Int!
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
    about: String
    phoneNumber: String!
    photo: String
    portFolio: String
    status: Boolean!
    interestedIntern: Boolean!
}

type RootQuery {
    users : [User!]!
    login(email: String!, password: String!) : AuthData!
    languages: [Language!]!
    skills: [Skill!]!
    reachOuts: [ReachOut!]!
    projects: [Project!]!
    courses: [Course!]!
    jobGivers: [Alumni!]!
    achievements: [Achievement!]!
    positions: [Position!]!
    school: [School!]!
    college: [College!]!
    graduation: [Graduation!]!
    detailsAdditional: [AdditionalDetails!]!
    addresses: [Address!]!
    education : [Education!]!
    profile: [Profile!]!
}

type RootMutation {
    CreateUser(userInput: UserInput): User
    CreateLanguage(languageInput: LanguageInput): Language
    CreateSkill(skillInput: SkillInput): Skill
    CreateReachOut(reachOutInput: ReachOutInput): ReachOut
    CreateProject(projectInput: ProjectInput): Project
    CreateCourse(courseInput: CourseInput): Course
    CreateAlumni(alumniInput: AlumniInput): Alumni
    CreateAchievement(achievementInput: AchievementInput): Achievement
    CreatePosition(positionInput: PositionInput): Position
    CreateSchool(schoolInput: SchoolInput): School
    CreateCollege(collegeInput: CollegeInput): College
    CreateGraduation(graduationInput: GraduationInput): Graduation
    CreateAdditionalDetails(additionalDetailsInput: AdditionalDetailsInput): AdditionalDetails
    CreateAddress(addressInput: AddressInput): Address
    CreateEducation(educationInput: EducationInput): Education
    CreateProfile(profileInput: ProfileInput): Profile
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);