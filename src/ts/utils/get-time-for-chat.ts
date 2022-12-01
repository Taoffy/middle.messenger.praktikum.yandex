export function getTimeForChat(time: string) {
    const passedDate = new Date(time);
    const nowDate = new Date();
    const minutes = passedDate.getMinutes() < 10 ? `0${passedDate.getMinutes()}` : passedDate.getMinutes()

    if (passedDate.getDate() === nowDate.getDate() && passedDate.getMonth() === nowDate.getMonth()) {
        return `${passedDate.getHours()}:${minutes}`;
    }

    return `${passedDate.toDateString().slice(0, 3)}`;
}
