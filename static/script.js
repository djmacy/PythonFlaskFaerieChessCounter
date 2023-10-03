const pawn = document.getElementById("pawn");
const peasant = document.getElementById("peasant");
const soldier = document.getElementById("soldier");
const rook = document.getElementById("rook");
const knight = document.getElementById("knight");
const bishop = document.getElementById("bishop");
const catapult = document.getElementById("catapult");
const chamberlain = document.getElementById("chamberlain");
const courtesan = document.getElementById("courtesan");
const herald = document.getElementById("herald");
const inquisitor = document.getElementById("inquisitor");
const lancer = document.getElementById("lancer");
const pontiff = document.getElementById("pontiff");
const thief = document.getElementById("thief");
const tower = document.getElementById("tower");
const queenOrJester = document.getElementById("queen");
const kingOrRegent = document.getElementById("king");

const pawnPoints = 1;
const peasantPoints = 2;
const soldierPoints = 3;
const rookPoints = 9;
const knightPoints = 4;
const bishopPoints = 6;
const catapultPoints = 3;
const chamberlainPoints = 6;
const courtesanPoints = 6;
const heraldPoints = 6;
const inquisitorPoints = 8;
const lancerPoints = 5;
const pontiffPoints = 8;
const thiefPoints = 5;
const towerPoints = 10;
const queenPoints = 12;
const jesterPoints = 12;
const kingPoints = 0;
const regentPoints = 15;

pawn.addEventListener("change", updateRank1Label);
peasant.addEventListener("change", updateRank1Label);
soldier.addEventListener("change", updateRank1Label);
pawn.addEventListener("change", updateTotalPoints);
peasant.addEventListener("change", updateTotalPoints);
soldier.addEventListener("change", updateTotalPoints);
rook.addEventListener("change", updateRank2Label);
knight.addEventListener("change", updateRank2Label);
bishop.addEventListener("change", updateRank2Label);
catapult.addEventListener("change", updateRank2Label);
chamberlain.addEventListener("change", updateRank2Label);
courtesan.addEventListener("change", updateRank2Label);
herald.addEventListener("change", updateRank2Label);
inquisitor.addEventListener("change", updateRank2Label);
lancer.addEventListener("change", updateRank2Label);
pontiff.addEventListener("change", updateRank2Label);
thief.addEventListener("change", updateRank2Label);
tower.addEventListener("change", updateRank2Label);
rook.addEventListener("change", updateTotalPoints);
knight.addEventListener("change", updateTotalPoints);
bishop.addEventListener("change", updateTotalPoints);
catapult.addEventListener("change", updateTotalPoints);
chamberlain.addEventListener("change", updateTotalPoints);
courtesan.addEventListener("change", updateTotalPoints);
herald.addEventListener("change", updateTotalPoints);
inquisitor.addEventListener("change", updateTotalPoints);
lancer.addEventListener("change", updateTotalPoints);
pontiff.addEventListener("change", updateTotalPoints);
thief.addEventListener("change", updateTotalPoints);
tower.addEventListener("change", updateTotalPoints);
queen.addEventListener("change", updateTotalPoints);
king.addEventListener("change", updateTotalPoints);

//Difficulty Assignments
const difficulty = document.getElementById("difficulty");

const difficultyPoints = {
  Beginner: 65,
  Intermediate: 70,
  Advanced: 75
};

difficulty.addEventListener("change", updateTotalPoints);

function updateRank1Label() {
    const pawnsSelected = parseInt(pawn.value);
    const peasantsSelected = parseInt(peasant.value);
    const soldiersSelected = parseInt(soldier.value);

    const totalSelected = pawnsSelected + peasantsSelected + soldiersSelected;
    const piecesLeft = 8 - totalSelected;

    document.getElementById("rank1Label").textContent = `Rank I Pieces Left: ${piecesLeft}`;
}

function updateRank2Label() {
    const rooksSelected = parseInt(rook.value);
    const knightsSelected = parseInt(knight.value);
    const bishopsSelected = parseInt(bishop.value);
    const catapultsSelected = parseInt(catapult.value);
    const chamberlainsSelected = parseInt(chamberlain.value);
    const courtesansSelected = parseInt(courtesan.value);
    const heraldsSelected = parseInt(herald.value);
    const inquisitorsSelected = parseInt(inquisitor.value);
    const lancersSelected = parseInt(lancer.value);
    const pontiffsSelected = parseInt(pontiff.value);
    const thievesSelected = parseInt(thief.value);
    const towersSelected = parseInt(tower.value);

    const totalSelected = rooksSelected + knightsSelected + bishopsSelected +
        catapultsSelected + chamberlainsSelected + courtesansSelected +
        heraldsSelected + inquisitorsSelected + lancersSelected +
        pontiffsSelected + thievesSelected + towersSelected;

    const piecesLeft = 6 - totalSelected;

    document.getElementById("rank2Label").textContent = `Rank II Pieces Left: ${piecesLeft}`;
}

function updateTotalPoints() {
    const pawnsSelected = parseInt(pawn.value);
    const peasantsSelected = parseInt(peasant.value);
    const soldiersSelected = parseInt(soldier.value);
    const rooksSelected = parseInt(rook.value);
    const knightsSelected = parseInt(knight.value);
    const bishopsSelected = parseInt(bishop.value);
    const catapultsSelected = parseInt(catapult.value);
    const chamberlainsSelected = parseInt(chamberlain.value);
    const courtesansSelected = parseInt(courtesan.value);
    const heraldsSelected = parseInt(herald.value);
    const inquisitorsSelected = parseInt(inquisitor.value);
    const lancersSelected = parseInt(lancer.value);
    const pontiffsSelected = parseInt(pontiff.value);
    const thievesSelected = parseInt(thief.value);
    const towersSelected = parseInt(tower.value);
    const selectedKingOrRegent = kingOrRegent.value;
    const selectedQueenOrJester = queenOrJester.value;

    const selectedDifficulty = difficulty.value;
    const difficultyPointsValue = difficultyPoints[selectedDifficulty];

    var totalPointsSelected =
        (pawnsSelected * pawnPoints) +
        (peasantsSelected * peasantPoints) +
        (soldiersSelected * soldierPoints) +
        (rooksSelected * rookPoints) +
        (bishopsSelected * bishopPoints) +
        (knightsSelected * knightPoints) +
        (catapultsSelected * catapultPoints) +
        (chamberlainsSelected * chamberlainPoints) +
        (courtesansSelected * courtesanPoints) +
        (inquisitorsSelected * inquisitorPoints) +
        (heraldsSelected * heraldPoints) +
        (lancersSelected * lancerPoints) +
        (pontiffsSelected * pontiffPoints) +
        (thievesSelected * thiefPoints) +
        (towersSelected * towerPoints);

    if (selectedKingOrRegent === "Regent") {
        totalPointsSelected += 15;
    } else {
        totalPointsSelected += 0;
    }
    if (selectedQueenOrJester === "Queen") {
        totalPointsSelected += 12;
    } else {
        totalPointsSelected += 12;
    }

    const pointsLeft = difficultyPointsValue - totalPointsSelected;
    const scoreContainer = document.getElementById("scoreContainer")
    scoreContainer.innerHTML =
        `<br>Total Points: ${totalPointsSelected}
        <br>Points Remaining: ${pointsLeft}`;
}

updateRank1Label();
updateRank2Label();
updateTotalPoints();