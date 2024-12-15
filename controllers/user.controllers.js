import User from "../models/users.models"; // Ensure correct import

const registerUser = async (req, res) => {
  try {
    const { name, phone, email, image } = req.body;

    // Validate input fields
    if ([name, phone, email, image].some((field) => field?.trim() === "")) {
      return res
        .status(400)
        .json({ error: "All fields are required." });
    }

    // Check if the user already exists by email or phone
    const existedUser = await User.findOne({ email });
    if (existedUser) {
      return res
        .status(409) // Conflict
        .json({ error: "User already exists." });
    }

    // Create a new user
    const newUser = new User({
      name,
      phone,
      email,
      image,
    });

    // Save the user to the database
    await newUser.save();

    // Respond with success
    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while registering the user." });
  }
};

export default registerUser;
