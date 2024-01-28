class ProtergiaOVSi_class {
    constructor() {
        this.table= tables[4];
        this.color="yellow";
        this.parohos = "Protergia";
        this.programmaName = "Οικιακό Value Simple";
        this.programmaLink = "https://www.protergia.gr/spiti/oikiako-reuma-proionta/protergia-oikiako-value-simple/";
        this.alfa = 1.18;
        this.vita = 0.02;
        this.lu=0.1;
        this.li=0.09;

        this.TTim1 = this.alfa*TEAm1+this.vita;

        this.BTim2 = "";
        this.TBTim2 = this.BTim2 - this.BTim2 * (this.Ekptosi / 100);//this.MDvalue + this.BTim2;
        this.TTim2 = this.TBTim2 + this.MDvalue;

        this.BTnu = 0.14;
        this.TBTnu = this.BTnu - this.BTnu * (this.Ekptosi / 100);
        this.TTnu = this.TTim1;

        this.EkSun = 0.08000;
        this.pagio = 5.00;
        
        this.ERT = 2.96;
        this.tt10 = '<div class="right"><h3>Η Τελική τιμή ημέρας 0-500 kWh/μήνα προκύπτει ως εξής:</h3>\n' +
            '<p>παίρνουμε το ①(α), το ②(β) και το TEAm-1 (ΤΕΑ του προηγούμενου μήνα)</p>\n' +            
            '<p>Και υπολογίζουμε ως εξής: α * TEAm-1 + β  </p><i></i></div></div>';

        this.tt16 = '<div class="right"><h3>Τελική τιμή νύχτας </h3>\n' +
            '<p>είναι η ίδια με την Τελική τιμή ημέρας 0-500 kWh/μήνα</p>\n' +
            '</p><i></i></div></div>';

        // set two cell green because the program is yellow
        this.table.rows[0].cells[1].style.backgroundColor = "yellow";
        this.table.rows[1].cells[1].style.backgroundColor = "yellow";
            
        this.print = function () {
            //console.log("DEH_myHome4All_class print was called!!" + "MinKatIm=" + MinKatIm);
            
            this.table.rows[0].cells[1].innerHTML = this.parohos;
            this.table.rows[1].cells[1].innerHTML = '<a href="' + this.programmaLink + '" target="_blank">' + this.programmaName + '</a>';

            this.table.rows[2].cells[1].innerHTML = this.alfa.toLocaleString() + "<span class='circledNumber red bld'> ①</span>";
            this.table.rows[3].cells[1].innerHTML = this.vita.toLocaleString()+ "<span class='circledNumber red bld'> ②</span>";

            this.table.rows[4].cells[1].innerHTML = "";
            this.table.rows[5].cells[1].innerHTML = "";
            this.table.rows[6].cells[1].innerHTML = "";
            this.table.rows[7].cells[1].innerHTML = "";
            this.table.rows[8].cells[1].innerHTML = "";
            this.table.rows[9].cells[1].innerHTML = "";
            

            this.table.rows[10].cells[1].innerHTML = ttpre  + this.TTim1.toLocaleString(undefined, {
                minimumFractionDigits: 5
            }) + " €/kWh " + this.tt10;

            
            this.table.rows[11].cells[1].innerHTML = "";
            this.table.rows[12].cells[1].innerHTML = "";
            this.table.rows[13].cells[1].innerHTML = "";
            this.table.rows[14].cells[1].innerHTML = "";
            this.table.rows[15].cells[1].innerHTML = "";
            

            var TTnu = this.TTnu.toLocaleString(undefined, {minimumFractionDigits: 5}) + " €/kWh";
            this.table.rows[16].cells[1].innerHTML = ttpre + TTnu + this.tt16;

            this.table.rows[17].cells[1].innerHTML = this.EkSun.toLocaleString(undefined, { minimumFractionDigits: 5 }) + " €/kWh";
            this.table.rows[18].cells[1].innerHTML = this.pagio + " €/kWh";
            

            this.table.rows[19].cells[1].innerHTML = this.HrePro.toLocaleString(undefined, {
                minimumFractionDigits: 5
            }) + " €";

            this.table.rows[20].cells[1].innerHTML = this.RuthmHre.toLocaleString(undefined, {
                minimumFractionDigits: 5
            }) + " €";

            this.table.rows[21].cells[1].innerHTML = this.EFK.toLocaleString(undefined, { minimumFractionDigits: 0 }) + " €";
            this.table.rows[22].cells[1].innerHTML = this.DETE.toLocaleString(undefined, { minimumFractionDigits: 0 }) + " €";
            this.table.rows[23].cells[1].innerHTML = this.FPA.toLocaleString(undefined, { minimumFractionDigits: 0 }) + " €";
            this.table.rows[24].cells[1].innerHTML = this.ERT.toLocaleString(undefined, { minimumFractionDigits: 0 }) + " €";
            this.table.rows[25].cells[1].innerHTML = this.MinSun.toLocaleString(undefined, { minimumFractionDigits: 0 }) + " €";
            this.table.rows[26 ].cells[1].innerHTML = this.MinSunMeDor.toLocaleString(undefined, { minimumFractionDigits: 0 }) + " €";

        }

    }

    
    
    get MDvalue() {
        // $J30=TEAm1  D4=this.alfa  D5=this.vita  D6=this.Lu  D7=this.Li
        //return (TEAm1 > this.Lu ? this.alfa * (TEAm1 - this.Lu) + this.vita : (TEAm1 < this.Li ? this.alfa * (TEAm1 - this.Li) + this.vita : 0));
        return mihanismosDiakumansis(this);
    }
    get HrePro() {        
        return getHrePro(this);
    }
    get EFK() {
        return (0.0022 * (MinKatIm + MinKatNu));
    }

    get RuthmHre() {
        return getRythmHre();
    }

    // Backticks `Apples `
    get DETE() {
        return (0.005 * (this.HrePro + this.RuthmHre + this.EFK - 0.017 * (MinKatIm + MinKatNu)));
    }
    get FPA() {
        return ((this.HrePro + this.RuthmHre + this.EFK) * 0.06);
    }
    get MinSun() {
        return (this.HrePro + this.RuthmHre + this.EFK + this.DETE + this.FPA + this.ERT);
    }
    get MinSunMeDor() {
        return (this.HrePro + this.RuthmHre + this.EFK + this.DETE + this.FPA + this.ERT);
    }
}