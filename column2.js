class DEH_myHome4All_class { 
    constructor() {                     
        this.table= tables[2];
        this.color="yellow";
        this.parohos = "ΔΕΗ";
        this.programmaName = "myHome 4All";
        this.programmaLink = "https://www.dei.gr/media/j24h3glp/myhome4all_2024_jan24v2.pdf";
        this.alfa = 1.15;
        this.vita = 0;
        this.Lu = 0.10;
        this.Li = 0.090;        
        this.MDlink = "https://www.dei.gr/media/h2xmruoc/paradeigma-mhchanismou-diakumanshs.pdf";        
        this.Ekptosi = 20;

        this.BTim1 = 0.155;   
        this.TBTim1 = this.BTim1 - this.BTim1 * (this.Ekptosi / 100);
        this.TTim1 = this.TBTim1 + this.MDvalue ;
        
        this.BTim2 = 0.211;
        this.TBTim2 = this.BTim2-this.BTim2*(this.Ekptosi / 100);//this.MDvalue + this.BTim2;
        this.TTim2 = this.TBTim2 + this.MDvalue ;

        this.BTnu = 0.129;
        this.TBTnu =  this.BTnu-this.BTnu*(this.Ekptosi / 100);
        this.TTnu = this.MDvalue + this.TBTnu;

        this.EkSun = 0.00000;
        this.pagio = 5.00;
        
        this.ERT = 2.96;        

        // set two cell green because the program is yellow
        this.table.rows[0].cells[1].style.backgroundColor = "yellow";
        this.table.rows[1].cells[1].style.backgroundColor = "yellow";

        this.tt9 = '<div class="right"><h3>Η Τελική βασική τιμή ημέρας 0-500 kWh/μήνα προκύπτει ως εξής:</h3>\n' +
            '<p>από το ③ αφαιρούμε το ②</p>\n' +
            '<p>δηλαδή αφαιρούμε από τη Βασική τιμή ημέρας 0-500 kWh/μήνα③ την Έκπτωση②</p><i></i></div></div>';
        this.tt10 = '<div class="right"><h3>Η Τελική τιμή ημέρας 0-500 kWh/μήνα προκύπτει ως εξής:</h3>\n' +
            '<p>στο ④ προσθέτουμε το ①</p>\n' +
            '<p>δηλαδή στην Τελική βασική τιμή ημέρας 0-500 kWh/μήνα④ προσθέτουμε τον Μηχανισμό Διακύμανσης ①</p><i></i></div></div>';
        this.tt12 = '<div class="right"><h3>Τελική βασική τιμή ημέρας >500 kWh προκύπτει ως εξής:</h3>\n' +
            '<p>από το ⑤ αφαιρούμε το ②</p>\n' +
            '<p>δηλαδή από την Βασική τιμή ημέρας >500 kWh/μήνα⑤ αφαιρούμε την έκπτωση ②</p><i></i></div></div>';
        this.tt13 = '<div class="right"><h3>Τελική τιμή ημέρας >500 kWh (€/kWh) προκύπτει ως εξής:</h3>\n' +
            '<p>στο ⑥ προσθέτουμε το ①</p>\n' +
            '<p>δηλαδή στην Τελική βασική τιμή ημέρας >500 kWh ⑥ προσθέτουμε τον Μηχανισμό Διακύμανσης①</p><i></i></div></div>';
        this.tt15 = '<div class="right"><h3>Τελική Βασική τιμή νύχτας προκύπτει ως εξής:</h3>\n' +
            '<p>από το ⑦ αφαιρούμε το ②</p>\n' +
            '<p>δηλαδή από την Βασική τιμή νύχτας ⑦ αφαιρούμε την έκπτωση ②</p><i></i></div></div>';
        this.tt16 = '<div class="right"><h3>Τελική τιμή νύχτας προκύπτει ως εξής:</h3>\n' +
            '<p>στο ⑧ προσθέτουμε το ①</p>\n' +
            '<p>δηλαδή στην Τελική Βασική τιμή νύχτας ⑧ προσθέτουμε τον Μηχανισμό Διακύμανσης①</p><i></i></div></div>';

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
            
            this.table.rows[6].cells[1].innerHTML = this.MDvalue.toLocaleString(undefined, {minimumFractionDigits: 5
            }) + ' €/kWh' + ' <a href="' + this.MDlink + '" target="_blank">' 
            + '<span class="red bld circledNumber">①</span></a>'; 

            this.table.rows[7].cells[1].innerHTML = this.Ekptosi.toLocaleString(undefined, {
                minimumFractionDigits: 0
            }) + "%" + "<span class='red bld circledNumber'>②</span>" + "</span>";

            this.table.rows[8].cells[1].innerHTML = this.BTim1.toLocaleString(undefined, {
                minimumFractionDigits: 5
            }) + " €/kWh " + " <span class='red bld circledNumber'>③</span>" + "</span>";


            this.table.rows[9].cells[1].innerHTML = ttpre + "<span class='circledNumber'>③-②=</span>" + this.TBTim1.toLocaleString(undefined, {
                minimumFractionDigits: 5
            }) + " €/kWh " + " <span class='red bld circledNumber'>④</span>" + "</span>" + this.tt9;


            var TTim = this.BTim1 - this.BTim1 * (this.Ekptosi / 100) + this.MDvalue;
            this.table.rows[10].cells[1].innerHTML = ttpre + "<span class='circledNumber'>④+①=</span>" + TTim.toLocaleString(undefined, {
                minimumFractionDigits: 5
            }) + " €/kWh " + this.tt10;


            var BTim2 = this.BTim2.toLocaleString(undefined, { minimumFractionDigits: 5 });
            BTim2 = BTim2 + " €/kWh" + "<span class='red bld circledNumber'>⑤</span>" + "</span>";
            this.table.rows[11].cells[1].innerHTML = BTim2;

            var TBTim2 = this.TBTim2;
            this.table.rows[12].cells[1].innerHTML = ttpre + "<span class='circledNumber'>⑤-②=</span>" + TBTim2.toLocaleString(undefined, {
                minimumFractionDigits: 5
            }) + " €/kWh" + makeSpan(6,'','',true,true,true) + this.tt12;


            var TTim2 = ttpre + makeSpan(6,'+',1,false,false,true) + this.TTim2.toLocaleString(undefined, { minimumFractionDigits: 5 });
            this.table.rows[13].cells[1].innerHTML = TTim2 + " €/kWh" + this.tt13;

            var BTnu = this.BTnu.toLocaleString(undefined, {minimumFractionDigits: 5}) + " €/kWh";
            this.table.rows[14].cells[1].innerHTML = BTnu + makeSpan(7,'','',true,true,true);

            var TBTnu =  this.TBTnu.toLocaleString(undefined, { minimumFractionDigits: 5 });            
            this.table.rows[15].cells[1].innerHTML = ttpre + makeSpan(7, '-', 2, false, false, true) + TBTnu + makeSpan(8,'','',true,true,true) + this.tt15;;

            var TTnu = ttpre + "<span class='circledNumber'>⑧+①=</span>" + this.TTnu.toLocaleString(undefined, {
                minimumFractionDigits: 5
            }) + " €/kWh" + this.tt16;
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
    get HrePro(){
        //return (MinKatIm > 500 ? (MinKatIm - 500) * this.TTim2 + 500 * this.TTim1 + MinKatNu * this.TTnu : MinKatIm * this.TTim1 + MinKatNu * this.TTnu) + this.pagio;
        return getHrePro(this);
    } 
    get EFK(){
         return (0.0022 * (MinKatIm + MinKatNu));
    }

    get RuthmHre (){
        return getRythmHre();
    }

    // Backticks `Apples `
    get DETE(){
         return (0.005 * (this.HrePro + this.RuthmHre + this.EFK - 0.017 * (MinKatIm + MinKatNu)));
    }
    get FPA(){
        return((this.HrePro + this.RuthmHre + this.EFK) * 0.06);
    }
    get MinSun(){ 
        return(this.HrePro + this.RuthmHre + this.EFK + this.DETE + this.FPA + this.ERT);
    }
    get MinSunMeDor(){
        return(this.HrePro + this.RuthmHre + this.EFK + this.DETE + this.FPA + this.ERT);
    }    
}