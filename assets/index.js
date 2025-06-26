import chalk from "chalk";
import axios from 'axios';
console.log(axios.isCancel('axios is not working'));

const hello = "Hello Boolean";

console.log(chalk.bold.green(hello));
console.log(chalk.red.underline(process.env.secret_password));

axios.get('https://lanciweb.github.io/demo/api/pictures/')
.then ( response => {
    const result = response.data;
    console.log(result)
})
.catch(error => {
    console.error(error)
})
.then ( ()=> {
    console.log(chalk.bgYellow('The Ajax request with Axios is working'))
})
