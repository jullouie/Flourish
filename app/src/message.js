if (points % 50 == 0 || points % 50 == 5 || points % 50 == 15 || points % 50 == 20)
setUnlockMessage("Congatulations, you unlocked a plant!")
setTimeout(() => setUnlockMessage(""), 1000)

if (points > 50)
setUnlockMessage("Congatulations, you have enough points to buy a plant!")
setTimeout(() => setUnlockMessage(""), 1000)