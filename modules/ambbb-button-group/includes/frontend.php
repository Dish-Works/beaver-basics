<?php
// receives:
// - $module
// - $id
// - $settings
?>

<?php if ( !empty( $settings->buttons ) ) : ?>
  <div class="<?= esc_attr( $module->classes() ); ?>">
    <?php foreach( $settings->buttons as $button ) : ?>
      <?php  if (
        !empty( $button->link_url )
        && !empty( $button->link_text )
      ) : ?>
        <a href="<?= esc_attr( $button->link_url ); ?>" target="<?= esc_attr( $button->link_url_target ); ?>" class="<?= esc_attr( $module->classes( 'button', $button ) ); ?>">
          <?= $module->escInlineHtml( $button->link_text ); ?>
        </a>
      <?php endif;  ?>
    <?php endforeach; ?>
  </div>
<?php endif; ?>