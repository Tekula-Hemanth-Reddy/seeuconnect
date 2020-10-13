const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type User {
    _id: ID!
    firstName: String!
    secondName: String!
    email: String!
    password: String
}
input UserInput{
    firstName: String!
    secondName: String!
    email: String!
    password: String!
}

type Language {
    _id: ID!
    language: String!
}
input LanguageInput{
    language: String!
}

type Skill {
    _id: ID!
    skill: String!
}
input SkillInput{
    skill: String!
}

type ReachOut {
    _id: ID!
    gitHub: String
    linkedIn: String
    instagram: String
    faceBook: String
    twitter: String
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
    projectDescription: String!
    projectUrl: String!
}
input ProjectInput{
    projectName: String!
    projectDescription: String!
    projectUrl: String!
}

type Course {
    _id: ID!
    courseName: String!
    specialization: String!
    certificate: String!
    credentials: String!
}
input CourseInput{
    courseName: String!
    specialization: String!
    certificate: String!
    credentials: String!
}

type Alumni{
    _id: ID!
    companyName: String!
    domain: String!
    platform: String!
}
input AlumniInput {
    companyName: String!
    domain: String!
    platform: String!
}

type Achievement {
    _id: ID!
    title: String!
    achievementDescription: String
    certificate: String!
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
}
input PositionInput {
    positionHeld: String!
    companyName: String
    positionDescription: String
    startDate: String!
    endDate: String!
}

type School {
    _id: ID!
    schoolName: String!
    schoolGrade: Float!
    schoolBoard: String!
    schoolYear: Float!
}
input SchoolInput {
    schoolName: String!
    schoolGrade: Float!
    schoolBoard: String!
    schoolYear: Float!
}

type College {
    _id: ID!
    collegeName: String!
    collegeGrade: Float!
    collegeCourse: String!
    collegeBoard: String!
    collegeYear: Float!
}
input CollegeInput {
    collegeName: String!
    collegeGrade: Float!
    collegeCourse: String!
    collegeBoard: String!
    collegeYear: Float!
}

type Graduation {
    _id: ID!
    graduationCollegeName: String!
    graduationCollegeGrade: Float!
    graduationUniversity: String!
    graduationCourse: String!
    graduationStream: String!
    graduationYear: Float!
}
input GraduationInput {
    graduationCollegeName: String!
    graduationCollegeGrade: Float!
    graduationUniversity: String!
    graduationCourse: String!
    graduationStream: String!
    graduationYear: Float!
}

type AdditionalDetails {
    _id: ID!
    detailsDescription: String!
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
}
input AddressInput {
    state: String!
    city: String!
    location: String!
    pinCode: Float!
}

type RootQuery {
    users : [User!]!
    languages: [Language!]!
    skills: [Skill!]!
    reachOuts: [ReachOut!]!
    projects: [Project!]!
    courses: [Course!]!
    jobGivers: [Alumni!]!
    achievements: [Achievement!]!
    positions: [Position!]!
    schools(schoolId: ID): School
    colleges(collegeId: ID): College
    graduationCollege(graduationId: ID): Graduation
    detailsAdditional(detailsId: ID): AdditionalDetails
    addresses(addressId: ID): Address
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
    createPosition(positionInput: PositionInput): Position
    CreateSchool(schoolInput: SchoolInput): School
    CreateCollege(collegeInput: CollegeInput): College
    CreateGraduation(graduationInput: GraduationInput): Graduation
    CreateAdditionalDetails(additionalDetailsInput: AdditionalDetailsInput): AdditionalDetails
    CreateAddress(addressInput: AddressInput): Address
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);