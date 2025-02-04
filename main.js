('Todas as Medidas colocadas terão que ser em GRAMAS(g)')
function handleSubmit(event) {
    event.preventDefault();

    const pi = parseFloat(document.getElementById("pi").value);
    const pf = parseFloat(document.getElementById("pf").value);
    const Au = parseFloat(document.getElementById("Au").value);
    const Ag = parseFloat(document.getElementById("Ag").value);
    const Cu = parseFloat(document.getElementById("Cu").value);
    const Zn = parseFloat(document.getElementById("Zn").value);



    const resAu1 = pi * (Au / 100);
    const resAg1 = pi * (Ag / 100);
    const resCu1 = pi * (Cu / 100);
    const resZn1 = pi * (Zn / 100);



    const resAu2 = pf * 0.7505;
    const resAg2 = pf * 0.11975;
    const resCu2 = pf * 0.11975;
    const resZn2 = pf * 0.01;


    const resulAu = resAu2 - resAu1;
    const resulAg = resAg2 - resAg1;
    const resulCu = resCu2 - resCu1;
    const resulZn = resZn2 - resZn1;


    const resultadosDiv = document.getElementById("resultados");
    const resultados = resultadosDiv.innerHTML = `
        <p>Resultado Au: ${resulAu.toFixed(3)}g</p>
        <p>Resultado Ag: ${resulAg.toFixed(3)}g</p>
        <p>Resultado Cu: ${resulCu.toFixed(3)}g</p>
        <p>Resultado Zn: ${Math.abs(resulZn).toFixed(3)}g</p>
        `;

}
document.getElementById("formCalculo").addEventListener("submit", function (event) {
    event.preventDefault();

    // Pega os valores dos inputs
    const ouroDescartado = parseFloat(document.getElementById('ouroDescartado').value) || 0;
    const ouroFinal = parseFloat(document.getElementById('ouroFinal').value) || 0;
    const teor = parseFloat(document.getElementById('teor').value) / 100 || 0;

    // Se algum valor for inválido, não prossegue
    if (isNaN(ouroDescartado) || isNaN(ouroFinal) || isNaN(teor)) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    // Cálculos corrigidos
    const Auf = ouroDescartado * teor;
    const FlexD = ouroDescartado - Auf;
    const AufFinal = ouroFinal * 0.416;
    const flexF = ouroFinal - AufFinal;
    const AcreAuf = AufFinal - Auf;
    const acreFlex = flexF - FlexD;

    // Exibe os resultados
    document.getElementById("resultadoAu").textContent = `Resultado Au: ${AcreAuf.toFixed(3)}g`;
    document.getElementById("resultadoAg").textContent = `Resultado Flex: ${acreFlex.toFixed(3)}g`;
    document.getElementById("resultados2").style.display = "block";
});




document.getElementById("formOuroBranco").addEventListener("submit", function (event) {
    event.preventDefault();

    const AuB = parseFloat(document.getElementById('AuB').value) || 0;
    const piB = parseFloat(document.getElementById('piB').value) || 0;
    const tF = parseFloat(document.getElementById('tF').value) || 0;
    const pFB = parseFloat(document.getElementById('pFB').value) || 0;

    const AuBp = piB * (AuB / 100);
    const AgBp = piB * 0.0185;
    const CuBp = piB * 0.031;
    const BrBp = AuBp + AgBp + CuBp - piB;

    const AuBF = pFB * (tF / 100);
    const AgBF = pFB * 0.0185;
    const CuBF = pFB * 0.031;
    const BrBF = AuBF + AgBF + CuBF - pFB;

    const acreAuB = AuBF - AuBp;
    const acreAgB = AgBF - AgBp;
    const acreCuB = CuBF - CuBp;
    const acreBrB = BrBF - BrBp;

    document.getElementById("resultadoAuB").textContent = `Resultado Au: ${acreAuB.toFixed(3)}g`;
    document.getElementById("resultadoAgB").textContent = `Resultado Ag: ${acreAgB.toFixed(3)}g`;
    document.getElementById("resultadoCuB").textContent = `Resultado Cu: ${acreCuB.toFixed(3)}g`;
    document.getElementById("resultadoBrB").textContent = `Resultado Br: ${Math.abs(acreBrB).toFixed(3)}g`;

    document.getElementById("resultados4").style.display = "block";
});