module.exports = (sequelize, DataTypes) => {
    const MusicUser = sequelize.define('MusicUser', {
      music_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        references: {
          model: 'music',
          key: 'id'
        }
      },
      user_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE
    }, {
      tableName: 'music_user',
      timestamps: false
    });
  
    return MusicUser;
  };
  