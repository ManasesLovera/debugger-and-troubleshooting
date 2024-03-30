/*
Problem statement: Client that uses this API to store values
complains that saving values doesn't work. 

Apparently, API will say that it saved items, but return
incorrect values when queried. Also, deleting items is erratic,
causing items to "go back in time" or return nonsensical values.
*/

console.log("Estoy ejecutando el programa");

import express, { Request, Response } from "express";
import cors from 'cors';

interface MemoryItem {
  id: string;
  value: Record<string,any>;
}

let itemsMap = new Map<string, MemoryItem>();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/items/:id", (req: Request, res: Response) => {

  if(!itemsMap.has(req.params.id)){
    return res.status(404).json({ error: "Item not found" });
  }
  return res.json(itemsMap.get(req.params.id))
});

app.post("/items/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const value = req.body.value;
  const newItem: MemoryItem = { id, value };

  let item = itemsMap.get(id);

  if(!value || Object.keys(req.body).length === 0){
    return res.status(400).json({ error: "Body is empty or value doesn't exist"});
  }
  else if(item) {
    newItem.value = compareObject(item.value , value);
    newItem.value = cleanEmpty(newItem.value);
    itemsMap.set(id , newItem);
    return res.json(itemsMap.get(id));
  }
  itemsMap.set(id,newItem);
  console.log(itemsMap);
  return res.status(200).json(newItem);
});

app.delete("/items/:id", (req: Request, res: Response) => {
  
  if(!itemsMap.has(req.params.id)){
    return res.status(400).json({
      error: "Item doesn't exist"
    })
  }
  itemsMap.delete(req.params.id);
  return res.status(200).json({
    message: "Item deleted successfully"
  })
});

app.listen(8081, () => {
  console.log("Running on port 8081");
});

function compareObject(one: object, two: object) {
  const final: object = {};
  Object.assign(final, one);

  const oldKeys = Object.keys(one);
  const newKeys = Object.keys(two);
  for (const key of newKeys) {
    const duplicate = oldKeys.find((k) => k === key);
    if (duplicate) {
      const duplicateKey = duplicate as keyof object;
      console.log(
        `${duplicate} => old: ${one[duplicateKey]} : new: ${two[duplicateKey]}`
      );
    }
  }

  Object.assign(final, two);
  return final;
}

function cleanEmpty(records: Record<string, any>): Record<string, any>
{
    const newRecords:Record<string, any> = {};
    for(const values in records)
    {
      if(records[values].trim() !== "")
      {
        newRecords[values] = records[values]
      }
    }
    return newRecords;
}