var turun, naik, banyak, sedikit;
var psedikit = Number(document.getElementById("pro2").value);
var pbanyak = Number(document.getElementById("pro1").value);
var r1,r2,r3,r4;
var y1,y2,y3,y4;
var frekuensi, gtengah;
var hasil_produksi;
var x1 = Number(document.getElementById("pr1").value);
var x2 = Number(document.getElementById("pr2").value);
var inp1 = document.getElementById("inp1").value;
var inp2 = document.getElementById("inp2").value;
var z1 = Number(document.getElementById("ps1").value);
var z2 = Number(document.getElementById("ps2").value);


function proses(){
    pbanyak = Number(document.getElementById("pro1").value);
    psedikit = Number(document.getElementById("pro2").value);
    graph1();
    graph2();

    console.log("--------Rulenya Bro-------------");
    rule(turun,naik,banyak,sedikit);
    // Variable Rule
    console.log(r1);
    console.log(r2);
    console.log(r3);
    console.log(r4);

    console.log(naik);
    console.log(turun);

    console.log("--------X Bro-------------");
 
    nyari_x(psedikit,pbanyak,r1,r2,r3,r4);
    // Variable X
    console.log(y1);
    console.log(y2);
    console.log(y3);
    console.log(y4);

    console.log("--------frekuensinya Bro-------------");
    frekuensif(r1,r2,r3,r4,y1,y2,y3,y4);
    garis_tengah(psedikit,pbanyak);
    // Variable Frekuensi
    console.log(frekuensi);
    console.log(gtengah);

    if (frekuensi < gtengah) {
        hasil_produksi = "Tingkat Produksi termasuk sedikit";
    } else {
        hasil_produksi = "Tingkat Produksi termasuk banyak";
    }
    
    document.getElementById("hasil").value = hasil_produksi;

    var ctx = document.getElementById('myChart3').getContext('2d');
    var myChart3 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['', '', ''],
            datasets: [{
                label: 'Besar',
                data: [ pbanyak,gtengah, psedikit],

                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },{
                label: 'Kecil',
                data: [psedikit,gtengah, pbanyak],
                
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },{
                label: 'Produksi',
                data: [frekuensi, frekuensi,frekuensi],
                borderColor: [
                    '#0000FF'
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    // Detailnya Bro
    h4r4
    // Rule
    document.getElementById("r1i1").innerHTML = inp1 ;
    document.getElementById("r1i2").innerHTML = inp2 ;
    document.getElementById("r2i1").innerHTML = inp1 ;
    document.getElementById("r2i2").innerHTML = inp2 ;
    document.getElementById("r3i1").innerHTML = inp1 ;
    document.getElementById("r3i2").innerHTML = inp2 ;
    document.getElementById("r4i1").innerHTML = inp1 ;
    document.getElementById("r4i2").innerHTML = inp2 ;
    // R1
    document.getElementById("v1r1").innerHTML = turun ;
    document.getElementById("v2r1").innerHTML = banyak ;
    document.getElementById("h1r1").innerHTML = r1 ;
    document.getElementById("h1r1v2").innerHTML = r1 ;
    document.getElementById("h1r1v3").innerHTML = r1 ;
    document.getElementById("p1r1").innerHTML = pbanyak ;
    document.getElementById("p1r1v2").innerHTML = pbanyak ;
    document.getElementById("p1r1v3").innerHTML = pbanyak ;
    document.getElementById("p2r1").innerHTML = psedikit ;
    document.getElementById("hp1r1").innerHTML = pbanyak - psedikit ;
    document.getElementById("hp2r1").innerHTML = y1 ;
    
    // R2
    document.getElementById("v1r2").innerHTML = turun ;
    document.getElementById("v2r2").innerHTML = sedikit ;
    document.getElementById("h2r2").innerHTML = r2 ;
    document.getElementById("h2r2v2").innerHTML = r2 ;
    document.getElementById("h2r2v3").innerHTML = r2 ;
    document.getElementById("p1r2").innerHTML = pbanyak ;
    document.getElementById("p1r2v2").innerHTML = pbanyak ;
    document.getElementById("p1r2v3").innerHTML = pbanyak ;
    document.getElementById("p2r2").innerHTML = psedikit ;
    document.getElementById("hp1r2").innerHTML = pbanyak - psedikit ;
    document.getElementById("hp2r2").innerHTML = y2 ;
    // R3
    document.getElementById("v1r3").innerHTML = naik ;
    document.getElementById("v2r3").innerHTML = banyak;
    document.getElementById("h3r3").innerHTML = r3 ;
    document.getElementById("h3r3v2").innerHTML = r3 ;
    document.getElementById("h3r3v3").innerHTML = r3 ;
    document.getElementById("p1r3").innerHTML = pbanyak ;
    document.getElementById("p1r3v2").innerHTML = pbanyak ;
    document.getElementById("p1r3v3").innerHTML = pbanyak ;
    document.getElementById("p2r3").innerHTML = psedikit ;
    document.getElementById("hp1r3").innerHTML = pbanyak - psedikit ;
    document.getElementById("hp2r3").innerHTML = y3 ;
    // R4
    document.getElementById("v1r4").innerHTML = naik ;
    document.getElementById("v2r4").innerHTML = sedikit ;
    document.getElementById("h4r4").innerHTML = r4 ;
    document.getElementById("h4r4v2").innerHTML = r4 ;
    document.getElementById("h4r4v3").innerHTML = r4 ;
    document.getElementById("p1r4").innerHTML = pbanyak ;
    document.getElementById("p1r4v2").innerHTML = pbanyak ;
    document.getElementById("p1r4v3").innerHTML = pbanyak ;
    document.getElementById("p2r4").innerHTML = psedikit ;
    document.getElementById("hp1r4").innerHTML = pbanyak - psedikit ;
    document.getElementById("hp2r4").innerHTML = y4 ;


    // Final
    document.getElementById("hr1").innerHTML = r1 ;
    document.getElementById("hr2").innerHTML = r2 ;
    document.getElementById("hr3").innerHTML = r3 ;
    document.getElementById("hr4").innerHTML = r4 ;

    document.getElementById("hr1v2").innerHTML = r1 ;
    document.getElementById("hr2v2").innerHTML = r2 ;
    document.getElementById("hr3v2").innerHTML = r3 ;
    document.getElementById("hr4v2").innerHTML = r4 ;

    document.getElementById("hx1").innerHTML = y1 ;
    document.getElementById("hx2").innerHTML = y2 ;
    document.getElementById("hx3").innerHTML = y3 ;
    document.getElementById("hx4").innerHTML = y4 ;

    document.getElementById("final").innerHTML = frekuensi ;
    document.getElementById("kesimpulan").innerHTML = hasil_produksi;


}

function rumus_permintaan(v1,v2,inp){
    turun = (v1-inp) / (v1-v2);
    naik = (inp-v2) / (v1-v2);
    
}

function rumus_persediaan(v1,v2,inp){
    sedikit = (v1-inp) / (v1-v2);
    banyak = (inp-v2) / (v1-v2);
    
}

function rule(turun, naik, banyak, sedikit){
    if (turun > banyak) {
        r1 = turun;
    } else {
        r1 = banyak;
    }

    if (turun > sedikit) {
        r2 = turun;
    } else {
        r2 = sedikit;
    }

    if (naik > banyak) {
        r3 = naik;
    } else {
        r3 = banyak;
    }

    if (naik > sedikit) {
        r4 = naik;
    } else {
        r4 = sedikit;
    }
}

function nyari_x(psedikit, pbanyak, r1, r2, r3, r4 ){
    y1 = pbanyak - (r1 * (pbanyak-psedikit));
    y2 = pbanyak - (r2 * (pbanyak-psedikit));
    y3 = pbanyak - (r3 * (pbanyak-psedikit));
    y4 = pbanyak - (r4 * (pbanyak-psedikit));
}

function frekuensif(r1, r2, r3, r4, y1, y2, y3, y4){
    frekuensi = ((r1*y1)+(r2*y2)+(r3*y3)+(r4*y4)) / (r1+r2+r3+r4);
}

function garis_tengah(psedikit, pbanyak) {
    gtengah = ((pbanyak - psedikit) / 2) + psedikit;
}


// Chart Permintaan


function graph1() {
    x1 = Number(document.getElementById("pr1").value);
    x2 = Number(document.getElementById("pr2").value);
    inp1 = document.getElementById("inp1").value;
    // Variable Permintaan
    rumus_permintaan(x1,x2,inp1);
    console.log(turun);
    console.log(naik);
    garis_tengah(x2,x1);

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['', '', ''],
            datasets: [{
                label: 'Besar',
                data: [ x1,gtengah,x2],

                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },{
                label: 'Kecil',
                data: [x2,gtengah, x1],
                
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },{
                label: 'Permintaan',
                data: [inp1, inp1,inp1],
                borderDash: [5,5],
                fill:false,
                borderColor: [
                    '#0000FF'
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function graph2() {
    z1 = Number(document.getElementById("ps1").value);
    z2 = Number(document.getElementById("ps2").value);
    inp2 = document.getElementById("inp2").value;
    // Variable Persediaan
    rumus_persediaan(z1,z2,inp2);
    console.log(sedikit);
    console.log(banyak);
    garis_tengah(z2,z1);


    var ctx = document.getElementById('myChart2').getContext('2d');
    var myChart2 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['', '', ''],
            datasets: [{
                label: 'Banyak',
                data: [ z1,gtengah, z2],

                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },{
                label: 'Sedikit',
                data: [z2,gtengah, z1],
                
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },{
                label: 'Persediaan',
                data: [inp2, inp2, inp2],
                borderDash: [5,5],
                fill:false,
                borderColor: [
                    '#0000FF'
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}













