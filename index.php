<?php
/**
* Plugin Name: Retirement Calculator
* Plugin URI: https://www.your-site.com/
* Description: This is a retirement benifit calculator.
* Version: 1.0
* Author: your-name
* Author URI: https://www.your-site.com/
**/

if (!defined('ABSPATH')) {
    // If accessed directly, exit or redirect to another page
    exit;
}


// register_activation_hook(__FILE__, 'custom_database_plugin_activation');

// function custom_database_plugin_activation() {
//     global $wpdb;

//     $table_name = $wpdb->prefix . 'custom_data';

//     $charset_collate = $wpdb->get_charset_collate();

//     $sql = "CREATE TABLE $table_name (
//         id mediumint(9) NOT NULL AUTO_INCREMENT,
//         name varchar(100) NOT NULL,
//         email varchar(100) NOT NULL,
//         date datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
//         PRIMARY KEY  (id)
//     ) $charset_collate;";

//     require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
//     dbDelta($sql);
// }

function retirement_calculator_scripts(){

    $plugin_url = plugin_dir_url(__FILE__);

    wp_enqueue_style('calcul', $plugin_url . 'css/style.css', array(), '1.0', 'all');
    wp_enqueue_style('bs','https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css');

	// JS
    wp_enqueue_script('bs','https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js',array('jquery'));
    wp_enqueue_script('bsdp','https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js',array('jquery'));

    wp_enqueue_script('mainjs',$plugin_url.'js/main.js' );

}
add_action( 'wp_enqueue_scripts','retirement_calculator_scripts');



add_shortcode('calculator','retirement_calculator_code');
function retirement_calculator_code(){


    return '<section>
        <div class="calculator_container container">
            <div class="calc-heading text-center">
              <h3>Rapport de Cotisation au Programme iPRO Etoile</h3> 
            </div>


                <div class="panel_one">
                    <div class="form-group">
                        <label for="datepicker">Date</label>
                        <input class="form-control"  type="text" name="date" id="datepicker">
                    </div>

                    <div class="form-group">
                        <label>Nom</label>
                        <input class="form-control"  type="text" name="date">
                    </div>

                    <div class="form-group">
                        <label>Age</label>
                        <input class="form-control"  type="text" name="date" id="age" value="55">   
                    </div>

                    <div class="form-group">
                        <label>Montant versement initial €<span class="hide">[Initial payment amount]</span></label>
                        <input class="form-control"  type="text" name="date" id="initialpaymentamount" value="6000">    
                    </div>

                    <div class="form-group">
                        <label>Montant de la mensualité €<span class="hide">[Monthly Payment]</span></label>
                        <input class="form-control"  type="text" name="date" id="monthlycontribution" value="120">  
                    </div>

                </div>
                <div class="form-group">
                    <button type="button" class="btn calc-btn" id="calculate">Lancer la simulation</button>
                </div>

                    <div class="panel_two">

                        <div class="form-group">
                            <label>Nombre d\'années de cotisation au programme iPRO Etoile <span class="hide">[Yrs of Contribution ]</span>  </label>
                            <span>années</span>
                            <input class="form-control"  type="text" name="date" id="yrsofcontribution">    
                        </div>


                        <div class="form-group">
                            <label>Montant du capital versé par le client sur la période <span class="hide">[Amount of capital paid by the client over the period]</span>   </label>
                            <span>€</span>
                            <input class="form-control"  type="text" name="date" id="totalcapitalpaid">
                        </div>

                        <div class="form-group">
                            <label>Nombre d\'années soumises à  capitalisation    <span class="hide">[No of Years]</span></label>
                            <span>années</span>
                            <input class="form-control"  type="text" name="date" id="yrssubjectofunding">
                        </div>


                        <div class="form-group">
                            <label>Frais de recouvrement des primes périodiques  <span class="hide">[Periodic premium collection fees]</span></label>
                            <span>€</span>
                            <input class="form-control"  type="text" name="date" id="premiumcollectionfes">
                        </div>                      


                        <div class="form-group">
                            <label>Frais  annuels de gestion € <span class="hide">[Annual management fees]</span></label>
                            <span>€</span>
                            <input class="form-control"  type="text" name="date" id="annualmanagementfees"> 
                        </div>


                        <div class="form-group">
                            <label>Intérêts bruts acquis € <span class="hide">[Gross interest earned]</span></label>
                            <span>€</span>
                            <input class="form-control"  type="text" name="date" id="grossinterestsearned">
                        </div>

                        <div class="form-group">
                            <label>Intérêts nets acquis € <span class="hide">[Net interest earned]</span></label>
                            <span>€</span>
                            <input class="form-control"  type="text" name="date" id="net_intersts_earned">
                        </div>

                        <div class="form-group">
                            <label>Capital de départ à la retraite € <span class="hide">[Retirement capital]</span></label>
                            <span>€</span>
                            <input class="form-control"  type="text" name="date" id="retirementcapital">
                        </div>  
                    </div>
        </div>
    </section>';



}