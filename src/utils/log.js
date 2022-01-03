function fatal(message) {
  console.log(`\x1b[40m\x1b[31m[ FATAL ]\x1b[0m ${message}`);
}

function error(message) {
  console.log(`\x1b[31m[ ERROR ]\x1b[0m ${message}`);
}

function success(message) {
  console.log(`\x1b[32m[ SUCCESS ]\x1b[0m ${message}`);
}

function info(message) {
  console.log(`\x1b[36m[ INFO ]\x1b[0m ${message}`);
}

function warning(message) {
  console.log(`\x1b[33m[ WARNING ]\x1b[0m ${message}`);
}

export { fatal, error, success, info, warning };
