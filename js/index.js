/**
 * Functions
 */
function showDate() {
  const weekNames = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
  ];
  const monthsNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  const now = new Date();
  const day = now.getDate();
  const dayWeek = weekNames[now.getDay()];
  const month = monthsNames[now.getMonth()];
  const year = now.getFullYear();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  alert(
    `Hoy es ${dayWeek} ${day} de ${month} de ${year}, y son las ${hours} horas, ${minutes} minutos con ${seconds} segundos.`
  );
}

function showRemainingTime() {
  const now = new Date();
  const year = now.getFullYear();
  const endOfYear = new Date(year, 11, 31, 23, 59, 59);
  const diff = endOfYear - now;

  const HOURS_IN_DAY = 24;
  const MINUTES_IN_HOUR = 60;
  const SECONDS_IN_MINUTE = 60;

  const seconds = Math.floor(diff / 1000) % SECONDS_IN_MINUTE;
  const minutes = Math.floor(diff / (1000 * MINUTES_IN_HOUR)) % MINUTES_IN_HOUR;
  const hours = Math.floor(diff / (1000 * 60 * MINUTES_IN_HOUR)) % HOURS_IN_DAY;
  const days = Math.floor(diff / (1000 * 60 * 60 * HOURS_IN_DAY));

  document.getElementById(
    'time-remaining'
  ).innerHTML = `Faltan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos para que termine el año.`;

}

/**
 * Function execution
 */

setInterval(showRemainingTime, 1000);

window.onload = function () {
  showDate();
};
