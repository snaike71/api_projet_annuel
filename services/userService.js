const { User, Playlist, MusicUser, Role } = require('../models');
const crypto = require('crypto');
const bcrypt = require('bcrypt');

class UserService {
  static async createUser(data) {
    const { name, email, password, role } = data;

    // Vérifiez si le rôle existe
    const _role = await Role.findOne({ where: { name: role } });
    if (!_role) {
      throw new Error('Role not found');
    }

    // Hacher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    const rememberToken = crypto.randomBytes(20).toString('hex');

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role_id: _role.id,
      remember_token: rememberToken,
      created_at: new Date(),
      updated_at: new Date()
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.updated_at,
      role: {
        id: _role.id,
        name: _role.name
      }
    };
  }

  static async getUserById(id) {
    const user = User.findByPk(id, {
      include: [{ model: Playlist }]
    });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  static async updateUser(id, data) {
    const { name, email, password, role } = data;

    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }

    const _role = await Role.findOne({ where: { name: role } });
    if (!_role) {
      throw new Error('Role not found');
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Incorrect password');
    }

    await user.update({
      name,
      email,
      role_id: _role.id,
      updated_at: new Date()
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.updated_at,
      role: {
        id: _role.id,
        name: _role.name
      }
    };
  }

  static async getUserPlaylists(id) {
    return Playlist.findAll({ where: { user_id: id } });
  }

  static async getUserLikedMusic(id) {
    return MusicUser.findAll({ where: { user_id: id }, include: [{ model: Music }] });
  }

  static async addUserLikedMusic(userId, musicId) {
    try {
      const existingEntry = await MusicUser.findOne({ where: { user_id: userId, music_id: musicId } });
      if (existingEntry) {
        throw new Error('Cette musique est déjà dans la liste des favoris');
      }
      
      const result = await MusicUser.create({ user_id: userId, music_id: musicId });
      return result;
    } catch (error) {
      console.error('Error adding liked music:', error);
      throw error;
    }
  }

  static async removeUserLikedMusic(userId, musicId) {
    const record = await MusicUser.findOne({ where: { user_id: userId, music_id: musicId } });
    if (record) {
      return record.destroy();
    }
    throw new Error('Record not found');
  }
}

module.exports = UserService;
