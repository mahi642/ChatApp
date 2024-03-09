import User from "../models/user.model.js";
export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filterdusers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password")

    res.status(200).json(filterdusers)
  } catch (error) {
    console.log("error in getUsersForSidebar controller", error.message);

    res.status(400).json({ error: "internal server error" });
  }
};
