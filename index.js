function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity) {
    if (activity === undefined) {
        activity = "go to the office"
    }
    return `This Monday, I will ${activity}.`;
};
    
function wrapAdjective(wrapper) {
    return function(adjective) {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    };
}