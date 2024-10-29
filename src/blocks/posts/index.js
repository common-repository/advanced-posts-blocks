/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
/**
 * Internal dependencies
 */
import edit from './Edit';
import { __ } from '@wordpress/i18n';

import metadata from './block.json';

const { name, supports, category, icon } = metadata;
const title = __( 'Multiple Posts', 'advanced-posts-blocks' );

registerBlockType( name, {
	supports,
	category,
	title: `${ title } (Advanced Posts Blocks)`,
	description: __( 'Display multiple posts.', 'advanced-posts-blocks' ),
	keywords: [
		'multiple posts',
		__( 'multiple posts', 'advanced-posts-blocks' ),
	],
	icon,
	edit,
	save() {
		return null;
	},
} );
