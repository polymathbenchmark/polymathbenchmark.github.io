function generateTestMiniTable() {
  var data = score_table; // The variable from model_scores.js

  var table = '<table class="js-sort-table" id="results">';
  table += `<tr>
          <td class="js-sort-number"><strong>#</strong></td>
          <td class="js-sort"><strong>Model</strong></td>
          <td class="js-sort"><strong>Method</strong></td>
          <td class="js-sort"><strong>Source</strong></td>
          <td class="js-sort"><strong>Date</strong></td>
          <td class="js-sort-number"><strong>PS</strong></td>
          <td class="js-sort-number"><strong>FC</strong></td>
          <td class="js-sort-number"><strong>PR</strong></td>
          <td class="js-sort-number"><strong>SC</strong></td>
          <td class="js-sort-number"><strong>RR</strong></td>
          <td class="js-sort-number"><strong>MR</strong></td>
          <td class="js-sort-number"><strong>NR</strong></td>
          <td class="js-sort-number"><strong>SR</strong></td>
          <td class="js-sort-number"><strong>OD</strong></td>
          <td class="js-sort-number"><strong>LR</strong></td>
          <td class="js-sort-number js-sort-onload"><strong><u>All</u></strong></td>
      </tr>`;

  var humanPerformance = data['-'];
  table += '<tr>';
  table += `<td>-</td>`;
  table += `<td><b>${humanPerformance.Model}</b></td>`;
  table += `<td>${humanPerformance.Method}</td>`;
  table += `<td><a href="${humanPerformance.Source}" class="ext-link" style="font-size: 16px;">Link</a></td>`;
  table += `<td>${humanPerformance.Date}</td>`;
  table += `<td>${!isNaN(humanPerformance.PS) ? humanPerformance.PS.toFixed(1) : humanPerformance.PS}</td>`;
  table += `<td>${!isNaN(humanPerformance.FC) ? humanPerformance.FC.toFixed(1) : humanPerformance.FC}</td>`;
  table += `<td>${!isNaN(humanPerformance.PR) ? humanPerformance.PR.toFixed(1) : humanPerformance.PR}</td>`;
  table += `<td>${!isNaN(humanPerformance.SC) ? humanPerformance.SC.toFixed(1) : humanPerformance.SC}</td>`;
  table += `<td>${!isNaN(humanPerformance.RR) ? humanPerformance.RR.toFixed(1) : humanPerformance.RR}</td>`;
  table += `<td>${!isNaN(humanPerformance.MR) ? humanPerformance.MR.toFixed(1) : humanPerformance.MR}</td>`;
  table += `<td>${!isNaN(humanPerformance.NR) ? humanPerformance.NR.toFixed(1) : humanPerformance.NR}</td>`;
  table += `<td>${!isNaN(humanPerformance.SR) ? humanPerformance.SR.toFixed(1) : humanPerformance.SR}</td>`;
  table += `<td>${!isNaN(humanPerformance.OD) ? humanPerformance.OD.toFixed(1) : humanPerformance.OD}</td>`;
  table += `<td>${!isNaN(humanPerformance.LR) ? humanPerformance.LR.toFixed(1) : humanPerformance.LR}</td>`;
  table += `<td><b>${!isNaN(humanPerformance.All) ? humanPerformance.All.toFixed(1) : humanPerformance.All}</b></td>`;
  table += '</tr>';

  var modelsToRank = Object.entries(data)
    .filter(([key]) => key !== '-')
    .map(([, value]) => value);

  // Sort models by the 'All' score in descending order
  modelsToRank.sort((a, b) => b.All - a.All);

  var topN = 3;
  for (let i = 0; i < Math.min(modelsToRank.length, topN); i++) {
    const entry = modelsToRank[i];
    table += '<tr>';
    table += `<td>${i + 1}</td>`;
    table += `<td><b class="best-score-text">${entry.Model}</b></td>`;
    table += `<td class="best-score-bg">${entry.Method}</td>`;
    table += `<td class="best-score-bg"><a href="${entry.Source}" class="ext-link" style="font-size: 16px;">Link</a></td>`;
    table += `<td class="best-score-bg">${entry.Date}</td>`;
    table += `<td class="best-score-bg">${!isNaN(entry.PS) ? entry.PS.toFixed(1) : entry.PS}</td>`;
    table += `<td class="best-score-bg">${!isNaN(entry.FC) ? entry.FC.toFixed(1) : entry.FC}</td>`;
    table += `<td class="best-score-bg">${!isNaN(entry.PR) ? entry.PR.toFixed(1) : entry.PR}</td>`;
    table += `<td class="best-score-bg">${!isNaN(entry.SC) ? entry.SC.toFixed(1) : entry.SC}</td>`;
    table += `<td class="best-score-bg">${!isNaN(entry.RR) ? entry.RR.toFixed(1) : entry.RR}</td>`;
    table += `<td class="best-score-bg">${!isNaN(entry.MR) ? entry.MR.toFixed(1) : entry.MR}</td>`;
    table += `<td class="best-score-bg">${!isNaN(entry.NR) ? entry.NR.toFixed(1) : entry.NR}</td>`;
    table += `<td class="best-score-bg">${!isNaN(entry.SR) ? entry.SR.toFixed(1) : entry.SR}</td>`;
    table += `<td class="best-score-bg">${!isNaN(entry.OD) ? entry.OD.toFixed(1) : entry.OD}</td>`;
    table += `<td class="best-score-bg">${!isNaN(entry.LR) ? entry.LR.toFixed(1) : entry.LR}</td>`;
    table += `<td class="best-score-bg"><b>${!isNaN(entry.All) ? entry.All.toFixed(1) : entry.All}</b></td>`;
    table += '</tr>';
  }

  // Add the rest of the models
  for (let i = topN; i < modelsToRank.length; i++) {
    const entry = modelsToRank[i];
    table += '<tr>';
    table += `<td>${i + 1}</td>`;
    table += `<td><b>${entry.Model}</b></td>`;
    table += `<td>${entry.Method}</td>`;
    table += `<td><a href="${entry.Source}" class="ext-link" style="font-size: 16px;">Link</a></td>`;
    table += `<td>${entry.Date}</td>`;
    table += `<td>${!isNaN(entry.PS) ? entry.PS.toFixed(1) : entry.PS}</td>`;
    table += `<td>${!isNaN(entry.FC) ? entry.FC.toFixed(1) : entry.FC}</td>`;
    table += `<td>${!isNaN(entry.PR) ? entry.PR.toFixed(1) : entry.PR}</td>`;
    table += `<td>${!isNaN(entry.SC) ? entry.SC.toFixed(1) : entry.SC}</td>`;
    table += `<td>${!isNaN(entry.RR) ? entry.RR.toFixed(1) : entry.RR}</td>`;
    table += `<td>${!isNaN(entry.MR) ? entry.MR.toFixed(1) : entry.MR}</td>`;
    table += `<td>${!isNaN(entry.NR) ? entry.NR.toFixed(1) : entry.NR}</td>`;
    table += `<td>${!isNaN(entry.SR) ? entry.SR.toFixed(1) : entry.SR}</td>`;
    table += `<td>${!isNaN(entry.OD) ? entry.OD.toFixed(1) : entry.OD}</td>`;
    table += `<td>${!isNaN(entry.LR) ? entry.LR.toFixed(1) : entry.LR}</td>`;
    table += `<td><b>${!isNaN(entry.All) ? entry.All.toFixed(1) : entry.All}</b></td>`;
    table += '</tr>';
  }

  table += '</table>';
  document.getElementById('testmini_leaderboard').innerHTML = table;
}

// Call the function when the window loads
document.addEventListener("DOMContentLoaded", generateTestMiniTable);