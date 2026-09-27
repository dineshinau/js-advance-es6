function getResultByPath(path, obj) {
   const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.');

    let res = obj;
   for (const value of paths) {
     if (res == null) {
        return undefined;
       }
       res = res[value] ?? undefined;
    }
    return res;
}
const path1 = "data.results.status";
const obj1 = {
  data: {
    results:
    {
      status: "completed",
      error: "",
    }
  },
}


const path2 = "data.results[1].status[0].type"
const obj2 = {
  data: {
    results: [
      {
        status: "completed",
        error: "",
      },
      {
        status: [{ type: "done" }, { type: "start" }],
        error: "",
      },
    ],
  },
};

// console.log(getResultByPath(path1, obj1));
console.log(getResultByPath(path2, obj2));
