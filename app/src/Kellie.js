// Endpoint for user registration
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    
    // Check if the email is already registered
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered' });
    }
    
    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      
      // Create a new user object
      const newUser = {
        id: users.length + 1,
        username,
        email,
        password: hashedPassword,
        points: 0 // Assuming new users start with 0 points
      };
      
      // Add the new user to the users array (or save to database)
      users.push(newUser);
      
      res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  