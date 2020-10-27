const Project = require('../../models/project');
const Profile = require('../../models/profile');
const { profileInfo } = require('./_merge');

module.exports = {
    //projects
    projects : async () => {
        // if (!req.isAuth) {
        //     throw new Error("Unauthenticated");
        // }
        // const pId = await User.findById(req.userId);
        try {
            const projects = await Project.find();
            // const projects = await Project.find({profileId: {$in: pId.profileId}});
            return projects.map(result => {
                return { ...result._doc, _id: result._doc._id.toString(),
                    profile: profileInfo.bind(this,result._doc.profileId)
                };
            });
        } catch (err) {
            throw err;
        }
    },

    CreateProject : async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated");
        }
        const pId = await User.findById(req.userId);
        const works = new Project({
            projectName: args.projectInput.projectName,
            projectDescription: args.projectInput.projectDescription,
            projectUrl: args.projectInput.projectUrl,
            projectDemo: args.projectInput.projectDemo,
            profileId: pId.profileId,
        });
        try {
            const result = await works.save();
            const profile = await Profile.findById(result._doc.profileId);
            profile.projectId.push(result.id);
            await profile.save();
            return { ...result._doc, _id: result._doc._id.toString(),
                profile: profileInfo.bind(this,result._doc.profileId)
            };
        } catch (err) {
            throw err;
        }
    }
};