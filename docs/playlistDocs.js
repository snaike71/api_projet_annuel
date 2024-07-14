/**
 * @swagger
 * components:
 *   schemas:
 *     Playlist:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *         user_id:
 *           type: integer
 *         created_at:
 *           type: string
 *           format: date-time
 *         updated_at:
 *           type: string
 *           format: date-time
 *       example:
 *         id: 1
 *         title: "Relaxing Vibes"
 *         user_id: 1
 *         created_at: "2024-07-12T07:11:02.000Z"
 *         updated_at: "2024-07-12T07:11:02.000Z"
 *
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *
 * @swagger
 * tags:
 *   name: Playlists
 *   description: Playlist management
 */

/**
 * @swagger
 * /playlists:
 *   get:
 *     summary: Get all playlists
 *     tags: [Playlists]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: The list of playlists
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Playlist'
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /playlists/user:
 *   get:
 *     summary: Get all playlists of the authenticated user
 *     tags: [Playlists]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: The list of user's playlists
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Playlist'
 *               example:
 *                 - id: 1
 *                   title: "teste2"
 *                   user_id: 1
 *                   created_at: "2024-07-12T07:11:02.000Z"
 *                   updated_at: "2024-07-12T07:11:02.000Z"
 *                 - id: 2
 *                   title: "Relaxing Vibes"
 *                   user_id: 1
 *                   created_at: "2024-07-12T07:11:02.000Z"
 *                   updated_at: "2024-07-12T07:11:02.000Z"
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /playlists/{id}:
 *   get:
 *     summary: Get playlist by ID
 *     tags: [Playlists]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The playlist ID
 *     responses:
 *       200:
 *         description: Playlist data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Playlist'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Playlist not found
 */

/**
 * @swagger
 * /playlists:
 *   post:
 *     summary: Create a new playlist
 *     tags: [Playlists]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *     responses:
 *       201:
 *         description: Playlist created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Playlist'
 *       401:
 *         description: Unauthorized
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /playlists/{id}:
 *   put:
 *     summary: Update playlist by ID
 *     tags: [Playlists]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The playlist ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *     responses:
 *       200:
 *         description: Playlist updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Playlist'
 *       401:
 *         description: Unauthorized
 *       400:
 *         description: Bad request
 *       404:
 *         description: Playlist not found
 */

/**
 * @swagger
 * /playlists/{id}:
 *   delete:
 *     summary: Delete playlist by ID
 *     tags: [Playlists]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The playlist ID
 *     responses:
 *       200:
 *         description: Playlist deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Playlist deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Playlist not found
 */

/**
 * @swagger
 * /playlists/{id}/music:
 *   post:
 *     summary: Add music to playlist
 *     tags: [Playlists]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The playlist ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               music_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Music added successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Playlist or music not found
 */

/**
 * @swagger
 * /playlists/{id}/music/{music_id}:
 *   delete:
 *     summary: Remove music from playlist
 *     tags: [Playlists]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The playlist ID
 *       - in: path
 *         name: music_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The music ID
 *     responses:
 *       200:
 *         description: Music removed successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Playlist or music not found
 */
