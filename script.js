
//var table;
let DEH_G1_N_var;
let DEH_myHome4All_var;
let ProtergiaOVS_var;
let ProtergiaOVSi_var;
let ProtergiaOVF_var;
let IronBasicHome_var;
let nrgEidiko_var;
let ElpedisonEidiko_var;
let ZenithPHS_var;
let FysikoAerio_var;
let VoltonEidiko_var;
let VolterraEidiko_var;
let ElinPOHG_var;
let EunicePowerEidiko_var;
let OTE_ESTATE_eidiko_var;
let SolarEnergyEidiko_var;

let MinKatIm_el;
let MinKatNu_el;
let SMI_el;



const rowHeight = [];
let tables;
let columns;



let tablePricesCode = `<table class="tablePrices firstColumnHidden">
                <tbody> 
                    <tr><td>Πάροχος</td><td class="bld"></td></tr>
                    <tr><td>Πρόγραμμα</td><td class="bld"></td></tr>
                    <tr><td>α</td><td></td></tr>
                    <tr><td>β</td><td></td></tr>
                    <tr><td>Lᵤ</td><td></td></tr>
                    <tr><td>Lₗ</td><td></td></tr>
                    <tr><td>Μηχανισμός Διακύμανσης</td><td></td></tr>
                    <tr><td class="lineIntableCell">Έκπτωση</td><td class="lineIntableCell"></td></tr> 
                    <tr><td>Βασική τιμή ημέρας 0-500 kWh/μήνα</td><td></td></tr>
                    <tr><td>Τελική βασική τιμή ημέρας 0-500 kWh/μήνα</td><td class=""></td></tr>
                    <tr><td class="lineIntableCell bld">Τελική τιμή ημέρας 0-500 kWh/μήνα</td><td class="lineIntableCell bld"></td></tr>
                    <tr><td>Βασική τιμή ημέρας >500 kWh/μήνα</td><td></td></tr>
                    <tr><td>Τελική βασική τιμή ημέρας >500 kWh (€/kWh)</td><td></td></tr>
                    <tr><td class="lineIntableCell bld">Τελική τιμή ημέρας >500 kWh (€/kWh)</td><td class="lineIntableCell bld"></td></tr>
                    <tr><td>Βασική τιμή νύχτας</td><td></td></tr>
                    <tr><td>Τελική Βασική τιμή νύχτας</td><td></td></tr>
                    <tr><td class="lineIntableCell bld">Τελική τιμή νύχτας (€/kWh)</td><td class="lineIntableCell bld"></td></tr> 
                    <tr><td>Έκπτωση συνέπειας (€/kWh)</td><td></td></tr>
                    <tr><td>Πάγιο</td><td></td></tr>
                    <tr><td class="bld">Χρεώσεις προμήθειας</td><td class="bld"></td></tr>   
                    <tr><td>Ρυθμιζόμενες χρεώσεις</td><td></td></tr>
                    <tr><td>ΕΦΚ</td><td></td></tr>
                    <tr><td>ΔΕΤΕ</td><td></td></tr>
                    <tr><td>ΦΠΑ</td><td></td></tr>
                    <tr><td>ΕΡΤ</td><td></td></tr>
                    <tr><td>Μηνιαίο σύνολο</td><td class="bld"></td></tr>
                    <tr><td>Μηνιαίο σύνολο με δώρα</td><td class="bld"></td></tr>
                    </tbody>
                </table>`;

/*const height = {row0:0, row1:0, row2:0, row3:0, row4:0, row5:0,
                row6:0, row7:0, row8:0, row9:0, row10:0, 
                row11:0, row0:12, row13:0, row14:0, row15:0, 
                row16:0, row17:0, row18:0, row19:0, row2:20, 
                row21:0, row22:0, row23:0, row24:0, row25:0,
                row26:0, row27:0
               };*/

const DEH_myHome_4All = [];
const Protergia_Oikiako_Value_Special = [];
const Protergia_Oikiako_Value_Simple = [];
const Protergia_Oikiako_Value_Fair = [];
const IRON_BASIC_HOME = [];
const nrg_Eidiko = [];
const ELPEDISON_Eidiko = [];
const Zenith_Power_Home_Start = [];
const Fysiko_Aerio_Revma_Oikiako = [];
const VoltonEidiko = [];
const VolterraEidiko = [];
const Elin_Power_On_Home_Green = [];
const Eunice_Power = [];
const OTE_ESTATE_Eidiko = [];
const Solar_Energy_Eidiko = [];

let DEH_G1_N;
let TEAm1 = 0.1022; // του προηγούμενου μήνα
let TEAm2 = 0.1054; // του προηγούμενου μήνα
let MinKatIm = 0;
let MinKatNu = 0;
var SMI = 8; // ishus se kVA

// stis protes 1600kWh(0-1600) to 4mino (ara 400kWh to mina...)    YKO1=0.0069 
// stis epomenes 400kWh(1601-2000) to 4mino (ara 100kWh to mina..) YKO2Im=0.05(P=Hm)  YKO2=0.015(P=Nu)
// stis upoloipes (2001 (to 4mino) kai ano).                       YKO3Im=0.085(P=Hm) YKO3=0.03(P=Nu) 
let YKO1 = 0.0069;
let YKO2Im = 0.05;
let YKO3Im = 0.085;
let YKO2Nu = 0.015;

//////////////////////////////////////////
// Ρυθμιζόμενες χρεώσεις
var SysMet_HreEnerg = 0.00844; // κάθε kWh χρεώνεται με 0.00844€
var MPX = 4.434; // Μοναδιαία Πάγια Χρέωση, ΜΠΧ*ΣΜΙ/έτος. (ΣΜΙ=ισχύς) Εδώ έχουμε ένα μήνα άρα 30/365 : ΜΠΧ*ΣΜΙ*(30/365)
var MMX = 0.01415; // κάθε kWh χρεώνεται με 0.01415
var ETMEAR = 0.017; // κάθε kWh χρεώνεται με 0.017

var HK = 30; // ημέρες κατανάλωσης, εδώ 30


/*Tooltips*/
var ttpre = '<div class="tooltip">';


let span_red_bld_circledNumber_5 = " <span class='red bld circledNumber'>⑤</span>";
let span_red_bld_circledNumber_6 = " <span class='red bld circledNumber'>⑥</span>";
let span_circledNumber_5_minus_2 = "<span class='circledNumber'>⑤-②=</span>";
let span_circledNumber_4_plus_1 = "<span class='circledNumber'>④+①=</span>";
//alert((RythmHre));
//////////////////////////////////////////



/*column1.push("Πάροχος", "Πρόγραμμα", "α", "β", "Lᵤ", "Lₗ", "Μηχανισμός Διακύμανσης", "ΒΤ ημέρας", "ΒΤ >500 kWh", "ΒΤ νύχτας", "Τελική τιμή ημέρας (€/kWh)", ">500 kWh (€/kWh)", "Τελική τιμή νύχτας (€/kWh)", "Έκπτωση συνέπειας (€/kWh)", "Πάγιο", ".", "Ισχύς Παροχής", "Μηνιαία κατανάλωση", "Χρεώσεις προμήθειας", "Ρυθμιζόμενες χρεώσεις", "ΕΦΚ", "ΔΕΤΕ", "ΦΠΑ", "ΕΡΤ", "Μηνιαίο σύνολο", "Μηνιαίο σύνολο με δώρα");*/



/*
DEH_G1_N.push("ΔΕΗ id='DEH'", "Γ1(Ν)", "1,16", "0", "0,095", "0,085", "0,00835", "0,12800", "0,13760", "0,10320", "0,13635", "0,14595", "0,11155", "0,00000", "5,00 €", ".", "8", "90", "21,73 €", "8,96 €", "0,29 €", "0,14 €", "1,86 €", "2,96 €", "35,94 €");*/

//BTim1: 0.12800




DEH_myHome_4All.push("ΔΕΗ", "myHome 4All", "1,15", "0", "0,100", "0,090", "0,00253", "0,12400", "0,16880", "0,10320", "0,12653", "0,17133", "0,10573", "0,00000", "5,00 €", ".", "kVA", "kWh ημέρας", "20,62 €", "8,96 €", "0,29 €", "0,14 €", "1,79 €", "2,96 €", "34,75 €", "34,75 €");

Protergia_Oikiako_Value_Special.push("Protergeia", "Οικιακό Value Special", "1,18", "0", "0,100", "0,090", "0,00260", "0,14000", ".", "0,14000", "0,14260", ".", "0,14260",
    "0,08000", "4,00 €", ".", ".", "40", "22,54 €", "8,96 €", "0,29 €", "0,15 €", "1,91 €", "2,96 €", "36,80 €", "36,80 €");

Protergia_Oikiako_Value_Simple.push("Protergia", "Οικιακό Value Simple", "1,18", "0,02", ".", ".", ".", ".", ".", ".", "0,14060", ".", "0,14060", "0,00000", "5,00 €", ".", ".", "kWh νύχτας", "23,28 €", "8,96 €", "0,29 €", "0,15€", "1,95 €", "2,96 €", "37,58 €", "37,58 €");

Protergia_Oikiako_Value_Fair.push("Protergia", "Οικιακό Value Fair", "1,18", "-0,003776", "0,100", "0,090", "-0,00118", "0,13400", ".", "0,13400", "0,13282", ".", "0,13282", "0,00000", "5,00 €", ".", ".", ".", "22,27 €", "8,96 €", "0,29 €", "0,15 €", "1,89 €", "2,96 €", "36,51 €", "36,51 €");

IRON_BASIC_HOME.push("ΗΡΩΝ", "BASIC HOME", "1,26", "0", "0,050", "0,040", "0,06577", "0,07475", ".", "0,07475", "0,14052", ".", "0,14052", "0,04025", "5,00 €", ".", ".", ".", "23,27 €", "8,96 €", "0,29 €", "0,15 €", "1,95 €", "2,96 €", "37,57 €", "37,57 €");

nrg_Eidiko.push("nrg", "Ειδικό", "1,18", "0", "0,080", "0,070", "0,02620", "0,11500", ".", "0,11500", "0,14120", ".",
    "0,14120", "0,07500", "5,00 €", ".", ".", ".", "23,36 €", "8,96 €", "0,29 €", "0,15 €", "1,96 €", "2,96 €", "37,67 €",
    "37,67 €");

ELPEDISON_Eidiko.push("ELPEDISON", "Ειδικό", "1,3115", "0", "0,040", "0,030", "0,08158", "0,08900", ".", "0,08900", "0,17058",
    ".", "0,17058", "0,00000", "5,00 €", ".", ".", ".", "27,17 €", "8,96 €", "0,29 €", "0,17 €", "2,19 €", "2,96 €", "41,74 €",
    "-18,26 €");

Zenith_Power_Home_Start.push("ZeniΘ", "Power Home Start", "1,35", "0", "0,050", "0,040", "0,07047", "0,09900", ".",
    "0,09900", "0,16947", ".", "0,16947", "0,00000", "5,00 €", ".", ".", ".", "27,03 €", "8,96 €", "0,29 €", "0,17 €",
    "2,18 €", "2,96 €", "41,58 €", "41,58 €");

Fysiko_Aerio_Revma_Oikiako.push("Φυσικό Αέριο", "Ρεύμα Οικιακό", "0,75", "0", "0,004", "0,002", "0,07365", "0,06900", ".", "0,06900", "0,14265", ".", "0,14265", "0,03000", "5,00 €", ".", ".", ".", "23,54 €", "8,96 €", "0,29 €", "0,15 €", "1,97 €", "2,96 €", "37,87 €", "37,87 €");

VoltonEidiko.push("Volton", "Ειδικό", "1,399", "0", "0,070", "0,050", "0,04505", "0,09920", ".", "0,09920", "0,14425", ".",
    "0,14425", "0,02480", "4,90 €", ".", ".", ".", "23,65 €", "8,96 €", "0,29 €", "0,15 €", "1,97 €", "2,96 €",
    "37,98 €", "12,79 €");

VolterraEidiko.push("Volterra", "Ειδικό", "1,25", "0", "0,095", "0,065", "0,00900", "0,13500", ".", "0,13500",
    "0,14400", ".", "0,14400", "0,00000", "4,50 €", ".", ".", ".", "23,22 €", "8,96 €", "0,29 €", "0,15 €",
    "1,95 €", "2,96 €", "37,52 €", "37,52 €");

Elin_Power_On_Home_Green.push("ελίν", "Power On! Home Green", "1,22", "0", "0,065", "0,055", "0,04538", "0,09500",
    ".", "0,09500", "0,14038", ".", "0,14038", "0,00000", "5,00 €", ".", ".", ".", "23,25 €", "8,96 €", "0,29 €", "0,15 €", "1,95 €", "2,96 €", "37,56 €", "37,56 €");

Eunice_Power.push("Eunice Power", "Ειδικό", "1,12", "0", "0,070", "0,050", "0,03606", "0,13000", ".", "0,13000",
    "0,16606", ".", "0,16606", "0,00000", "5,00 €", ".", ".", ".", "26,59 €", "8,96 €", "0,29 €", "0,17 €",
    "2,15 €", "2,96 €", "41,11 €", "41,11 €");

OTE_ESTATE_Eidiko.push("OTE ESTATE", "Ειδικό", "1,145", "0", "0,130", "0,090", "0,00000", "0,19800", ".", "0,19800", "0,19800",
    ".", "0,19800", "0,00000", "5,00 €", ".", ".", ".", "30,74 €", "8,96 €", "0,29 €", "0,19 €", "2,40 €", "2,96 €", "45,53 €",
    "45,53 €");

Solar_Energy_Eidiko.push("Solar Energy", "Ειδικό", "1,25", "0", "0,055", "0,045", "0,05900", "0,10980", ".", "0,10980",
    "0,16880", ".", "0,16880", "0,00000", "5,00 €", ".", ".", ".", "26,94 €", "8,96 €", "0,29 €", "0,17 €", "2,17 €",
    "2,96 €", "41,49 €", "41,49 €");


//console.log(fruits.length); // 3

//const columns = [];
//columns.push(DEH_G1_N); //, DEH_myHome_4All,Protergia_Oikiako_Value_Special,Protergia_Oikiako_Value_Simple, Protergia_Oikiako_Value_Fair, IRON_BASIC_HOME,nrg_Eidiko, ELPEDISON_Eidiko, Zenith_Power_Home_Start, Fysiko_Aerio_Revma_Oikiako, VoltonEidiko, VolterraEidiko, Elin_Power_On_Home_Green, Eunice_Power, OTE_ESTATE_Eidiko, Solar_Energy_Eidiko);

document.addEventListener("DOMContentLoaded", function (event) {
    //$( document ).ready(function() {
    //do work    

    //******* insert html code for tables 1 to 16 *****/
    //console.log("tables is Array=", Array.isArray(tables));
    let elements = document.getElementsByClassName("tablePricesContainer");
    let index = 1;
    Array.prototype.forEach.call(elements, function (element) {
        element.innerHTML = tablePricesCode;
        index++;
    });

    /******** add id to each table ******/
    tables = document.querySelectorAll("table");
    tables.forEach((table, index) => {
        table.id = "tablePrices" + index;
    });

    // fix tablePrices1
    let t = document.getElementById("tablePrices1");
    t.classList.remove("firstColumnHidden");

    //document.querySelectorAll("table td:nth-child(1)").classList.add("glow-on");







    /*const rowsTable1 = document.querySelectorAll('.captionsTable0 t r');
    const heightTable2 = 23;
    rowsTable1[6].style.height = heightTable2 + 'px';*/

    // Iterate through rows and set the height of the first table rows to match the second table rows
    /*rowsTable1.forEach((rowTable1, index) => {
        const heightTable2 = rowsTable2[index].clientHeight;
        console.log("table2 " + "row "+ rowsTable2[index].clientHeight + " heightTable2="+heightTable2);
        rowTable1.style.height = heightTable2 + 'px';
    });*/



    MinKatIm_el = document.querySelector("#MinKatIm");
    MinKatNu_el = document.querySelector("#MinKatNu");
    SMI_el = document.querySelector("#SMI");
    //console.log("DOMContentLoaded was called!!" + "MinKatIm=" + MinKatIm + " MinKatNu=" + MinKatNu + " SMI=" + SMI);

    prepareElements();
    equalizeRows();
    //hideContentColumns();

    /*document.querySelector("body > div:nth-child(1)").style.display="none";
    document.querySelector("body > div:nth-child(1)").style.height="1px";*/
});




function equalizeRows() {
    //console.log("tables length=", tables.length);

    for (let row = 0; row < 27; row++) {
        let RowOffsetHeight = 0;
        let RowClientHeight = 0;
        //find the highest row of all tables, put it in RowOffsetHeight
        //Array.prototype.forEach.call(tables,function (table) {
        //tables.forEach((table, index) => {
        for (let table of tables) {

            //table.rows[row].style.backgroundColor="red";

            //console.log( "table index=", index, " row=" , row , " offsetHeight=" , table.rows[row].offsetHeight);                       
            if (table.rows[row].offsetHeight > RowOffsetHeight) {
                RowOffsetHeight = NtoS(table.rows[row].offsetHeight);
            }
            if (table.rows[row].clientHeight > RowClientHeight) {
                RowClientHeight = NtoS(table.rows[row].clientHeight);
            }
            //console.log("table=", table);
        };
        //console.log("FINAL RowOffsetHeight=" , RowOffsetHeight);  

        let diff = RowOffsetHeight - RowClientHeight;

        //set the height of this row in each table to RowOffsetHeight
        tables.forEach((table, index) => {
            table.rows[row].style.height = RowOffsetHeight - diff + 'px';
        });
    }
}

/*
function hideContentColumns() {
    Array.from(
        document.querySelectorAll('.hiddenTable td:nth-child(1)')
    ).forEach(cell => {
        cell.style.backgroundColor = 'blue';
        cell.style.display = 'none';
    });
}*/

function mihanismosDiakumansis(caller) {
    // ΜΗΧΑΝΙΣΜΟΣ ΔΙΑΚΥΜΑΝΣΗΣ //
    //                        //
    // Πάνω από το άνω όριο
    var result;

    if (TEAm1 > caller.Lu) {
        result = caller.alfa * (TEAm1 - caller.Lu) + caller.vita;
    }

    // Κάτω από το κάτω όριο
    if (TEAm1 < caller.Li) {
        result = caller.alfa * (TEAm1 - caller.Li) + caller.vita;
    }

    // Εντός ορίων
    if (TEAm1 < caller.Lu && TEAm1 > caller.Li) {
        result = 0;
    }

    result = parseFloat(Number(result).toFixed(5));

    return result;
};



function add(a, b) {

    if (typeof a == "string") {
        a = parseFloat(a.replaceAll(',', '.'));
    }
    if (typeof b == "string") {
        b = parseFloat(b.replaceAll(',', '.'));
    }
    result = a + b;
    result = result.toString();
    result = result.replaceAll('.', ',');
    return result;
}


function multiply(a, b) {

    if (typeof a == "string") {
        a = parseFloat(a.replaceAll(',', '.'));
    }
    if (typeof b == "string") {
        b = parseFloat(b.replaceAll(',', '.'));
    }
    result = a * b;
    result = result.toString();
    result = result.replaceAll('.', ',');
    return result;
}

function compare(a, b) {
    if (typeof a == "string") {
        a = parseFloat(a.replaceAll(',', '.'));
    }
    if (typeof b == "string") {
        b = parseFloat(b.replaceAll(',', '.'));
    }
    if (a > b) {
        result = "firstIsBigger";
    }
    if (b > a) {
        result = "secondIsBigger";
    }
    if (a == b) {
        result = "equal";
    }

    return result;
}



function getHrePro(caller) {
    //if (caller == DEH_G1_N_var) {
    // $B19=MinKatIm $D19=MinKatNu  $B18=SMI  $B14=TTnu $B12=TTim1 $B13=TTim2 $B16=caller.pagio
    //=IF(B19>500; B19*B13+D19*B14; B19*B12+D19*B14)+B16
    //return (MinKatIm > 500 ? MinKatIm * caller.TTim2 + MinKatNu * caller.TTnu : MinKatIm * caller.TTim1 + MinKatNu * caller.TTnu) + caller.pagio;
    //} else if (caller == DEH_myHome4All_var) {
    // C13=TTim2 C12=TTim1 C14=TTnu C16=pagio
    //=IF(B19>500; (B19-500)*C13+500*C12+D19*C14; B19*C12+D19*C14)+C16
    //return (MinKatIm > 500 ? (MinKatIm - 500) * caller.TTim2 + 500 * caller.TTim1 + MinKatNu * caller.TTnu : MinKatIm * caller.TTim1 + MinKatNu * caller.TTnu) + caller.pagio;
    //}

    // D12*$B19+D14*$D19+D16
    //=D12=this.TTim1 $B19=MinKatIm D14=this.TTnu $D19=MinKatNu D16=this.pagio
    //=F12*$B19+F14*$D19+F16        
    //return (MinKatIm > 500 ? (MinKatIm - 500) * this.TTim2 + 500 * this.TTim1 + MinKatNu * this.TTnu : MinKatIm * this.TTim1 + MinKatNu * this.TTnu) + this.pagio;
    //return (this.TTim1 * MinKatIm + this.TTnu * MinKatNu + this.pagio);

    if (caller.parohos == "ΔΕΗ") {
        if (caller.programmaName == "Γ1(Ν)") {
            return (MinKatIm > 500 ? MinKatIm * caller.TTim2 + MinKatNu * caller.TTnu : MinKatIm * caller.TTim1 + MinKatNu * caller.TTnu) + caller.pagio;
        }
        if (caller.programmaName == "myHome 4All") {
            //=IF(B19>500; (B19-500)*C13+500*C12+D19*C14; B19*C12+D19*C14)+C16
            //=IF(MinKatIm>500; (MinKatIm-500)*caller.TTim2+500*caller.TTim1+MinKatNu*caller.TTnu; MinKatIm*caller.TTim1+MinKatNu*caller.TTnu)+caller.pagio
            return (MinKatIm > 500 ? (MinKatIm - 500) * caller.TTim2 + 500 * caller.TTim1 + MinKatNu * caller.TTnu : MinKatIm * caller.TTim1 + MinKatNu * caller.TTnu) + caller.pagio;
        }
    }
    return (caller.TTim1 * MinKatIm + caller.TTnu * MinKatNu + caller.pagio);
}





// takes string, returns number
function StoN(s) {
    if (typeof s == "string") {
        s = parseFloat(s.replaceAll(',', '.'));
    }
    return s;
}

// takes number, returns string
function NtoS(n) {
    if (typeof n == "number") {
        n = n.toString();
        n = n.replaceAll('.', ',');
    }
    return n;
}



function isNumeric(str) {
    // replace comma (if exists) with dot
    str = str.replaceAll(',', '.');
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}


function prepareElements() {
    //console.log("1.prepareElements was called!!");
    /*
    var slider = document.getElementById("SliderFontSize");
    var output = document.getElementById("slideOutput");
    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = "Μέγεθος γραμματοσειράς " + this.value;
        let body = document.getElementsByTagName('body')[0];
        //body.style.fontSize=NtoS(this.value/100)+"em";

        
        //document.getElementById( "tablePrices" ).style[ "font-size" ] = (this.value/100) + "em";
        

        //let z="zoom:" + this.value/100 +";" + " -moz-transform: scale(" + this.value/100 + "); -moz-transform-origin: 0 0" ;
        //alert(z);
        

        let z = "-moz-transform: scale(" +this.value/100+ "); -moz-transform-origin: 0 0;"
        document.getElementById( "tablePrices" ).style[ z ] = (this.value/100);
    }*/

    //console.log("1.prepareElements was called!!" + "MinKatIm=" + MinKatIm + " MinKatNu=" + MinKatNu + " SMI=" + SMI);
    // read MinKatIm and MinKatNu
    if (localStorage) {
        //console.log("2.prepareElements was called!!" + "MinKatIm=" + MinKatIm + " MinKatNu=" + MinKatNu + " SMI=" + SMI);
        if (isNaN(localStorage.MinKatIm) || (typeof localStorage.MinKatIm === "undefined")) {
            localStorage.MinKatIm = 0;
        }
        if (isNaN(localStorage.MinKatNu) || (typeof localStorage.MinKatNu === "undefined")) {
            localStorage.MinKatNu = 0;
        }
        if (isNaN(localStorage.SMI) || (typeof localStorage.SMI === "undefined")) {
            localStorage.SMI = 0;
        }
        //console.log("3.prepareElements was called!!" + "MinKatIm=" + MinKatIm + " MinKatNu=" + MinKatNu + " SMI=" + SMI);
        MinKatIm = StoN(localStorage.MinKatIm);
        //alert("MinKatIm=" + MinKatIm);
        MinKatNu = StoN(localStorage.MinKatNu);
        SMI = StoN(localStorage.SMI);
        //console.log("4.prepareElements was called!!" + "MinKatIm=" + MinKatIm + " MinKatNu=" + MinKatNu + " SMI=" + SMI);
    } else {
        // No support. Use a fallback such as browser cookies or store on the server.
        alert("το LocalStorage ΔΕΝ υποστηρίζεται!!!!");
    }
    //alert("1.prepareElements localStorage.MinKatIm=" + localStorage.MinKatIm + "MinKatIm=" + MinKatIm + "MinKatNu=" + MinKatNu);

    DEH_G1_N_var = new DEH_G1_N_class();
    DEH_myHome4All_var = new DEH_myHome4All_class();
    ProtergiaOVS_var = new ProtergiaOVS_class();
    ProtergiaOVSi_var = new ProtergiaOVSi_class();
    ProtergiaOVF_var = new ProtergiaOVF_class();
    IronBasicHome_var = new IronBasicHome_class();
    nrgEidiko_var = new nrgEidiko_class();
    ElpedisonEidiko_var = new ElpedisonEidiko_class();
    ZenithPHS_var = new ZenithPHS_class();
    FysikoAerio_var = new FysikoAerio_class();
    VoltonEidiko_var = new VoltonEidiko_class();
    VolterraEidiko_var = new VolterraEidiko_class();
    ElinPOHG_var = new ElinPOHG_class();
    EunicePowerEidiko_var = new EunicePowerEidiko_class();
    OTE_ESTATE_eidiko_var = new OTE_ESTATE_eidiko_class();
    SolarEnergyEidiko_var = new SolarEnergyEidiko_class();

    columns = [DEH_G1_N_var,
        DEH_myHome4All_var,
        ProtergiaOVS_var,
        ProtergiaOVSi_var,
        ProtergiaOVF_var,
        IronBasicHome_var,
        nrgEidiko_var,
        ElpedisonEidiko_var,
        ZenithPHS_var,
        FysikoAerio_var,
        VoltonEidiko_var,
        VolterraEidiko_var,
        ElinPOHG_var,
        EunicePowerEidiko_var,
        OTE_ESTATE_eidiko_var,
        SolarEnergyEidiko_var];

    printColumns();



    function handleEvent(evt) {
        //evt.preventDefault();
        if (evt.type == "change") {
            console.log("1. handleEvent evt.target.id is " + evt.target.id, " and event=change");
            if (isNumeric(evt.target.value)) {
                console.log("2. handleEvent entered number=" + evt.target.value);
                updateTableIfNeeded();
                /* if (localStorage) {
                    if (evt.target == MinKatIm_el) {
                        localStorage.MinKatIm = evt.target.value;
                        MinKatIm = StoN(localStorage.MinKatIm);
                    } else if (evt.target == MinKatNu_el) {
                        localStorage.MinKatNu = evt.target.value;
                        MinKatNu = StoN(localStorage.MinKatNu);
                    } else if (evt.target == SMI_el) {
                        localStorage.SMI = evt.target.value;
                        SMI = StoN(localStorage.SMI);
                    }
                    printColumns();
                } */
            } else {
                alert("Προσοχή!! Επιτρέπονται μόνο αριθμοί!!!");
            }

        }

        if (evt.type == "blur") {
            console.log(evt.target.id + " blur"); updateTableIfNeeded(evt.target);
        }

        /*       if (evt.type == "keydown") {
                  if (evt.target == MinKatIm_el || evt.target == MinKatNu_el || evt.target == SMI_el) {
                      // These days, you might want to use evt.key instead of keyCode   
                      console.log(evt.target.id, " keydown event ", evt.keyCode, " type=", typeof evt.keyCode);
                      //console.log(this.value + String.fromCharCode(evt.keyCode));
                      if (/^(32)$/.test("" + evt.keyCode)) {
                          alert("1.Μόνο αριθμοί επιτρέπονται!");
                          evt.preventDefault();
                      }
                      if ((evt.keyCode >= 37 && evt.keyCode <= 40) || (evt.keyCode >= 48 && evt.keyCode <= 57) || (evt.keyCode >= 96 && evt.keyCode <= 105) || evt.keyCode == 17 || evt.keyCode == 86 || evt.keyCode == 46 || evt.keyCode == 8 || evt.keyCode == 9 || evt.keyCode == 16 || evt.keyCode == 190 || evt.keyCode == 188) {
                          //alert("1.evt.keyCode=" + evt.keyCode);
                      } else if (evt.keyCode == 13) { // if pressed Enter key
                          evt.target.blur();
                      } else {
                          evt.preventDefault();
                          alert("Προσοχή!! Επιτρέπονται μόνο αριθμοί!!!");
                      }
                  }
              } */

        if (evt.type == "paste") {
            if (evt.target == MinKatIm_el || evt.target == MinKatNu_el || evt.target == SMI_el) {
                console.log(evt.target.id, " paste event ");                             
                evt.preventDefault();
            }
        }
    }

    MinKatIm_el.addEventListener("change", function (evt) { handleEvent(evt); }, false);
    MinKatNu_el.addEventListener("change", function (evt) { handleEvent(evt); }, false);
    SMI_el.addEventListener("change", function (evt) { handleEvent(evt); }, false);

    MinKatIm_el.addEventListener("blur", function (evt) { handleEvent(evt); }, false);
    MinKatNu_el.addEventListener("blur", function (evt) { handleEvent(evt); }, false);
    SMI_el.addEventListener("blur", function (evt) { handleEvent(evt); }, false);

    // allow entering of numbers only in MinKatIm
    /*     MinKatIm_el.addEventListener("keydown", function (evt) { handleEvent(evt); }, false);
        MinKatNu_el.addEventListener("keydown", function (evt) { handleEvent(evt); }, false);
        SMI_el.addEventListener("keydown", function (evt) { handleEvent(evt); }, false); */
    // allow pasting of numbers only in MinKatIm
    MinKatIm_el.addEventListener("paste", function (evt) { handleEvent(evt); }, false);
    MinKatNu_el.addEventListener("paste", function (evt) { handleEvent(evt); }, false);
    SMI_el.addEventListener("paste", function (evt) { handleEvent(evt); }, false);

    function printColumns() {
        //console.log("printColumns was called");

        // sort columns
        columns.sort(function (a, b) {
            return a.MinSun - b.MinSun;
        });

        //console.log('columns=', columns);

        // set table for each column
        let index = 1;
        columns.forEach((column) => {
            //console.log(`${column.table.id} ${column.column} ${column.MinSun} ${column.name}`);  
            //console.log(`${"1.printColumns="} ${column.column} ${" set to="+index}`);  
            column.table = document.getElementById("tablePrices" + index);
            //console.log(`${column.table.id} ${column.column} ${column.MinSun} ${column.name}`);  

            column.print();
            index++;
        });

        updateInputs();
    }



    function updateTableIfNeeded(target) {
        console.log("1. updateTableIfNeeded was caled by ", isNaN(target) ? "isNaN" : target.name);
        // copy value of #MinKatIm in ti and (from ti) remove " kWh" and spaces 
        let ti = StoN(MinKatIm_el.value);
        if (isNaN(ti)) ti = 0;

        // copy value of #MinKatNu in tn and (from tn) remove " kWh" and spaces 
        let tn = StoN(MinKatNu_el.value);
        if (isNaN(tn)) tn = 0;

        // copy value of #SMI in sn and (from sn) remove " kVA" and spaces 
        SMI_el.value = SMI_el.value.replaceAll(" ", "");
        if (SMI_el.value == "") {
            console.log("2. updateTableIfNeededMI_el.value==empty");
            SMI_el.value = 8;
        }
        let sn = StoN(SMI_el.value);
        if (isNaN(sn)) sn = 0;

        console.log("1. updateTableIfNeeded MinKatIm=", MinKatIm, " ti=", ti, " MinKatNu=", MinKatNu, " tn=", tn, " SMI=", SMI, " sn=", sn);
        // compare with saved value DEH_G1_N.MinKatNu.
        // if different, update        
        if (MinKatIm != ti || MinKatNu != tn || SMI != sn) {
            console.log("2. updateTableIfNeeded MinKatIm=", MinKatIm, " ti=", ti, " MinKatNu=", MinKatNu, " tn=", tn, " SMI=", SMI, " sn=", sn);
            MinKatIm = ti;
            MinKatNu = tn;
            SMI = sn;

            if (localStorage) { localStorage.MinKatIm = MinKatIm; localStorage.MinKatNu = MinKatNu; localStorage.SMI = SMI; }

            printColumns();
        } else { // no diff so put back " kWh" if >0
            console.log("3. updateTableIfNeeded");
            if (target.value > 0) {
            } else {
                target.value = '';
            }
        }

    }







}




function getRythmHre() {

    var a = (MinKatIm + MinKatNu) * (SysMet_HreEnerg + MMX + ETMEAR) + SMI * MPX * 30 / 365;
    var b1;
    var b2;
    var b;

    // to orio einai 1600kWh to 4mhno, diladi 400kWh to mina...
    // b1= oi protes 400kWh*YKO1 + oipoloipes apo tis 400 os tis 500 * YKO2Im
    if (MinKatIm <= 500) {
        b1 = 400 * YKO1 + (MinKatIm - 400) * YKO2Im;
    } else {
        b1 = 400 * YKO1 + 100 * YKO2Im + (MinKatIm - 500) * YKO3Im;
    }
    if (MinKatIm <= 400) {
        result1 = MinKatIm * YKO1;
    } else {
        result1 = b1;
    }

    if (MinKatNu <= 500) {
        b2 = 400 * YKO1 + (MinKatNu - 400) * YKO2Nu;
    } else {
        b2 = 400 * YKO1 + 100 * YKO2Nu + (MinKatNu - 500) * 0.03;
    }

    if (MinKatNu <= 400) {
        result2 = MinKatNu * YKO1;
    } else {
        result2 = b2;
    }
    b = result1 + result2;

    return a + b;
}

function updateInputs() {
    //console.log("1. updateInputs MinKatIm=", MinKatIm, " MinKatNu=", MinKatNu, " SMI=", SMI);

    // read MinKatIm and MinKatNu
    if (localStorage) {
        // το LocalStorage υποστηρίζεται!            

        MinKatIm = StoN(localStorage.MinKatIm);
        //alert("MinKatIm=" + MinKatIm);
        MinKatNu = StoN(localStorage.MinKatNu);
        SMI = StoN(localStorage.SMI);
        //console.log("2. updateInputs MinKatIm=", MinKatIm, " MinKatNu=", MinKatNu, " SMI=", SMI, " localStorage.SMI=", localStorage.SMI);
    } else {
        // No support. Use a fallback such as browser cookies or store on the server.
        console.log("3. updateInputs MinKatIm=", MinKatIm, " MinKatNu=", MinKatNu, " SMI=", SMI);
        alert("το LocalStorage ΔΕΝ υποστηρίζεται!!!!");
    }
    //alert("1.prepareElements localStorage.MinKatIm=" + localStorage.MinKatIm + "MinKatIm=" + MinKatIm + "MinKatNu=" + MinKatNu);

    MinKatIm_el.value = MinKatIm < 1 || isNaN(MinKatIm) ? "" : MinKatIm;
    MinKatNu_el.value = MinKatNu < 1 || isNaN(MinKatNu) ? "" : MinKatNu;
    SMI_el.value = SMI < 1 || isNaN(SMI) ? "" : SMI;

    //DEH_G1_N_var.print();
    //DEH_myHome4All_var.print();
}



function setRowHeight(row) {
    // Counting rows
    $("#Table_id tr").each(() => {
        rows++;
    });
    rowHeight[row];
}

function getCaptionsTableContent() {
    let result = "<table class='captionsTable'><tbody>" +
        "<tr><td>Πάροχος</td></tr>" +
        "<tr><td>Πρόγραμμα</td></tr>" +
        "<tr><td>α</td></tr>" +
        "<tr><td>β</td></tr>" +
        "<tr><td>Lᵤ</td></tr>" +
        "<tr><td>Lₗ</td></tr>" +
        "<tr><td>Μηχανισμός Διακύμανσης</td></tr>" +
        "<tr><td>Έκπτωση</td></tr>" +
        "<tr><td>Βασική τιμή ημέρας 0-500 kWh/μήνα</td></tr>" +
        "<tr><td>Τελική βασική τιμή ημέρας 0-500 kWh/μήνα</td></tr>" +
        "<tr><td>Τελική τιμή ημέρας 0-500 kWh/μήνα</td></tr>" +
        "<tr><td>Βασική τιμή ημέρας >500 kWh/μήνα</td></tr>" +
        "<tr><td>Τελική βασική τιμή ημέρας >500 kWh (€/kWh)</td></tr>" +
        "<tr><td>Τελική τιμή ημέρας >500 kWh (€/kWh)</td></tr>" +
        "<tr><td>Βασική τιμή νύχτας</td></tr>" +
        "<tr><td>Τελική Βασική τιμή νύχτας</td></tr>" +
        "<tr><td>Τελική τιμή νύχτας (€/kWh)</td></tr>" +
        "<tr><td>Έκπτωση συνέπειας (€/kWh)</td></tr>" +
        "<tr><td>Πάγιο</td></tr>" +
        "<tr><td>Χρεώσεις προμήθειας</td></tr>" +
        "<tr><td>Ρυθμιζόμενες χρεώσεις</td></tr>" +
        "<tr><td>ΕΦΚ</td></tr>" +
        "<tr><td>ΔΕΤΕ</td></tr>" +
        "<tr><td>ΦΠΑ</td></tr>" +
        "<tr><td>ΕΡΤ</td></tr>" +
        "<tr><td>Μηνιαίο σύνολο</td></tr>" +
        "<tr><td>Μηνιαίο σύνολο με δώρα</td></tr>" +
        "</tbody></table>";
    return result;
}


function getStyle(el, styleProp) {
    var value, defaultView = (el.ownerDocument || document).defaultView;
    // W3C standard way:
    if (defaultView && defaultView.getComputedStyle) {
        // sanitize property name to css notation
        // (hypen separated words eg. font-Size)
        styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
        return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    } else if (el.currentStyle) { // IE
        // sanitize property name to camelCase
        styleProp = styleProp.replace(/\-(\w)/g, function (str, letter) {
            return letter.toUpperCase();
        });
        value = el.currentStyle[styleProp];
        // convert other units to pixels on IE
        if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
            return (function (value) {
                var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
                el.runtimeStyle.left = el.currentStyle.left;
                el.style.left = value || 0;
                value = el.style.pixelLeft + "px";
                el.style.left = oldLeft;
                el.runtimeStyle.left = oldRsLeft;
                return value;
            })(value);
        }
        return value;
    }
}


function makeSpan(n1, addORsubtract = '', n2, red = '', bld = '', circledNumber = '') {
    let equals = '';


    if (red) { if (red == 1) { red = " red " } } else { red = ''; }
    if (bld) { if (bld == 1) { bld = " bld "; } } else { bld = ''; }
    if (circledNumber) { if (circledNumber == 1) { circledNumber = " circledNumber "; } } else { circledNumber = ''; }

    if (!n1 || n1 == '') n1 = 0; if (!n2 || n2 == '') n2 = 0;

    if (n1 && n2) equals = '=';



    var classContent = red == '' && bld == '' && circledNumber == '' ? '' : " class='" + red + bld + circledNumber + "'";  //&& bld != '' && circledNumber != ''
    const numbers1 = ['', '①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨'];
    const numbers2 = ['', '①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨'];

    let result = '<span' + classContent + '>' + numbers1[n1] + addORsubtract + numbers2[n2] + equals + '</span>';

    return result;
}


//"<span class='circledNumber'>③-②=</span>"
//<span class='red bld circledNumber'>④</span>" + "</span>"