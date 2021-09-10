//Holds mortage bond details and returns time value of money calculations.
class Mortgage{
   
   mortgageOption = "Enter a name for this option"

   //The names of n, i, pv, pmt and fv are universal in the finance world.
   //For ease of parsing the code we will use them here. Other names will follow
   //coding convention.

   //n stands for the number of periods of time. 
   //Commerically speaking, most housing bonds are paid monthly.
   n = 0;

   //i stands for the interest rate per time period.
   //Typically, banks quote using an a so called 'APR' which 
   //can simply be divided by 12 to get this rate.
   //If the quoted rate is the 'Effective Rate' then you need to work backwards.
   //Commerically speaking, most housing bonds are paid monthly.
   i = 0.00;

   //pv stands for the present value of the bond. 
   //This is another way of saying the price of the property including all costs paid by the bank.
   pv = 0;
   
   //pmt stand for the payment per period to pay off the bond in the contracted time.
   pmt = 0;

   //fv stands for the future value of the bond. For most housing bonds this is zero as the bond
   //paid off on the final payment. It is possible the bond must be refinanced or the owner must make 
   //a balloon payment then fv will not be zero.
   fv = 0;

   //Are bond payments tax deductible
   taxDeductable = false;

   //The deposit you have to invest.
   deposit = 0;

   //Agents commision, taxes and other buying costs - although paid by the seller this must 
   //not be considered as part of the value of the house 

   //The alternative cost of renting
   rent = 0;

   //If you rent and save up - the interest earned
   interestRateEarnedOnSavings = 0.00;

   //The cost of insuring a house (not contents).
   insuranceCostPerAnnum = 0;

   //Maintenance cost of a house regular upkeep;
   maintenanceCostPerAnnum = 0;

   //Property taxes
   propertyTaxesPerAnnum = 0;

   //Other adjustments per annum.
   //e.g. house may be closer to work meaning less travel costs or vice versa.
   adustmentAnnualCost = 0;

   //Long term expected inflation rate - the central bank normally are open about this.
   inflationLongTermExpectation = 0.00;
}

// There are two mortgage options
// We will call them m1 and m2 to keep code short.
m1 = new Mortgage();
m2 = new Mortgage();



function getTitleMortgageOption1(){
   input = mortgageOption1.value; 
   
   if(input !== null && input !== '') {

      m1.Mortgage = input;

      //Put the entered value back in the input box.
      document.getElementById("mortgageOption1").value = m1.Mortgage;

      //Append the entered value to the title. 
      document.getElementById("title1").innerHTML = `Title - ${m1.Mortgage}`

      //The arrow toggle for the two sections
      document.getElementById("title1").classList.add("collapsed");
      document.getElementById("required1").classList.remove("collapsed");

      //Close current accordian section and open next one
      document.getElementById("collapseOneO1").classList.remove("show");
      document.getElementById("collapseTwoO1").classList.add("show");

      //Focus on next input box
      document.getElementById("n-Option1").focus();


   }   
}

function getTitleMortgageOption2(){
   input = mortgageOption2.value; 
   
   if(input !== null && input !== '') {

      m2.Mortgage = input;

      //Put the entered value back in the input box.
      document.getElementById("mortgageOption2").value = m2.Mortgage;

      //Append the entered value to the title. 
      document.getElementById("title2").innerHTML = `Title - ${m2.Mortgage}`

      //The arrow toggle for the two sections
      document.getElementById("title2").classList.add("collapsed");
      document.getElementById("required2").classList.remove("collapsed");

      //Close current accordian section and open next one
      document.getElementById("collapseOneO2").classList.remove("show");
      document.getElementById("collapseTwoO2").classList.add("show");

      //Focus on next input box
      document.getElementById("n-Option2").focus();
   }   
}