module.exports = (sequelize, DataTypes) => {
  const MusicUser = sequelize.define('MusicUser', {
    music_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      references: {
        model: 'Music',
        key: 'id'
      },
      primaryKey: true,
      allowNull: false
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      references: {
        model: 'User',
        key: 'id'
      },
      primaryKey: true,
      allowNull: false
    },
  }, {
    tableName: 'music_user',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  return MusicUser;
};
