CREATE DATABASE IF NOT EXISTS `test`;

USE `test`;

-- Create roles table

CREATE TABLE `roles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` enum('admin','user') COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table artists
# ------------------------------------------------------------

CREATE TABLE `artists` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


# Dump of table albums
# ------------------------------------------------------------

CREATE TABLE `albums` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `artist_id` bigint unsigned NOT NULL,
  `release_date` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `albums_artist_id_foreign` (`artist_id`),
  CONSTRAINT `albums_artist_id_foreign` FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


# Dump of table genres
# ------------------------------------------------------------

CREATE TABLE `genres` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table music
# ------------------------------------------------------------

CREATE TABLE `music` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `duration` bigint NOT NULL,
  `play_count` bigint NOT NULL DEFAULT '0',
  `release_date` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `file_path` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


# Dump of table subscriptions
# ------------------------------------------------------------

CREATE TABLE `subscriptions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` enum('free','standard','premium','lifetime') COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table users
# ------------------------------------------------------------

CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role_id` bigint unsigned NOT NULL DEFAULT '2',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  KEY `users_role_id_foreign` (`role_id`),
  CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table playlists
# ------------------------------------------------------------

CREATE TABLE `playlists` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `playlists_user_id_foreign` (`user_id`),
  CONSTRAINT `playlists_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;




# Dump of table album_music
# ------------------------------------------------------------

CREATE TABLE `album_music` (
  `album_id` bigint unsigned NOT NULL,
  `music_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`album_id`,`music_id`),
  KEY `album_music_music_id_foreign` (`music_id`),
  CONSTRAINT `album_music_album_id_foreign` FOREIGN KEY (`album_id`) REFERENCES `albums` (`id`) ON DELETE CASCADE,
  CONSTRAINT `album_music_music_id_foreign` FOREIGN KEY (`music_id`) REFERENCES `music` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;





# Dump of table artist_music
# ------------------------------------------------------------

CREATE TABLE `artist_music` (
  `artist_id` bigint unsigned NOT NULL,
  `music_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`artist_id`,`music_id`),
  KEY `artist_music_music_id_foreign` (`music_id`),
  CONSTRAINT `artist_music_artist_id_foreign` FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`) ON DELETE CASCADE,
  CONSTRAINT `artist_music_music_id_foreign` FOREIGN KEY (`music_id`) REFERENCES `music` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;




# Dump of table genre_music
# ------------------------------------------------------------

CREATE TABLE `genre_music` (
  `genre_id` bigint unsigned NOT NULL,
  `music_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`genre_id`,`music_id`),
  KEY `genre_music_music_id_foreign` (`music_id`),
  CONSTRAINT `genre_music_genre_id_foreign` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`) ON DELETE CASCADE,
  CONSTRAINT `genre_music_music_id_foreign` FOREIGN KEY (`music_id`) REFERENCES `music` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;






# Dump of table music_playlist
# ------------------------------------------------------------

CREATE TABLE `music_playlist` (
  `music_id` bigint unsigned NOT NULL,
  `playlist_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`music_id`,`playlist_id`),
  KEY `music_playlist_playlist_id_foreign` (`playlist_id`),
  CONSTRAINT `music_playlist_music_id_foreign` FOREIGN KEY (`music_id`) REFERENCES `music` (`id`) ON DELETE CASCADE,
  CONSTRAINT `music_playlist_playlist_id_foreign` FOREIGN KEY (`playlist_id`) REFERENCES `playlists` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table music_user
# ------------------------------------------------------------

CREATE TABLE `music_user` (
  `music_id` bigint unsigned NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`music_id`,`user_id`),
  KEY `music_user_user_id_foreign` (`user_id`),
  CONSTRAINT `music_user_music_id_foreign` FOREIGN KEY (`music_id`) REFERENCES `music` (`id`) ON DELETE CASCADE,
  CONSTRAINT `music_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;





# Dump of table subscription_user
# ------------------------------------------------------------

CREATE TABLE `subscription_user` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `subscription_id` bigint unsigned NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `subscription_user_user_id_foreign` (`user_id`),
  KEY `subscription_user_subscription_id_foreign` (`subscription_id`),
  CONSTRAINT `subscription_user_subscription_id_foreign` FOREIGN KEY (`subscription_id`) REFERENCES `subscriptions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `subscription_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insertion des données de test pour l'environnement de développement

-- Insertion des rôles
INSERT INTO roles (name) VALUES ('admin'), ('user');

-- Insertion des utilisateurs
INSERT INTO users (name, email, password, email_verified_at, role_id, created_at, updated_at) VALUES
('John Doe', 'john.doe@example.com', '$2b$10$/x5iuDH8zFZ04Kg4uD34cOZKfyNapjfppNMbjHj4q0DnxQ6EjyGom', '2023-01-01 00:00:00', 1, NOW(), NOW()),
('Jane Smith', 'jane.smith@example.com', '$2b$10$RNPMbvDBEjRiwk3CU7CgI.YWRsYJXABdhyp3mLP/x0l9.sRS56/Om', '2023-01-02 00:00:00', 2, NOW(), NOW());

-- Insertion des genres
INSERT INTO genres (name, description, created_at, updated_at) VALUES
('Rock', 'A genre of popular music that originated as "rock and roll" in the United States.', NOW(), NOW()),
('Jazz', 'A music genre that originated in the African-American communities of New Orleans.', NOW(), NOW()),
('Classical', 'Art music produced or rooted in the traditions of Western culture.', NOW(), NOW()),
('Pop', 'A popular music genre that combines elements of rock, soul, and dance.', NOW(), NOW()),
('Hip Hop', 'A music genre that developed from African American and Latino communities in the United States.', NOW(), NOW()),
('Country', 'A genre of popular music that originated in the United States and Canada.', NOW(), NOW());

-- Insertion des artistes
INSERT INTO artists (name, created_at, updated_at) VALUES
('Artist One', NOW(), NOW()),
('Artist Two', NOW(), NOW()),
('Artist Three', NOW(), NOW()),
('Artist Four', NOW(), NOW());

-- Insertion des albums
INSERT INTO albums (title, artist_id, release_date, created_at, updated_at) VALUES
('Album One', 1, '2023-01-01 00:00:00', NOW(), NOW()),
('Album Two', 2, '2023-01-02 00:00:00', NOW(), NOW()),
('Album Three', 3, '2023-01-03 00:00:00', NOW(), NOW()),
('Album Four', 4, '2023-01-04 00:00:00', NOW(), NOW());

-- Insertion de la musique
INSERT INTO music (title, duration, play_count, release_date, created_at, updated_at, file_path) VALUES
('Song One', 210, 100, '2023-01-01 00:00:00', NOW(), NOW(), '/path/to/song1'),
('Song Two', 180, 200, '2023-01-02 00:00:00', NOW(), NOW(), '/path/to/song2'),
('Song Three', 240, 150, '2023-01-03 00:00:00', NOW(), NOW(), '/path/to/song3'),
('Song Four', 220, 180, '2023-01-04 00:00:00', NOW(), NOW(), '/path/to/song4');

-- Insertion des playlists
INSERT INTO playlists (title, user_id, created_at, updated_at) VALUES
('My Favorite Songs', 1, NOW(), NOW()),
('Relaxing Vibes', 1, NOW(), NOW()),
('Party Hits', 2, NOW(), NOW()),
('Late Night Chill', 2, NOW(), NOW());

-- Lien entre musique et albums
INSERT INTO album_music (album_id, music_id) VALUES
(1, 1), -- 'Song One' is in 'Album One'
(2, 2), -- 'Song Two' is in 'Album Two'
(3, 3), -- 'Song Three' is in 'Album Three'
(4, 4); -- 'Song Four' is in 'Album Four'

-- Lien entre musique et artistes
INSERT INTO artist_music (artist_id, music_id) VALUES
(1, 1), -- 'Song One' is by 'Artist One'
(2, 2), -- 'Song Two' is by 'Artist Two'
(3, 3), -- 'Song Three' is by 'Artist Three'
(4, 4); -- 'Song Four' is by 'Artist Four'

-- Lien entre musique et genres
INSERT INTO genre_music (genre_id, music_id) VALUES
(1, 1), -- 'Song One' is of genre 'Rock'
(2, 2), -- 'Song Two' is of genre 'Jazz'
(3, 3), -- 'Song Three' is of genre 'Pop'
(6, 4); -- 'Song Four' is of genre 'Country'

-- Lien entre playlists et musique
INSERT INTO music_playlist (music_id, playlist_id) VALUES
(1, 1), -- 'Song One' is in the playlist 'My Favorite Songs'
(2, 2), -- 'Song Two' is in the playlist 'Relaxing Vibes'
(3, 3), -- 'Song Three' is in the playlist 'Party Hits'
(4, 4); -- 'Song Four' is in the playlist 'Late Night Chill'

-- Musique aimée par les utilisateurs
INSERT INTO music_user (music_id, user_id) VALUES
(1, 1), -- 'John Doe' likes 'Song One'
(2, 1), -- 'John Doe' likes 'Song Two'
(3, 2), -- 'Jane Smith' likes 'Song Three'
(4, 2); -- 'Jane Smith' likes 'Song Four'

-- Insertion des abonnements
INSERT INTO subscriptions (name, price) VALUES
('free', 0), ('standard', 9.99), ('premium', 14.99), ('lifetime', 99.99);

-- Lien entre utilisateurs et abonnements
INSERT INTO subscription_user (user_id, subscription_id, start_date, end_date) VALUES
(1, 3, '2024-01-01 00:00:00', '2025-01-01 00:00:00'); -- 'John Doe' has a 'premium' subscription