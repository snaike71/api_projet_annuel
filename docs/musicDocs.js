/**
 * @swagger
 * components:
 *   schemas:
 *     Music:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *         duration:
 *           type: integer
 *         play_count:
 *           type: integer
 *         release_date:
 *           type: string
 *           format: date
 *         created_at:
 *           type: string
 *           format: date-time
 *         updated_at:
 *           type: string
 *           format: date-time
 * 
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *
 * @swagger
 * tags:
 *   name: Music
 *   description: Music management
 */

/**
 * @swagger
 * /music/search:
 *   get:
 *     summary: Search music
 *     tags: [Music]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Title of the music
 *       - in: query
 *         name: genre
 *         schema:
 *           type: string
 *         description: Genre of the music
 *       - in: query
 *         name: artist
 *         schema:
 *           type: string
 *         description: Artist of the music
 *       - in: query
 *         name: album
 *         schema:
 *           type: string
 *         description: Album of the music
 *     responses:
 *       200:
 *         description: List of music
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Music'
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /music/{id}:
 *   get:
 *     summary: Get music by ID
 *     tags: [Music]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the music
 *     responses:
 *       200:
 *         description: Music data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Music'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Music not found
 */
