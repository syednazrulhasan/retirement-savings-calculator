jQuery( document ).ready(function() {

			/*Calcuator*/
			jQuery('#calculate').click(function(){

				var downpayment         = parseFloat(jQuery('#initialpaymentamount').val());
				var monthlycontribution = parseFloat(jQuery('#monthlycontribution').val());
				var monthlycontaftertax = parseFloat(monthlycontribution) - parseFloat(monthlycontribution*1.5/100 ) ;

				var monthlytax          = monthlycontribution - monthlycontaftertax

				var yrs_of_contribution = parseInt( 65 - jQuery('#age').val());
				var no_of_premium       = yrs_of_contribution * 12 ;
			
				var totalcapitalpaid    = parseInt((no_of_premium * monthlycontribution)) + parseInt(downpayment);
				var yrssubjectofunding  = parseInt(yrs_of_contribution -3 );

				var capital             = (no_of_premium * monthlycontribution)+downpayment

				var premiumcollectionfee= parseFloat(no_of_premium * monthlytax).toFixed(2);


				jQuery('#yrsofcontribution').val(yrs_of_contribution);
				jQuery('#totalcapitalpaid').val(capital);
				jQuery('#yrssubjectofunding').val(yrssubjectofunding);
				jQuery('#premiumcollectionfes').val(premiumcollectionfee);


				console.log('Down Payment:'+downpayment);
				console.log('Monthly Payment:'+monthlycontribution);
				console.log('Monthly Payment After Tax:'+monthlycontaftertax);
				console.log('Monthly Tax:'+monthlytax);
				console.log('Contribution Yrs:'+yrs_of_contribution);
				console.log('Total Months for Premium to be paid:'+no_of_premium);
				console.log('Total Capitl to be paid:'+totalcapitalpaid);
				console.log('Interests Applicable Year:'+yrssubjectofunding);
				console.log('Capital Paid in Total:'+capital);
				console.log('Premium Collection Fee:'+premiumcollectionfee);

				
				let coli         	= parseFloat(0.00);
				let colj         	= parseFloat(0.00);
				const percentage 	= parseFloat(0.00125);
				let previousyrsrec= {};
				var columng 			= [];
				var columnh 			= [];
				var columnj 			= [];


				let accumulatedtotal    = parseFloat(downpayment + monthlycontribution*36 - monthlytax*36).toFixed(2) ; 

				console.log(accumulatedtotal)

				for (let i = 1; i <=  no_of_premium ; i++) {

					if(i<=36){continue;}

					if(i == 37){

						let total         = parseFloat(accumulatedtotal) + parseFloat(monthlycontribution) - parseFloat(monthlytax); 
						let interest      = parseFloat(total) * parseFloat(Math.pow(1 + (9 / 100), 1 / 12) - 1 ) ;
						let annualmgmtfee = parseFloat(interest) * 0.125/100 ; 

						// console.log("Accumulated after "+i+'month ='+total.toFixed(4))
						// console.log("Interest after "+i+'month ='+interest.toFixed(4))
						// console.log("Annual Fee "+i+'month for '+interest.toFixed(4)+' ='+annualmgmtfee.toFixed(4))
						// console.log("_________________________________________");


						previousyrsrec["capital"]  = total;
						previousyrsrec["premium"]  = monthlycontribution;
						previousyrsrec["interest"] = interest;
						previousyrsrec["i"]        = interest;
						previousyrsrec["premiumfee"]  = annualmgmtfee.toFixed(4);

						columnh.push( parseFloat( interest.toFixed(4) ) ); 
						columnj.push( parseFloat( annualmgmtfee.toFixed(4) ) ); 
						// console.log(previousyrsrec);


					}
					else{

						let total            = parseFloat(previousyrsrec["capital"]) + parseFloat(previousyrsrec["interest"])  + parseFloat(monthlycontribution)
						 - parseFloat(monthlytax) - parseFloat(previousyrsrec["premiumfee"])  ; 


						// console.log(total);

						let interest         = parseFloat(total) *  parseFloat(Math.pow(1 + (9 / 100), 1 / 12) - 1)  ;

						// console.log(interest);

						// console.log("prevyear"+previousyrsrec["interest"])

						let accumulatedintrst= parseFloat(previousyrsrec["i"]) + interest; 

						// console.log(accumulatedintrst);

						let annualmgmtfee    = parseFloat(accumulatedintrst.toFixed(4)) * 0.125/100 ; 

						// console.log(annualmgmtfee);

						// console.log(annualmgmtfee);
						// console.log("Accumulated after "+i+'month ='+total.toFixed(4))
						// console.log("Interest after "+i+'month  ='+interest.toFixed(4))
						// console.log("Annual Fee "+i+'month for '+accumulatedintrst.toFixed(4) +' ='+annualmgmtfee.toFixed(4))
						// console.log("_________________________________________");


						 previousyrsrec["capital"]  = total;
						 previousyrsrec["premium"]  = monthlycontribution;
						 previousyrsrec["interest"] = interest;
						 previousyrsrec["i"]        = accumulatedintrst;
						 previousyrsrec["premiumfee"] = annualmgmtfee;
						

						columnh.push( parseFloat( interest.toFixed(4) ) ); 
						columnj.push( parseFloat( annualmgmtfee.toFixed(4) ) ); 

						// console.log(previousyrsrec);

					}

					

				}


				let sumofhs = columnh.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
				let sumofjs = columnj.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

				jQuery('#grossinterestsearned').val(sumofhs.toFixed(4));
				jQuery('#annualmanagementfees').val(sumofjs.toFixed(4));


				let interest_nets_acquis = parseFloat(sumofhs.toFixed(4)) - parseFloat(sumofjs.toFixed(4)) - parseFloat(premiumcollectionfee) ;

				jQuery('#net_intersts_earned').val(interest_nets_acquis);

				let retirementcapital   = interest_nets_acquis + capital ; 

				jQuery('#retirementcapital').val(retirementcapital);
				


		});
		/*Calcuator*/


		/*DatePicker*/
		jQuery('#datepicker').datepicker({
		    format: 'dd/mm/yyyy', // Specify the desired date format
		    autoclose: true      // Close the date picker when a date is selected
		 });
		jQuery('#datepicker').datepicker('setDate', new Date());
		/*Datepicker*/

		});