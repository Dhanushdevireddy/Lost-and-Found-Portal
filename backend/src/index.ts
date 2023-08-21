import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';
import passport from 'passport';


const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());

interface User {
  id: string;
  username: string;
}

// Serialize user to the session


// Deserialize user from the session
passport.deserializeUser((id, done) => {
  // Fetch the user by ID from your database
  const user: User = {
    id: id as string,
    username: 'exampleUsername', // Replace with actual user data retrieval
  };
  done(null, user);
});


interface ObjectData {
  name: string;
  description: string;
  posterId: number;
  audience: 'EVERYONE' | 'TC' | 'PC';
  resolved?: boolean;
}

interface UserData {
  email: string;
  name?: string;
}

// Create a new object
app.post('/objects', async (req: Request, res: Response) => {
  const objectData: ObjectData = req.body;

  try {
    const newObject = await prisma.object.create({
      data: objectData,
    });
    res.json(newObject);
  } catch (error) {
    console.error('Error creating object:', error);
    res.status(500).json({ error: 'An error occurred while creating the object.' });
  }
});

// Get all objects
app.get('/objects', async (_req: Request, res: Response) => {
  try {
    const objects = await prisma.object.findMany();
    res.json(objects);
  } catch (error) {
    console.error('Error fetching objects:', error);
    res.status(500).json({ error: 'An error occurred while fetching objects.' });
  }
});

// Get a single object by ID
app.get('/objects/:id', async (req: Request, res: Response) => {
  const objectId = parseInt(req.params.id);

  try {
    const object = await prisma.object.findUnique({
      where: { id: objectId },
    });

    if (!object) {
      res.status(404).json({ error: 'Object not found.' });
    } else {
      res.json(object);
    }
  } catch (error) {
    console.error('Error fetching object:', error);
    res.status(500).json({ error: 'An error occurred while fetching the object.' });
  }
});

// Update an object by ID
app.put('/objects/:id', async (req: Request, res: Response) => {
  const objectId = parseInt(req.params.id);
  const objectData: ObjectData = req.body;

  try {
    const updatedObject = await prisma.object.update({
      where: { id: objectId },
      data: objectData,
    });
    res.json(updatedObject);
  } catch (error) {
    console.error('Error updating object:', error);
    res.status(500).json({ error: 'An error occurred while updating the object.' });
  }
});

// Delete an object by ID
app.delete('/objects/:id', async (req: Request, res: Response) => {
  const objectId = parseInt(req.params.id);

  try {
    await prisma.object.delete({
      where: { id: objectId },
    });
    res.json({ message: 'Object deleted successfully.' });
  } catch (error) {
    console.error('Error deleting object:', error);
    res.status(500).json({ error: 'An error occurred while deleting the object.' });
  }
});

app.post('/users', async (req: Request, res: Response) => {
  const userData: UserData = req.body;

  try {
    const newUser = await prisma.user.create({
      data: userData,
    });
    res.json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'An error occurred while creating the user.' });
  }
});

// Get all users
app.get('/users', async (_req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'An error occurred while fetching users.' });
  }
});


// Get a single user by ID
app.get('/users/:id', async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      res.status(404).json({ error: 'User not found.' });
    } else {
      res.json(user);
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'An error occurred while fetching the user.' });
  }
});

// Update a user by ID
app.put('/users/:id', async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const userData: UserData = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: userData,
    });
    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'An error occurred while updating the user.' });
  }
});

// Delete a user by ID
app.delete('/users/:id', async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);

  try {
    await prisma.user.delete({
      where: { id: userId },
    });
    res.json({ message: 'User deleted successfully.' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'An error occurred while deleting the user.' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
