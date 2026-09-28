function getResultByPath(path, obj) {
     // Convert bracket notation to dot notation: results[1] -> results.1
    let normalizedPath = path.replace(/\[(\d+)\]/g, '.$1');
    let paths = normalizedPath.split('.');

    let res = obj;
    for (const key of paths) {
    if ( res === undefined) {
        return undefined;
    }
      if (res === null ) {
        return null;
      }
        res = res[key];
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

console.log(getResultByPath(path1, obj1));
console.log(getResultByPath(path2, obj2));
