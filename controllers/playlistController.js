const PlaylistService = require('../services/playlistService');

class PlaylistController {
  static async getAllPlaylists(req, res) {
    try {
      const playlists = await PlaylistService.getAllPlaylists();
      res.status(200).json(playlists);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  static async getUserPlaylists(req, res) {
    try {
      const userId = res.locals.decodedToken.user_id;
      console.log(userId)
      const playlists = await PlaylistService.getUserPlaylists(userId);
      res.status(200).json(playlists);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getPlaylistById(req, res) {
    try {
      const playlist = await PlaylistService.getPlaylistById(req.params.id);
      if (!playlist) {
        return res.status(404).json({ error: 'Playlist not found' });
      }
      res.status(200).json(playlist);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async createPlaylist(req, res) {
    try {
      const userId = res.locals.decodedToken.user_id;
      const title = req.body.title;
      const playlist = await PlaylistService.createPlaylist(title,userId);
      res.status(201).json(playlist);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updatePlaylist(req, res) {
    try {
      const userId = res.locals.decodedToken.user_id;
      const playlist = await PlaylistService.updatePlaylist(userId,req.params.id, req.body);
      res.status(200).json(playlist);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deletePlaylist(req, res) {
    try {
      const userId = res.locals.decodedToken.user_id;
      await PlaylistService.deletePlaylist(userId,req.params.id);
      res.status(200).json({ message: 'Playlist deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async addMusicToPlaylist(req, res) {
    try {
      const userId = res.locals.decodedToken.user_id;
      await PlaylistService.addMusicToPlaylist(userId, req.params.id, req.body.music_id);
      res.status(200).json({ message: 'Music added to playlist successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async removeMusicFromPlaylist(req, res) {
    try {
      const userId = res.locals.decodedToken.user_id;
      await PlaylistService.removeMusicFromPlaylist(userId, req.params.id, req.params.music_id);
      res.status(200).json({ message: 'Music removed from playlist successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = PlaylistController;
