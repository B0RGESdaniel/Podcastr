
export function convertDurationToTimeString(duration: number) {
    const hours = Math.floor(duration / 3600); // arredonda pra baixo e divide pois o tempo esta vindo em segundos
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    const timeString = [hours, minutes, seconds]
     .map(unit => String(unit).padStart(2, '0')) // função que adiciona '0' caso o número retornado seja por exemplo '1'
     .join(':');

    return timeString;
}