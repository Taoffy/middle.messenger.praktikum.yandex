export function getTimeForChat(time: string) {
    const passedDate = new Date(time);
    const nowDate = new Date();

    if (passedDate.getDate() === nowDate.getDate() && passedDate.getMonth() === nowDate.getMonth()) {
        return `${passedDate.getHours()}:${passedDate.getMinutes()}`;
    }

    return `${passedDate.toDateString().slice(0, 3)}`;
}
