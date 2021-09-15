//Holds mortage bond details and returns time value of money calculations.
class Mortgage{
   
   mortgageOption;

   //The names of n, i, pv, pmt and fv are universal in the finance world.
   //For ease of parsing the code we will use them here. Other names will follow
   //coding convention.

   //n stands for the number of periods of time. 
   //Commerically speaking, most housing bonds are paid monthly.
   n;


   //i stands for the interest rate per time period.
   //Typically, banks quote using an a so called 'APR' which 
   //can simply be divided by 12 to get this rate.
   //If the quoted rate is the 'Effective Rate' then you need to work backwards.
   //Commerically speaking, most housing bonds are paid monthly.
   i;

   //pv stands for the present value of the bond. 
   //This is another way of saying the price of the property including all costs paid by the bank.
   pv;
   
   //pmt stand for the payment per period to pay off the bond in the contracted time.
   pmt;

   //fv stands for the future value of the bond. For most housing bonds this is zero as the bond
   //paid off on the final payment. It is possible the bond must be refinanced or the owner must make 
   //a balloon payment then fv will not be zero.
   fv;

   //Are bond payments tax deductible
   taxDeductable = false;

   //The deposit you have to invest.
   deposit;

   //Agents commision, taxes and other buying costs - although paid by the seller this must 
   //not be considered as part of the value of the house 

   //The alternative cost of renting
   rent;

   //If you rent and save up - the interest earned
   interestRateEarnedOnSavings;

   //The cost of insuring a house (not contents).
   insuranceCostPerAnnum;

   //Maintenance cost of a house regular upkeep;
   maintenanceCostPerAnnum;

   //Property taxes
   propertyTaxesPerAnnum;

   //Other adjustments per annum.
   //e.g. house may be closer to work meaning less travel costs or vice versa.
   adustmentAnnualCost;

   //Long term expected inflation rate - the central bank normally are open about this.
   inflationLongTermExpectation;
}

// There are two mortgage options
// We will call the data models m1 and m2 to keep code 
// short and easier to parse.
m1 = new Mortgage();
m2 = new Mortgage();


// Option 1 - title complete
function getTitleMortgageOption1(){

   
   input = document.getElementById("mortgageOption1").value; 
   
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
      document.getElementById("pv-Option1").focus();
   }   
}

//Option 1 - pv
function getPvOption1(){
   input = document.getElementById("pv-Option1").value;
   if (input !== "" || input != 0) {
      m1.pv = input;
   }
   document.getElementById("pv-Option1").value = "";
   document.getElementById("displayO1pv").innerHTML = m1.pv.toString();
   checkMortgageInputsOption1();
}

//Option 1 - i
function getIOption1(){
   input = document.getElementById("i-Option1").value;
   if (input !== "" || input != 0) {
      m1.i = input;
   }
   document.getElementById("i-Option1").value = "";
   document.getElementById("displayO1i").innerHTML = m1.i.toString();
   checkMortgageInputsOption1();
}

//Option 1 - n
function getNOption1(){
   input = document.getElementById("n-Option1").value;
   if (input !== "" || input != 0) {
      m1.n = input;
   }
   document.getElementById("n-Option1").value = "";
   document.getElementById("displayO1n").innerHTML = m1.n.toString();
   checkMortgageInputsOption1();
}

//Option 1 - fv
function getFvOption1(){
   input = document.getElementById("fv-Option1").value;
   if (input !== "" || input != 0) {
      m1.fv = input;
   }
   document.getElementById("fv-Option1").value = "";
   document.getElementById("displayO1fv").innerHTML = m1.fv.toString();
   checkMortgageInputsOption1();
}

//Option 1 - pmt
function getPmtOption1(){
   input = document.getElementById("pmt-Option1").value;
   if (input !== "" || input != 0) {
      m1.pmt = input;
   }
   document.getElementById("pmt-Option1").value = "";
   document.getElementById("displayO1pmt").innerHTML = m1.pmt.toString();
   checkMortgageInputsOption1();
}


//In the accordion only four values are entered. The fifth one triggers
//the calcualtion of the missing value. This is because the five values
//are tied together mathematically. It is important control in ensuring
//the correct outputs to calculate the final value.
function checkMortgageInputsOption1(){
   
   let counter = 0;  

   if((m1.i   != 0) && (m1.i   !== undefined)) {counter += 1};
   if((m1.n   != 0) && (m1.n   !== undefined)) {counter += 1};
   if((m1.fv  != 0) && (m1.fv  !== undefined)) {counter += 1};
   if((m1.pmt != 0) && (m1.pmt !== undefined)) {counter += 1};
   if((m1.pv  != 0) && (m1.pv  !== undefined)) {counter += 1};

   // alert("checked " + counter);
   document.getElementById("required1").outerHTML = `<button id="required1" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoO1" aria-expanded="false" aria-controls="collapseTwoO1">
   Required inputs - ${counter} of 4 completed    
   </button>`

   if (counter == 4) {
      // alert("4 has been reached!!!!");
      calculateMissingValue(m1);
   }
}

//The parameter is a mortgage object.
function calculateMissingValue(m){

   if (m.pv === undefined || m.pv == 0) {
      
      //Formula: 
      m.pv = ((m.n * m.pmt) - m.fv)*(1 / Math.pow((1 + (m.i / 100)), m.n));
      
      document.getElementById("displayO1pv").innerHTML = `${m.pv}`;
   }
   else if (m.i === undefined || m.i == 0) {
      alert("i is undefined");
   }
   else if (m.n === undefined || m.n == 0) {
      alert("n is undefined");
   }
   else if (m.fv === undefined || m.fv == 0) {
      alert("fv is undefined");
   }
   else if (m.pmt === undefined || m.pmt == 0) {
      alert("pmt is undefined");
   }
   else{
      alert("Blowthrough error. Trace number 239fg9wfh032hf03.");
   }
}

function toggleInputFieldsAndEditButton(){
   

   
   if (document.getElementById("pv-Option1").disabled == false) {
      
   }
      
}




// Option 2 - title complete
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