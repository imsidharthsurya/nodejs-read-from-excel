// Requiring the module
//run npm install xlsx
const reader = require('xlsx');
const fs=require("fs");

// Reading our test file
const file = reader.readFile('./marks.xlsx')

let data = []

const sheets = file.SheetNames

for(let i = 0; i < sheets.length; i++)
{
const temp = reader.utils.sheet_to_json(
		file.Sheets[file.SheetNames[i]])
temp.forEach((res) => {
	data.push(res)
})
}

fs.writeFileSync("studentJson.json",JSON.stringify(data));
