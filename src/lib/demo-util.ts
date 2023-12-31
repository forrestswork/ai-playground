const path = require('path');
const fs = require('fs');
const demoPath = 'src/app/demos';

// list all demos
export const list = () => {
    const demos = fs.readdirSync(demoPath);
    return demos.map(demo => get(demo));
}

// load demo configuration
export const get = (id: string) => {
    const configPath = path.join(demoPath, id, 'config.json');
    const configFile = fs.readFileSync(configPath);
    const config = JSON.parse(configFile);
    return {
        ...config,
        path: 'demos/' + id
    }
}
