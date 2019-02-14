<?php

/**
 * @class ambbbSearchFormModule
 */
class ambbbSearchFormModule extends FLBuilderModule
{
  public function __construct()
  {
    parent::__construct(array(
      'name'            => __( 'Search Form', 'amb-beaver-basics' ),
      'description'     => __( 'WordPress built-in search form from function `get_search_form()`.', 'amb-beaver-basics' ),
      'group'           => __( 'Beaver Basics', 'amb-beaver-basics' ),
      'category'        => __( 'Basic', 'amb-beaver-basics' ),
      'dir'             => plugin_dir_path( __FILE__ ),
      'url'             => plugins_url( '/', __FILE__ )
    ));
  }
}

// Register the module
FLBuilder::register_module( 'ambbbSearchFormModule', array() );