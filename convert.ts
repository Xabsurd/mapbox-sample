import fs from "fs";
const source_path =
  "D:/Users/absur/Downloads/Geolife Trajectories 1.3/Data/174/Trajectory/20080324085343.plt";
const output_path = "./output.json";

fs.readFile(source_path, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const lines = data.toString().split("\n");
  const output:string[] = [];
  let start = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if(line.length<=2&&line.substring(0,1)==='0'){
        start=true;
        continue;
    }
    if(start&&line.length>2&&i<50&&i>=20){
        output.push(line.replace('\r','').replace('\n','').split(",") as string);
    }
    
  }

  fs.writeFileSync(output_path, JSON.stringify(output));
});
