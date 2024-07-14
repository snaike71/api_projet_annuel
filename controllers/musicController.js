const MusicService = require("../services/musicService")

class MusicController {
  static async searchMusic(req, res) {
    try {
      const criteria = req.query;
      const results = await MusicService.searchMusic(criteria);
      res.status(200).json(results);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  static async getMusicById(req, res) {
    try {
      const music = await MusicService.getMusicById(req.params.id);
      if (!music) {
        return res.status(404).json({ error: 'Music not found' });
      }
      res.status(200).json(music);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = MusicController;
