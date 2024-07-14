const { Playlist, Music, MusicPlaylist } = require('../models');

class PlaylistService {
  static async getAllPlaylists() {
    return Playlist.findAll({
      order: [['created_at', 'DESC']]
    });
  }
  static async getUserPlaylists(userId) {
    return Playlist.findAll({
      where: { user_id: userId },
      order: [['created_at', 'DESC']]
    });
  }

  static async getPlaylistById(id) {
    return Playlist.findByPk(id);
  }

  static async createPlaylist(title,user_id) {
    return Playlist.create({title, user_id});
  }

  static async updatePlaylist(userId,id, data) {
    const playlist = await Playlist.findByPk(id);
    if (!playlist) {
      throw new Error('Playlist not found');
    }
    if (playlist.user_id !== userId) {
      throw new Error('You are not authorized to update this playlist');
    }
    return playlist.update(data);
  }

  static async deletePlaylist(userId,id) {
    const playlist = await Playlist.findByPk(id);
    if (!playlist) {
      throw new Error('Playlist not found');
    }
    if (playlist.user_id !== userId) {
      throw new Error('You are not authorized to delete this playlist');
    }
    return playlist.destroy();
  }

  static async addMusicToPlaylist(userId, playlistId, musicId) {
    const playlist = await Playlist.findByPk(playlistId);
    if (!playlist) {
      throw new Error('Playlist not found');
    }
    const music = await Music.findByPk(musicId);
    if (!music) {
      throw new Error('Music not found');
    }
    if (playlist.user_id !== userId) {
      throw new Error('You are not authorized to add music to this playlist');
    }
    return MusicPlaylist.create({ playlist_id: playlistId, music_id: musicId });
  }

  static async removeMusicFromPlaylist(userId, playlistId, musicId) {
    const record = await MusicPlaylist.findOne({ where: { playlist_id: playlistId, music_id: musicId } });
    console.log(record)
    if (!record) {
      throw new Error('Record not found');
    }
    const playlist = await Playlist.findByPk(playlistId);
    if (playlist.user_id !== userId) {
      throw new Error('You are not authorized to delete music to this playlist');
    }
    return record.destroy();
  }
}

module.exports = PlaylistService;
