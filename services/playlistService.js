const { Playlist, Music, MusicPlaylist } = require('../models');

class PlaylistService {
  static async getAllPlaylists() {
    return Playlist.findAll({
      order: [['created_at', 'DESC']]
    });
  }

  static async getPlaylistById(id) {
    return Playlist.findByPk(id);
  }

  static async createPlaylist(data) {
    return Playlist.create(data);
  }

  static async updatePlaylist(id, data) {
    const playlist = await Playlist.findByPk(id);
    if (!playlist) {
      throw new Error('Playlist not found');
    }
    return playlist.update(data);
  }

  static async deletePlaylist(id) {
    const playlist = await Playlist.findByPk(id);
    if (!playlist) {
      throw new Error('Playlist not found');
    }
    return playlist.destroy();
  }

  static async addMusicToPlaylist(playlistId, musicId) {
    const playlist = await Playlist.findByPk(playlistId);
    if (!playlist) {
      throw new Error('Playlist not found');
    }
    const music = await Music.findByPk(musicId);
    console.log(music)
    if (!music) {
      throw new Error('Music not found');
    }
    return MusicPlaylist.create({ playlist_id: playlistId, music_id: musicId });
  }

  static async removeMusicFromPlaylist(playlistId, musicId) {
    const record = await MusicPlaylist.findOne({ where: { playlist_id: playlistId, music_id: musicId } });
    if (!record) {
      throw new Error('Record not found');
    }
    return record.destroy();
  }
}

module.exports = PlaylistService;
