import fs from 'fs';
export default class DataStore {

    public static async writeFile(file: string, data: any) {

        let a = await fs.writeFile("data.json", JSON.stringify(data), err => {

            // Checking for errors 
            if (err) throw err;

            console.log("Done writing"); // Success 
        });
        return a;
    }
}

