const User = require("../models/user.model");

async function handleGetAllUser(req, res) {
  try {
    const users = await User.find();
    if (users.length > 0) {
      return res.json(users);
    } else {
      return res.json({ message: "No user exists" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
}

async function handleCreateUser(req, res) {
  try {
    const { first_name, last_name, email, age, job_title } = req.body;

    // check if all fields are required
    if (!first_name || !last_name || !email || !age || !job_title) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // check existing User
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exist" });
    }

    const newUser = new User({
      first_name,
      last_name,
      email,
      age,
      job_title,
    });

    const result = await newUser.save();

    if (result) {
      res.status(201).json({ message: "User created successfully" });
    }
  } catch (error) {
    res.status().res.json("error: ", error);
  }
}

async function handleGetUserById(req, res) {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(400).json({ message: "No user exists" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function handleUpdateUserById(req, res) {
  const { id } = req.params;
  const userUpdates = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { $set: userUpdates },
      { new: true, runValidators: true }
    );
    if (user) {
      res.status(201).json(user);
    } else {
      res.status(400).json({ message: "No user found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function handleDeleteUserById(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    if (user) {
      res.status(200).json({ message: "User deleted" });
    } else {
      res.status(400).json({ message: "User knot found" });
    }
  } catch (error) {
    res.status(500).json("Internal server error");
  }
}

module.exports = {
  handleGetAllUser,
  handleCreateUser,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
};
