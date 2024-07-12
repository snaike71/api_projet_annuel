// controllers/UserController.js
const UserService = require('../services/userService');

class UserController {
  static async createUser(req, res) {
    try {
      const user = await UserService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getUserById(req, res) {
    try {
      const user = await UserService.getUserById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updateUser(req, res) {
    try {
      const user = await UserService.updateUser(req.params.id, req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  static async getUserPlaylists(req, res) {
    try {
      const playlists = await UserService.getUserPlaylists(req.params.id);
      res.status(200).json(playlists);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getUserLikedMusic(req, res) {
    try {
      const likedMusic = await UserService.getUserLikedMusic(req.params.id);
      res.status(200).json(likedMusic);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async addUserLikedMusic(req, res) {
    try {
      await UserService.addUserLikedMusic(req.params.id, req.body.music_id);
      res.status(201).json({ message: 'Musique ajoutée à la liste des favoris avec succès' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async removeUserLikedMusic(req, res) {
    try {
      await UserService.removeUserLikedMusic(req.params.id, req.params.music_id);
      res.status(200).json({ message: 'Musique supprimée de la liste des favoris avec succès' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = UserController;
