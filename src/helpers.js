const getScore = (id,voters) => {
    let voterArray = [];
    for (let key in voters) {
        voterArray.push(voters[key])
    }
    return voterArray.reduce((score,voter) => {
        if(id === voter.vote){
            score++;
        }
        return score;
    },0)
}

export const checkPreferred = (id,voters,options) => {
    return options.reduce((more,option) => {
        if(id !== option){
            return more && (getScore(id,voters) > getScore(option,voters));
        }
        return more;
    },true)
}