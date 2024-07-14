/**
 * @swagger
 * components:
 *   schemas:
 *     Album:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *         artist_id:
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
 *   name: Albums
 *   description: Album management
 */

/**
* @swagger
* /albums:
*   get:
*     summary: Get all albums with pagination
*     tags: [Albums]
*     security:
*       - bearerAuth: []
*     parameters:
*       - in: query
*         name: page
*         schema:
*           type: integer
*         description: Page number for pagination
*       - in: query
*         name: limit
*         schema:
*           type: integer
*         description: Number of items per page
*     responses:
*       200:
*         description: The list of albums
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/Album'
*       401:
*         description: Unauthorized
*       400:
*         description: Bad request
*/

/**
 * @swagger
 * /albums/{id}:
 *   get:
 *     summary: Get album by ID
 *     tags: [Albums]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The album ID
 *     responses:
 *       200:
 *         description: Album data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Album'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Album not found
 */

/**
 * @swagger
 * /albums/{id}/music:
 *   get:
 *     summary: Get music by album ID
 *     tags: [Albums]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The album ID
 *     responses:
 *       200:
 *         description: The list of music in the album
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Music'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Album not found
 */
