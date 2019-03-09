
// sorts according to score and if score is equal, then sorts according to lastname
const sortPlayers = (playerData) => {
    for (let i = 0; i < playerData.length; i++) {
        for (let j = i + 1; j < playerData.length; j++) {
            if (playerData[i].score > playerData[j].score) {
                let temp = playerData[i];
                playerData[i] = playerData[j];
                playerData[j] = temp;
            }
            else if (playerData[i].score === playerData[j].score) {
                if (playerData[i].lastName > playerData[j].lastName) {
                    let temp2 = playerData[i];
                    playerData[i] = playerData[j];
                    playerData[j] = temp2;
                }
            }
        }
    }
    return (playerData);
}

export default sortPlayers;
