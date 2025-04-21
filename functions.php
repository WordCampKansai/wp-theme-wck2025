<?php
/**
 * Components functions and definitions.
 *
 * @package wckansai2025
 */

/**
 * Add stylesheets.
 */
add_action( 'wp_enqueue_scripts', function () {
	wp_enqueue_style(
		'wckansai2025-style',
		get_stylesheet_directory_uri() . '/assets/css/main.css',
		array( 'twentytwentyfive-style' )
	);
} );
