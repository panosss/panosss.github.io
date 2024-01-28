class ProtergiaOVS_class {
    constructor() {        
        this.table = tables[3];
        this.color = "green";
        this.parohos = "Protergia";
        this.programmaName = "Οικιακό Value Special";
        this.programmaLink = "https://www.protergia.gr/spiti/oikiako-reuma-proionta/protergia-oikiako-value-special/";
        this.alfa = 1.18;
        this.vita = 0;
        this.Lu = 0.10;
        this.Li = 0.090;
        //this.MDvalue = mihanismosDiakumansis(this.alfa, this.vita, TEAm1, this.Lu, this.Li);
        this.MDlink = "https://www.dei.gr/media/h2xmruoc/paradeigma-mhchanismou-diakumanshs.pdf";
        this.Ekptosi = 20;

        this.BTim1 = 0.14;
        this.TBTim1 = this.BTim1 - this.BTim1 * (this.Ekptosi / 100);
        this.TTim1 = this.BTim1 + this.MDvalue;

        this.BTim2 = "";
        this.TBTim2 = this.BTim2 - this.BTim2 * (this.Ekptosi / 100);//this.MDvalue + this.BTim2;
        this.TTim2 = this.TBTim2 + this.MDvalue;

        this.BTnu = 0.14;
        this.TBTnu = this.BTnu - this.BTnu * (this.Ekptosi / 100);
        this.TTnu = this.BTnu + this.MDvalue;

        this.EkSun = 0.08000;
        this.pagio = 4.00;

        this.ERT = 2.96;
        this.tt2 = '<div class="right"><h3>Η Τελική τιμή ημέρας 0-500 kWh/μήνα προκύπτει ως εξής:</h3>\n' +
            '<p>στο ③ προσθέτουμε το ①</p>\n' +
            '<p>δηλαδή στην Βασική τιμή ημέρας 0-500 kWh/μήνα③ προσθέτουμε τον Μηχανισμό Διακύμανσης ①</p><i></i></div></div>';

        this.tt4 = '<div class="right"><h3>Τελική τιμή νύχτας προκύπτει ως εξής:</h3>\n' +
            '<p>στο ④ προσθέτουμε το ①</p>\n' +
            '<p>δηλαδή στην Βασική τιμή νύχτας ④ προσθέτουμε τον Μηχανισμό Διακύμανσης①</p><i></i></div></div>';

        // set two cell green because the program is green
        this.table.rows[0].cells[1].style.backgroundColor = "green";
        this.table.rows[1].cells[1].style.backgroundColor = "green";

        this.print = function () {
            //console.log("DEH_myHome4All_class print was called!!" + "MinKatIm=" + MinKatIm);
            // document.getElementById("#MinKatIm").innerHTML=MinKatIm;
            //document.getElementById("#MinKatNu").innerHTML=MinKatNu;
            let col = 1;
            this.table.rows[0].cells[1].innerHTML = this.parohos;
            //this.table.rows[1].cells[1].innerHTML = this.programmaName;

            this.table.rows[1].cells[1].innerHTML = '<a href="' + this.programmaLink + '" target="_blank">' + this.programmaName + '</a>';

            this.table.rows[2].cells[1].innerHTML = this.alfa.toLocaleString();
            this.table.rows[3].cells[1].innerHTML = this.vita.toLocaleString();
            this.table.rows[4].cells[1].innerHTML = this.Lu.toLocaleString();
            this.table.rows[5].cells[1].innerHTML = this.Li.toLocaleString();

            this.table.rows[6].cells[1].innerHTML = this.MDvalue.toLocaleString(undefined, {
                minimumFractionDigits: 5
            }) + ' €/kWh' + ' <a href="' + this.MDlink + '" target="_blank">'
                + '<span class="red bld circledNumber">①</span></a>';

            this.table.rows[7].cells[1].innerHTML = '';/*this.Ekptosi.toLocaleString(undefined, {
                minimumFractionDigits: 0
            }) + "%" + "<span class='red bld circledNumber'>②</span>" + "</span>";*/

            this.table.rows[8].cells[1].innerHTML = this.BTim1.toLocaleString(undefined, {
                minimumFractionDigits: 5
            }) + " €/kWh " + " <span class='red bld circledNumber'>③</span>" + "</span>";


            /*this.table.rows[9].cells[1].innerHTML = ttpre + "<span class='circledNumber'>③-②=</span>" + this.TBTim1.toLocaleString(undefined, {
                minimumFractionDigits: 5
            }) + " €/kWh " + " <span class='red bld circledNumber'>④</span>" + "</span>" + tt1;*/

            this.table.rows[9].cells[1].innerHTML = "";            

            this.table.rows[10].cells[1].innerHTML = ttpre + "<span class='circledNumber'>③+①=</span>" + this.TTim1.toLocaleString(undefined, {
                minimumFractionDigits: 5
            }) + " €/kWh " + this.tt2;


            this.table.rows[11].cells[1].innerHTML = "";
            this.table.rows[12].cells[1].innerHTML = "";
            this.table.rows[13].cells[1].innerHTML = "";            

            var BTnu = this.BTnu.toLocaleString(undefined, {
                minimumFractionDigits: 5
            }) + " €/kWh <span class='circledNumber red bld'>④</span>";
            this.table.rows[14].cells[1].innerHTML = BTnu;

            /*var TBTnu = this.TBTnu.toLocaleString(undefined, { minimumFractionDigits: 5 });
            TBTnu = TBTnu + " €/kWh" + "<span class='red bld circledNumber'>⑥</span>";
            this.table.rows[15].cells[1].innerHTML = TBTnu;*/

            this.table.rows[15].cells[1].innerHTML = "";

            var TTnu = ttpre + "<span class='circledNumber'>④+①=</span>" + this.TTnu.toLocaleString(undefined, {
                minimumFractionDigits: 5
            }) + " €/kWh" + this.tt4;
            this.table.rows[16].cells[1].innerHTML = TTnu;

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
            this.table.rows[26].cells[1].innerHTML = this.MinSunMeDor.toLocaleString(undefined, { minimumFractionDigits: 0 }) + " €";

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