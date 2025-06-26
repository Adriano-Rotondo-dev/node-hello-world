import chalk from "chalk";
import axios from 'axios';
console.log(axios.isCancel('axios is not working'));

const name = process.argv[2] ??  "World";
console.log("Hello " + name)
console.log(process.argv);


console.log(chalk.bold.green(name));
console.log(chalk.red.underline(process.env.secret_password));

axios.get('https://lanciweb.github.io/demo/api/pictures/')
.then ( response => {
    const result = response.data;
    console.log(result)
})
.catch(error => {
    console.error(error.name)
})
.finally ( ()=> {
    console.log(chalk.bgYellow('The Ajax request with Axios is working'))
})

